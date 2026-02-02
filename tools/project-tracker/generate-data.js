#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Project Tracker Data Generator
 * Scans directories for git repositories and outputs their status as JSON
 */

function isGitRepo(dir) {
  try {
    return fs.existsSync(path.join(dir, '.git'));
  } catch (e) {
    return false;
  }
}

function getGitInfo(repoPath) {
  try {
    const originalCwd = process.cwd();
    process.chdir(repoPath);
    
    // Get basic repo info
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
    const lastCommitDate = execSync('git log -1 --format=%ci', { encoding: 'utf8' }).trim();
    const lastCommitHash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
    const lastCommitMessage = execSync('git log -1 --format=%s', { encoding: 'utf8' }).trim();
    
    // Check if repo is clean (no uncommitted changes)
    let isClean = true;
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      isClean = status.trim() === '';
    } catch (e) {
      // If git status fails, assume dirty
      isClean = false;
    }
    
    // Get remote URL (GitHub/GitLab etc.)
    let remoteUrl = null;
    try {
      const remote = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
      // Convert SSH URLs to HTTPS for linking
      if (remote.startsWith('git@github.com:')) {
        remoteUrl = remote.replace('git@github.com:', 'https://github.com/').replace('.git', '');
      } else if (remote.startsWith('https://')) {
        remoteUrl = remote.replace('.git', '');
      } else {
        remoteUrl = remote;
      }
    } catch (e) {
      // No remote or access error
    }
    
    // Get commit count
    let commitCount = 0;
    try {
      commitCount = parseInt(execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim());
    } catch (e) {
      // Ignore errors
    }
    
    process.chdir(originalCwd);
    
    return {
      name: path.basename(repoPath),
      path: repoPath,
      branch,
      lastCommit: {
        hash: lastCommitHash,
        date: lastCommitDate,
        message: lastCommitMessage
      },
      status: isClean ? 'clean' : 'dirty',
      remoteUrl,
      commitCount
    };
  } catch (error) {
    console.error(`Error getting git info for ${repoPath}:`, error.message);
    return null;
  }
}

function scanDirectory(dirPath, maxDepth = 2, currentDepth = 0) {
  const repos = [];
  
  if (currentDepth >= maxDepth) {
    return repos;
  }
  
  try {
    if (isGitRepo(dirPath)) {
      const gitInfo = getGitInfo(dirPath);
      if (gitInfo) {
        repos.push(gitInfo);
      }
      return repos; // Don't scan subdirs of git repos
    }
    
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        const subPath = path.join(dirPath, entry.name);
        repos.push(...scanDirectory(subPath, maxDepth, currentDepth + 1));
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dirPath}:`, error.message);
  }
  
  return repos;
}

function main() {
  const scanPaths = process.argv.slice(2);
  
  // Default scan paths if none provided
  const defaultPaths = [
    '/home/sam/clawd',
    '/home/sam/Projects'
  ].filter(p => fs.existsSync(p));
  
  const pathsToScan = scanPaths.length > 0 ? scanPaths : defaultPaths;
  
  let allRepos = [];
  
  for (const scanPath of pathsToScan) {
    console.error(`Scanning ${scanPath}...`);
    const repos = scanDirectory(scanPath);
    allRepos.push(...repos);
  }
  
  // Sort by last commit date (newest first)
  allRepos.sort((a, b) => new Date(b.lastCommit.date) - new Date(a.lastCommit.date));
  
  // Output JSON
  const data = {
    generatedAt: new Date().toISOString(),
    totalRepos: allRepos.length,
    scannedPaths: pathsToScan,
    repositories: allRepos
  };
  
  console.log(JSON.stringify(data, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = { scanDirectory, getGitInfo, isGitRepo };
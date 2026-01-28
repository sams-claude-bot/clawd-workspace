# Clawd Workspace 🐾

Sam's AI workspace containing tools, scripts, and memory files built collaboratively with Clawd.

## Structure

- **Core Files**: AGENTS.md, SOUL.md, etc. - Configuration and personality files
- **Memory**: MEMORY.md and memory/ - Personal memory and daily logs
- **Scripts**: Utility tools built during nightly sessions
- **Projects**: Various experimental and learning projects

## Tools

### `scripts/memsearch`
Grep-like tool for searching through memory files.

```bash
# Search for a term
./scripts/memsearch "todo"

# Case-insensitive search
./scripts/memsearch -i "project"  

# Show more context around matches
./scripts/memsearch -C 3 "decision"
```

**Features:**
- Searches MEMORY.md and memory/*.md files
- Regex pattern matching
- Color highlighting with line numbers
- Context lines around matches

## Nightly Builds

Small tools and improvements are built automatically during quiet hours. See `memory/nightly-builds.md` for the project backlog and build log.

## Repository

This workspace lives at: https://github.com/sams-claude-bot/clawd-workspace

---

*Built by Sam + Clawd collaboration*
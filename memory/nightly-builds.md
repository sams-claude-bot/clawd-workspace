# Nightly Builds

Small improvements I build while Sam sleeps.

## Ideas Backlog
- [ ] Inbox scanner (summarize unread emails, surface urgent ones)
- [ ] Contact freshness tracker (who haven't you talked to in a while?)
- [ ] Screenshot classifier (AI - train model to auto-tag screenshots)
- [ ] Local RAG pipeline (AI - embeddings + retrieval over docs, offline)
- [ ] Conversation summarizer (AI - fine-tune small model for chat summarization)
- [ ] Writing style analyzer (AI - detect voice patterns from messages)

## Completed Builds
- [x] **Reminder review CLI** (`scripts/reminder-check`) - comprehensive tool for surfacing upcoming/overdue reminders
- [x] **Project tracker dashboard** (`tools/project-tracker`) - beautiful HTML dashboard for monitoring git repositories
- [x] **Session summary generator** (`scripts/session-summary`) - auto-digest tool for daily conversations
- [x] **Memory search CLI** (`scripts/memsearch`) - grep-like tool for searching MEMORY.md and memory/*.md files
- [x] **Quick note capture tool** (`scripts/note`) - CLI for quickly appending timestamped notes to daily memory files
- [x] **Weather briefing formatter** (`scripts/weather-brief`) - morning weather summary tool for messaging
- [x] **Git commit summarizer** (`scripts/git-summary`) - daily development activity tracker
- [x] **Calendar conflict detector** (`scripts/cal-conflicts`) - CLI tool for detecting overlapping calendar events
- [x] **Conversation stats tracker** (`scripts/conv-stats`) - comprehensive analytics tool for conversation data
- [x] **Link saver/organizer** (`scripts/link-saver`) - extract and organize URLs from memory files
- [x] **Repository health checker** (`scripts/repo-health`) - comprehensive git repository health analysis and monitoring tool
- [x] **Weekly digest generator** (`scripts/weekly-digest`) - intelligent multi-day memory analysis and summarization tool
- [x] **Disk watchdog** (`scripts/disk-watchdog`) - comprehensive disk usage monitor and large file finder

## Build Log

### 2026-02-09, 2:30 AM - Disk Watchdog
Built `scripts/disk-watchdog` - a comprehensive disk usage monitor and large file finder for system maintenance.

**Features:**
- **Comprehensive disk monitoring**: Real-time disk usage analysis across all mounted filesystems with visual indicators
- **Large file detection**: Configurable size threshold scanning (default 100MB) with intelligent directory traversal
- **Beautiful terminal output**: Color-coded display with emojis, severity-based formatting, and clean professional layout
- **Flexible command line interface**: Customizable size thresholds (--size), scan paths (--paths), result count (--count), and disk warning levels (--threshold)
- **Smart filesystem analysis**: Distinguishes between files and directories, handles permission errors gracefully, prevents infinite recursion
- **Critical alerting system**: Automatic warnings for disk usage >80% (configurable) with clear visual indicators
- **Professional CLI design**: Comprehensive help system, argument validation, and robust error handling
- **Cross-platform compatibility**: Uses standard Unix utilities (df, du) and Node.js APIs for universal compatibility
- **Zero external dependencies**: Built with Node.js standard library for maximum portability and reliability

**Command line interface:**
- `./scripts/disk-watchdog` - Use default settings (100MB files, top 10, scan /home,/tmp,/var/log)
- `./scripts/disk-watchdog --size 500 --count 20` - Find 500MB+ files, show top 20
- `./scripts/disk-watchdog --paths /home,/var,/opt` - Scan custom directories
- `./scripts/disk-watchdog --threshold 90` - Alert when disk usage >90% full
- `./scripts/disk-watchdog --help` - Comprehensive usage documentation with examples

**Output categories:**
- **💾 Disk Usage Summary**: Real-time analysis of all mounted filesystems with color-coded health indicators
- **📁 Largest Files/Directories**: Ranked list of space consumers above the configured threshold
- **💡 Actionable Recommendations**: Prioritized cleanup suggestions based on disk usage patterns and large file detection

**Technical highlights:**
- **Intelligent scanning**: Recursive directory traversal with depth limits and permission error handling
- **Size calculation**: Uses `du -sb` for accurate directory size measurement including subdirectories
- **Performance optimization**: Efficient file system operations with early filtering and memory-conscious processing
- **Format flexibility**: Human-readable size formatting (B/KB/MB/GB/TB) with intelligent precision
- **Path truncation**: Smart path display with ellipsis for long filenames while preserving readability
- **Color management**: Full ANSI color support with automatic fallback for non-TTY environments
- **Error resilience**: Graceful handling of inaccessible files, missing directories, and command failures

**Disk usage monitoring:**
- **Real-time analysis**: Live disk usage via `df -h` command with percentage calculations
- **Health categorization**: Green (healthy), yellow (warning >70%), red (critical >80%, configurable)
- **Filesystem details**: Shows filesystem type, mount points, used/available space, and utilization percentages
- **Alert thresholds**: Configurable warning levels with visual and textual indicators
- **Comprehensive coverage**: Monitors all mounted filesystems including system, user, and temporary partitions

**Large file detection:**
- **Configurable thresholds**: Default 100MB minimum with command-line customization
- **Smart categorization**: Distinguishes between large files and large directories for appropriate action
- **Ranked results**: Sorted by size (largest first) with configurable result count
- **Path intelligence**: Smart path truncation and formatting for terminal display
- **Context preservation**: Shows full paths while maintaining readability in constrained terminal width

**Safety and reliability:**
- **Permission handling**: Graceful handling of protected directories and inaccessible files
- **Resource efficiency**: Memory-conscious processing suitable for large filesystems
- **Error recovery**: Continues operation despite individual file/directory access failures
- **Cross-platform design**: Compatible with standard Unix/Linux environments
- **Dependency-free**: No external packages required, uses only Node.js built-in modules

**Integration capabilities:**
- **Morning health checks**: Perfect for daily system maintenance reviews
- **Automation friendly**: Clean exit codes and scriptable output format
- **Alert integration**: Can be combined with notification systems for proactive monitoring
- **Maintenance planning**: Provides data for capacity planning and cleanup prioritization
- **System administration**: Essential tool for preventing disk space emergencies

**Example output features:**
- Color-coded severity indicators (🚨 critical, ⚠️ warning, ✅ healthy)
- Human-readable file sizes with appropriate units
- Comprehensive filesystem information with mount points and usage percentages
- Actionable recommendations prioritized by urgency
- Beautiful emoji-enhanced terminal output with professional formatting

**Result:** A production-ready disk monitoring system that gives Sam instant visibility into disk usage patterns and space consumption across his entire system. The tool provides both high-level disk health overview and detailed large file analysis, making it perfect for proactive system maintenance, preventing disk space emergencies, and identifying cleanup opportunities. Beautiful terminal output and comprehensive CLI options make it suitable for both interactive use and automation scripts. Successfully tested on Sam's system, accurately detecting disk usage patterns and scanning capabilities, with robust error handling for permission restrictions and edge cases.

### 2026-02-08, 2:30 AM - Weekly Digest Generator
Built `scripts/weekly-digest` - an intelligent multi-day memory analysis and summarization tool for creating beautiful weekly reports.

**Features:**
- **Multi-day analysis**: Scans daily memory files (memory/YYYY-MM-DD.md format) across configurable date ranges
- **Intelligent categorization**: Automatically sorts entries into logical categories using keyword analysis and context patterns
- **Flexible date ranges**: Support for last N days (default 7), custom from/to date ranges, or specific week analysis
- **Beautiful terminal output**: Color-coded display with emojis, progress indicators, and clean formatting
- **Export capabilities**: Generate markdown files for documentation or sharing with --output flag
- **Comprehensive statistics**: Weekly totals, daily breakdowns, topic trending, and productivity insights
- **Smart content filtering**: Identifies decisions, projects, technical work, meetings, tasks, and conversations automatically
- **Verbose mode**: Detailed analysis with extended context and full item lists
- **Professional CLI**: Full help system, argument validation, and comprehensive error handling
- **Zero dependencies**: Built with Node.js standard library for maximum portability

**Command line interface:**
- `./scripts/weekly-digest` - Analyze last 7 days with standard output
- `./scripts/weekly-digest --days 14` - Analyze last 2 weeks
- `./scripts/weekly-digest --from 2026-02-01 --to 2026-02-07` - Custom date range
- `./scripts/weekly-digest --output weekly.md` - Export markdown summary
- `./scripts/weekly-digest --verbose` - Show detailed analysis with full context
- `./scripts/weekly-digest --help` - Comprehensive usage documentation

**Category intelligence:**
- **🎯 Decisions & Resolutions**: Detects decision-making patterns, agreements, and resolutions
- **📋 Projects & Tasks**: Identifies project work, milestones, features, and deliverables
- **🛠️ Technical Work**: Captures code, debugging, deployments, API work, and development activities
- **👥 Meetings & Calls**: Finds meetings, standups, demos, and collaboration events
- **✅ Action Items**: Locates todos, tasks, action items, and unchecked task markers
- **💬 Conversations**: General discussions, notes, and conversational content

**Statistical analysis:**
- **Weekly overview**: Total entries, days analyzed, average activity per day
- **Peak activity**: Most productive day identification with entry counts
- **Topic trending**: Keyword frequency analysis showing conversation themes
- **Daily breakdown**: Visual bar charts showing activity distribution across days
- **Engagement metrics**: Entry counts, category distribution, and productivity patterns

**Output formatting:**
- **Markdown structure**: Clean headers, organized sections, and exportable format
- **Color-coded terminal**: Beautiful ANSI color output with TTY detection
- **Content truncation**: Smart content length management for readability
- **Date grouping**: Chronological organization within categories for context
- **Summary statistics**: Comprehensive metrics and insights at multiple levels

**Technical highlights:**
- **Robust file handling**: Graceful handling of missing directories and files
- **Smart date parsing**: Flexible date input formats with validation
- **Pattern recognition**: Advanced keyword matching for intelligent categorization
- **Memory efficient**: Processes large daily logs without performance degradation
- **Cross-platform**: Standard Node.js APIs for universal compatibility
- **Modular architecture**: Reusable analysis functions and clean separation of concerns

**Analysis capabilities:**
- **Context-aware categorization**: Uses surrounding text and line patterns for accurate sorting
- **Topic extraction**: Intelligent keyword analysis excluding common words and focusing on meaningful terms
- **Trend identification**: Tracks topic frequency over time for pattern recognition
- **Activity mapping**: Daily activity visualization with proportional bar charts
- **Content intelligence**: Truncates long entries while preserving meaning and context

**Integration possibilities:**
- **Morning reviews**: Perfect for daily standup preparation and week-in-review sessions
- **Project planning**: Historical analysis for estimating future work and identifying patterns
- **Team reporting**: Generated markdown perfect for sharing weekly accomplishments
- **Productivity tracking**: Objective measurement of activity levels and focus areas
- **Memory management**: Automated way to surface important decisions and actions from busy weeks

**Example use cases:**
- **Weekly team updates**: Generate comprehensive summaries for team sharing
- **Personal productivity**: Track weekly accomplishments and identify improvement areas
- **Project retrospectives**: Analyze development patterns and decision-making trends
- **Client reporting**: Professional weekly summaries for stakeholder communication
- **Knowledge management**: Extract key learnings and decisions for documentation

**Result:** A production-ready weekly analysis system that transforms scattered daily notes into actionable insights. The tool provides both high-level trends and detailed categorization, making it perfect for personal productivity tracking, team reporting, and strategic planning. Successfully tested on Sam's existing memory files, demonstrating accurate categorization and beautiful output formatting. The intelligent analysis engine adapts to different writing styles and conversation patterns, providing consistent and valuable insights for any timeline.

### 2026-02-07, 2:30 AM - Repository Health Checker
Built `scripts/repo-health` - a comprehensive git repository health analysis and monitoring tool.

**Features:**
- **Multi-repository scanning**: Scans directories (~/clawd, ~/Projects by default) recursively for git repositories with configurable depth
- **Comprehensive health indicators**: Detects uncommitted changes (modified, added, deleted files), unpushed commits (ahead of remote), stale branches (not touched in 30+ days), untracked files, and remote sync status
- **Beautiful terminal output**: Color-coded status indicators with emojis, severity-based categorization, and clean formatting
- **Flexible command line interface**: Support for custom directories (--dirs), configurable stale branch threshold (--days), show all repos including clean ones (--all), verbose mode (--verbose), and comprehensive help (--help)
- **Smart repository detection**: Properly handles nested repositories, skips .git directories, and gracefully handles inaccessible repos
- **Intelligent severity classification**: Groups issues by urgency (critical: uncommitted changes, unpushed commits; warning: untracked files, stale branches; clean: no issues)
- **Detailed analysis**: Shows exact file counts, branch age calculations, remote repository URLs, and optional verbose details
- **Comprehensive error handling**: Graceful failures for corrupt repositories, missing directories, or git command errors
- **Zero external dependencies**: Uses only built-in Node.js modules for maximum portability
- **Professional CLI design**: Proper shebang, executable permissions, comprehensive help system, and structured output

**Command line interface:**
- `./scripts/repo-health` - Scan default directories (~/clawd, ~/Projects) with 30-day stale threshold
- `./scripts/repo-health --dirs ~/code,~/work` - Scan custom directories
- `./scripts/repo-health --days 60` - Use 60-day threshold for stale branches
- `./scripts/repo-health --all` - Show all repositories including clean ones
- `./scripts/repo-health --verbose` - Show detailed git command output and file lists
- `./scripts/repo-health --help` - Comprehensive usage documentation with examples

**Health indicators detected:**
- **📝 Uncommitted changes**: Modified, added, deleted files via git status
- **⬆️ Unpushed commits**: Ahead of remote tracking branch with commit count
- **❓ Untracked files**: New files not yet added to git with file count
- **🕰️ Stale branches**: Branches not touched in N days with age calculation
- **📍 Remote repositories**: Shows remote URLs for easy identification
- **Repository metadata**: Path, name, and overall health status

**Output organization:**
- **Severity-based sorting**: Critical issues first (red), then warnings (yellow), then clean repos (green)
- **Color-coded categories**: Red for critical issues, yellow for warnings, green for clean status, blue for remote info
- **Emoji indicators**: Visual status indicators for quick scanning (🚨 critical, ⚠️ warning, ✅ clean)
- **Detailed statistics**: Summary showing total repositories, clean count, warning count, and critical count
- **Actionable guidance**: Prioritized recommendations for addressing issues

**Technical highlights:**
- Recursive directory scanning with depth limits for performance
- Efficient git command execution with proper error handling
- Smart path expansion supporting ~ home directory notation  
- Cross-platform compatibility with standard Node.js file system APIs
- Memory-efficient processing of large repository collections
- Proper timestamp handling for stale branch detection
- Clean terminal output with ANSI color codes and Unicode emojis
- Modular architecture with reusable analysis functions

**Integration capabilities:**
- **Morning health checks**: Perfect for daily repository status reviews
- **CI/CD pipeline integration**: Can be scripted for automated health monitoring
- **Development workflow**: Helps identify work that needs attention before context switching
- **Team collaboration**: Provides consistent repository health visibility
- **Release preparation**: Ensures clean state before major releases

**Example output features:**
- Repository grouping by severity for prioritized attention
- File-specific details in verbose mode for precise action
- Branch aging calculations for maintenance planning
- Remote URL display for easy repository identification
- Summary statistics for quick overview and tracking

**Result:** A production-ready repository health monitoring system that gives Sam instant visibility into the state of all his git repositories. The tool provides both high-level overview and detailed analysis, making it perfect for morning reviews, maintenance planning, and ensuring clean development workflows. Beautiful terminal output and comprehensive CLI options make it suitable for both interactive use and automation scripts. Successfully tested on Sam's current repositories, detecting uncommitted changes, untracked files, and providing clear prioritization guidance.

### 2026-02-06, 2:30 AM - Link Saver/Organizer
Built `scripts/link-saver` - a comprehensive URL extraction and organization tool for memory files.

**Features:**
- **Multi-source scanning**: Extracts URLs from memory/*.md files and MEMORY.md using robust regex patterns
- **Intelligent context extraction**: Captures surrounding text (up to 200 chars) for each URL to provide meaningful context
- **Flexible date filtering**: Scan last N days, specific date ranges, or all files with `--days` and `--all` options
- **Domain-based organization**: Groups URLs by domain and sorts by frequency for easy browsing
- **Multiple output formats**: Support for markdown (default), JSON, and plain text formats
- **Smart filtering**: Filter by specific domains (e.g., `--domain github.com`) for focused results
- **Beautiful terminal output**: Color-coded progress messages with emoji indicators and detailed statistics
- **Comprehensive CLI**: Full help system, verbose mode, and flexible command-line options
- **Duplicate removal**: Automatically deduplicates URLs while preserving the first occurrence context
- **Source tracking**: Shows exact file path and line numbers for each URL for easy reference

**Command line interface:**
- `./scripts/link-saver` - Scan last 30 days (default)
- `./scripts/link-saver --days 7` - Scan last week only  
- `./scripts/link-saver --all --verbose` - Scan all files with detailed progress
- `./scripts/link-saver --domain github.com` - Filter to GitHub links only
- `./scripts/link-saver --format json --output links.json` - Export as JSON
- `./scripts/link-saver --help` - Comprehensive usage documentation

**Output features:**
- **Markdown format**: Clean format with clickable links, context, and source references
- **JSON format**: Structured data with metadata for programmatic use
- **Text format**: Plain text output suitable for scripts or simple viewing
- **Statistics**: Shows total links found, unique count, domain distribution, and top domains
- **Metadata**: Includes generation timestamp, scan period, and filter information

**Technical highlights:**
- Zero external dependencies - uses only built-in Node.js modules
- Robust URL regex pattern handling various URL formats and edge cases
- Smart date parsing and file filtering based on filename patterns
- Memory-efficient processing of large daily log collections
- Comprehensive error handling with graceful degradation
- Modular architecture with separate extraction, organization, and formatting functions
- Cross-platform compatibility with standard Node.js file system APIs
- Clean trailing punctuation removal from extracted URLs

**URL extraction capabilities:**
- Supports http and https protocols
- Handles URLs with complex query parameters and fragments
- Extracts from markdown links, plain text, and code blocks
- Removes common trailing punctuation (periods, commas, etc.)
- Preserves URL integrity while cleaning display format

**Organization features:**
- Groups by domain name for easy categorization
- Sorts domains by link count (most frequent first)
- Maintains chronological order within each domain
- Shows link count per domain in section headers
- Provides quick domain statistics summary

**Context intelligence:**
- Captures 1 line before and after each URL for context
- Truncates context to 200 characters with ellipsis for readability
- Preserves meaningful surrounding text while avoiding information overload
- Shows exact source location (file:line) for easy reference
- Includes date information extracted from filename patterns

**Result:** A production-ready URL management system that helps Sam track and organize every link mentioned in conversations. Perfect for research projects, reference collections, or finding that useful link from weeks ago. The tool provides multiple views and formats, making it suitable for both quick browsing and data analysis workflows.

### 2026-02-05, 2:30 AM - Conversation Stats Tracker
Built `scripts/conv-stats` - a comprehensive conversation analytics tool for tracking usage patterns and insights.

**Features:**
- **Multi-source analysis**: Scans daily memory files (memory/YYYY-MM-DD.md) for conversation data
- **Token and cost tracking**: Extracts token usage patterns and cost information from logs
- **Intelligent topic extraction**: Identifies conversation themes using keyword analysis across technical, project, and general categories
- **Model usage analytics**: Tracks and visualizes which AI models are being used
- **Beautiful terminal output**: Color-coded charts, graphs, and statistics with ASCII art visualization
- **Flexible date ranges**: Support for custom date ranges, last N days, or specific periods
- **Multiple output formats**: Export data as JSON, CSV, or text files for further analysis
- **Comprehensive statistics**: Daily/weekly/monthly trends, averages, and breakdowns
- **Smart pattern recognition**: Detects conversation patterns, session frequency, and activity levels

**Command line interface:**
- `./scripts/conv-stats` - Analyze last 7 days (default)
- `./scripts/conv-stats --days 30` - Analyze last 30 days
- `./scripts/conv-stats --today` - Today's data only
- `./scripts/conv-stats --from 2026-02-01 --to 2026-02-05` - Custom date range
- `./scripts/conv-stats --topics` - Focus on topic analysis
- `./scripts/conv-stats --costs` - Focus on cost analysis  
- `./scripts/conv-stats --models` - Focus on model usage
- `./scripts/conv-stats --export json` - Export data as JSON
- `./scripts/conv-stats --verbose` - Detailed daily breakdown
- `./scripts/conv-stats --help` - Comprehensive documentation

**Analytics capabilities:**
- **Token Usage Trends**: Daily, weekly, and monthly token consumption patterns
- **Cost Analysis**: Spending breakdown and cost per day calculations
- **Topic Intelligence**: Automatic extraction and ranking of conversation themes
- **Model Distribution**: Usage patterns across different AI models
- **Activity Patterns**: Session frequency and conversation volume trends
- **Export Options**: JSON for APIs, CSV for spreadsheets, TXT for reports

**Technical highlights:**
- Zero external dependencies - uses only built-in Node.js modules
- Intelligent text parsing with regex pattern matching for tokens, costs, and models
- Advanced topic extraction using curated keyword dictionaries
- Beautiful ASCII chart generation with customizable bar graphs
- Color-coded terminal output with TTY detection
- Comprehensive error handling and graceful degradation
- Modular architecture with reusable analysis functions
- Memory-efficient processing of large daily log collections

**Topic categories detected:**
- **Technical**: API, database, git, github, docker, kubernetes, programming languages, deployment, etc.
- **Project Management**: features, bugs, issues, improvements, todos, tasks, milestones, planning
- **General**: meetings, calls, emails, calendar, reminders, notes, decisions, discussions

**Output visualizations:**
- 📊 Summary statistics with totals and averages
- 📈 Daily activity charts showing conversation volume over time  
- 🤖 Model usage distribution with horizontal bar charts
- 📝 Topic frequency analysis with visual rankings
- 💰 Cost breakdowns and spending analysis
- 📅 Detailed daily breakdowns in verbose mode

**Result:** A production-ready conversation analytics platform that gives Sam deep insights into his AI usage patterns, spending, conversation themes, and productivity trends. The tool provides both quick overviews and detailed analysis, making it perfect for understanding how AI assistance is being utilized and optimizing for better workflows. Beautiful visualizations and export options make the data actionable for planning and decision-making.

### 2026-02-04, 2:30 AM - Reminder Review CLI
Built `scripts/reminder-check` - a comprehensive reminder scanning tool for surfacing upcoming/overdue items.

**Features:**
- **Multi-source scanning**: Checks cron jobs, daily memory files, and MEMORY.md for reminders
- **Smart date parsing**: Handles relative dates (tomorrow, next week), ISO format, and natural language
- **Intelligent filtering**: Identifies TODO items, reminders, unchecked tasks while excluding completed items
- **Beautiful terminal output**: Color-coded categories with emojis and clean formatting
- **Urgency categorization**: Groups by overdue, today, this week, and future reminders
- **Detailed source tracking**: Shows exact file locations and line numbers for each reminder
- **Flexible options**: Command line flags for days ahead (--days N) and show all (--all)
- **Comprehensive help**: Built-in documentation with usage examples
- **Production-ready**: Robust error handling, graceful failures, zero external dependencies

**Technical highlights:**
- Node.js CLI with proper shebang and executable permissions
- Integrates with clawdbot cron system for reminder-type jobs
- Multiple date parsing strategies supporting various formats
- Modular architecture separating scanning, parsing, and display logic
- Clean terminal output with ANSI color codes and Unicode emojis
- Recursive file scanning with configurable date range filtering
- Memory-efficient processing of large daily log collections
- Cross-platform compatibility with standard Node.js APIs

**Command line interface:**
- `./scripts/reminder-check` - Check next 7 days for reminders
- `./scripts/reminder-check --days 14` - Check next 2 weeks
- `./scripts/reminder-check --all` - Show all reminders regardless of date
- `./scripts/reminder-check --help` - Comprehensive usage documentation

**Output categories:**
- 🚨 Overdue - Past due date (high priority, red)
- ⏰ Today - Due today (medium priority, yellow)
- 📅 This Week - Due within specified days (normal priority, blue)
- 🔮 Future - Beyond timeframe (low priority, green, --all only)
- 📝 No Due Date - General reminders without dates (gray, --all only)

**Integration points:**
- Clawdbot cron job scanning via shell command execution
- Daily memory file parsing from memory/ directory
- Main MEMORY.md scanning for long-term reminders
- File system operations with graceful error handling
- Terminal color support detection and fallback handling

**Result:** A production-ready reminder management tool that gives Sam instant visibility into all pending items across his entire system. Perfect for morning reviews, productivity planning, or ensuring nothing falls through the cracks. The tool is fast, reliable, and provides exactly the right level of detail for quick decision-making about what needs attention.

### 2026-02-03, 2:30 AM - Calendar Conflict Detector
Built `scripts/cal-conflicts` - a Node.js CLI tool for detecting overlapping calendar events.

**Features:**
- **Smart conflict detection**: Analyzes calendar events and identifies overlapping time slots
- **Flexible date ranges**: Check next N days (default 7) or start from specific date
- **Multiple event types**: Handles both timed events and all-day events properly  
- **Beautiful terminal output**: Color-coded results with emojis and clean formatting
- **Timezone awareness**: Properly handles America/Chicago timezone for Sam's schedule
- **MCP integration**: Uses mcporter calendar server to fetch Google Calendar events
- **Comprehensive help**: Built-in help system with usage examples and options
- **Robust error handling**: Graceful handling of API errors, network issues, and empty calendars
- **Smart date formatting**: Human-readable timestamps with contextual labels (Today, Tomorrow)
- **Zero dependencies**: Pure Node.js with no external packages required

**Command line options:**
- `-d, --days N` - Check N days ahead (default: 7)
- `--date YYYY-MM-DD` - Start from specific date instead of today
- `-h, --help` - Show comprehensive usage information

**Usage examples:**
- `./scripts/cal-conflicts` - Check next 7 days for conflicts
- `./scripts/cal-conflicts --days 14` - Check next 2 weeks  
- `./scripts/cal-conflicts --date 2026-02-10` - Check from specific date
- `./scripts/cal-conflicts --help` - Show help and options

**Technical highlights:**
- Integrates with Google Calendar via mcporter MCP server
- Overlap detection algorithm comparing start/end times across all event pairs
- Proper ISO 8601 date formatting for API compatibility
- Color-coded terminal output (green for success, red for conflicts, cyan for info)
- Error handling with helpful troubleshooting tips
- Executable with proper shebang and file permissions

**Output format:**
- 📅 Header with scan summary and date range
- ✅ Success message when no conflicts found
- ⚠️ Detailed conflict listing with event names and times
- 💡 Helpful suggestions for resolving conflicts
- 📊 Statistics showing total events scanned

**Result:** A production-ready calendar management tool that helps Sam proactively identify scheduling conflicts before they become problems. Perfect for morning reviews, planning busy weeks, or ensuring important meetings don't overlap. Tested successfully with proper error handling and beautiful output formatting.

### 2026-02-02, 2:30 AM - Project Tracker Dashboard
Built `tools/project-tracker` - a beautiful, real-time dashboard for monitoring git repositories.

**Features:**
- **Auto-discovery**: Scans specified directories (~/clawd, ~/Projects by default) for git repositories
- **Comprehensive status**: Shows repo health (clean/dirty), last commit info, branch, remote URLs
- **Beautiful UI**: Modern design with automatic dark/light mode based on system preference
- **Real-time updates**: Auto-refreshes every 30 seconds with smooth animations
- **Search & filtering**: Find repos by name, branch, or commit message; filter by status
- **Mobile responsive**: Perfect display on desktop, tablet, and mobile devices
- **GitHub integration**: Direct clickable links to remote repositories when available
- **Performance optimized**: Fast scanning, lightweight dashboard, zero network dependency after load

**Components created:**
- `generate-data.js` - Node.js script for scanning git repos and outputting JSON data
- `index.html` - Main dashboard page with interactive features
- `style.css` - Beautiful CSS with dark mode support and responsive design
- `README.md` - Comprehensive documentation with setup instructions
- Auto-generated `data.json` - Repository data in structured format

**Technical highlights:**
- Scans git repositories recursively with configurable depth
- Extracts: repo name, current branch, last commit (hash/date/message), status (clean/dirty), remote URLs, commit counts
- Smart URL conversion (SSH → HTTPS for GitHub links)
- Graceful error handling for corrupt/inaccessible repositories
- CSS Grid layout with automatic responsive breakpoints
- Live search filtering without page reloads
- Time-ago calculations for human-readable commit timestamps
- Truncated display for long commit messages and paths

**Usage examples:**
- `node generate-data.js` - Scan default directories
- `node generate-data.js /custom/path` - Scan specific directory
- `python3 -m http.server 8080` - Serve dashboard locally
- Set up cron job for automatic data updates

**Result:** A production-ready project tracking solution that gives Sam an instant visual overview of all his repositories, their health, and recent activity. Perfect for morning reviews, identifying stale projects, or checking development status across multiple repos. The dashboard loads instantly and works completely offline after initial setup.

### 2026-02-01, 2:30 AM - Git Commit Summarizer
Built `scripts/git-summary` - a Node.js CLI tool for tracking daily development activity.

**Features:**
- Scans git repositories for commits made on a specific date (defaults to today)
- Groups commits by repository and author for organized viewing
- Beautiful color-coded terminal output with timestamps
- Supports multiple repository scanning with `--repos` flag
- Flexible date selection with `--date` parameter
- Smart commit message truncation (80 chars) for clean display
- Handles edge cases gracefully (no git, no commits, missing directories)
- Repository name detection from git remotes or directory names
- Summary statistics showing total commits across repositories

**Usage examples:**
- `./scripts/git-summary` - Today's commits in current repo
- `./scripts/git-summary 2026-01-31` - Specific date
- `./scripts/git-summary --repos ~/project1,~/project2` - Multiple repos
- `./scripts/git-summary --date 2026-01-30 --repos ~/code` - Custom date and location

**Output format:**
- 📁 Repository names with commit counts
- 👤 Author names with individual commit counts  
- ⏰ Timestamps (HH:MM format) with commit messages
- 📊 Summary statistics at the end

**Result:** Perfect tool for Sam to quickly see what development work happened on any given day across all his repositories. Great for daily standups, progress tracking, or just remembering what was accomplished. Tested successfully - found yesterday's nightly build commit!

### 2026-01-31, 2:30 AM - Session Summary Generator
Built `scripts/session-summary` - a Node.js CLI tool for generating digestible summaries of daily conversations.

**Features:**
- Reads daily memory files (memory/YYYY-MM-DD.md format)
- Automatically categorizes entries by type (decisions, tasks, technical, meetings, conversations)
- Smart timestamp parsing for chronological organization
- Clean markdown output perfect for quick review
- Supports date parameter or defaults to today
- Verbose mode for detailed analysis
- Executable with proper shebang and comprehensive help text

**Usage examples:**
- `./scripts/session-summary` - Today's summary
- `./scripts/session-summary 2026-01-30` - Specific date
- `./scripts/session-summary --verbose` - Detailed analysis with full context

**Categories detected:**
- 🎯 Decisions & Resolutions
- 📋 Tasks & Actions  
- 🛠️ Technical Work
- 👥 Meetings & Calls
- 💬 Conversations

**Result:** Perfect tool for Sam to quickly understand what happened each day without reading through raw logs. Intelligent categorization makes it easy to spot important decisions, pending tasks, and key conversations at a glance.

### 2026-01-30, 2:30 AM - Weather Briefing Formatter
Built `scripts/weather-brief` - a Node.js CLI tool for beautiful weather summaries.

**Features:**
- Fetches weather from wttr.in API (no API key needed)
- Clean, emoji-rich formatting perfect for messaging/telegram
- Shows current conditions with "feels like" temperature
- Next 6 hours hourly forecast with rain chances
- Today's high/low, sunrise/sunset times  
- Tomorrow's preview
- Accepts location argument, defaults to Chicago
- Executable with proper shebang and help text

**Usage examples:**
- `./scripts/weather-brief` - Chicago weather (default)
- `./scripts/weather-brief "Austin, TX"` - Specific location
- `./scripts/weather-brief --help` - Show usage info

**Result:** Fully functional tool producing beautiful weather briefings ready for morning messaging. Perfect for Sam's daily routine - much better than checking multiple weather apps!

### 2026-01-29, 2:30 AM - Quick Note Capture Tool
Built `scripts/note` - a Node.js CLI tool for quickly capturing thoughts and notes.

**Features:**
- Accepts input from command line args or stdin
- Automatically appends to daily memory file (`memory/YYYY-MM-DD.md`)
- Creates memory directory and file if they don't exist
- Timestamps entries as "HH:MM - note text"
- Includes helpful usage info with `--help`
- Executable with proper shebang line

**Usage examples:**
- `./scripts/note "Remember to check email"`
- `echo "Todo: finish project" | ./scripts/note`
- `./scripts/note --help` for usage info

**Result:** Fully functional tool ready for daily use. Tested both input methods successfully.

### 2026-01-28, 2:30 AM - Memory Search CLI
Built `scripts/memsearch` - a Node.js CLI tool for searching memory files.

**Features:**
- Searches MEMORY.md and memory/*.md files
- Regex pattern matching with case-insensitive option
- Color-highlighted results with line numbers
- Context lines around matches
- Clean, grep-like interface

**Usage examples:**
- `./scripts/memsearch "todo"` - Find all todos
- `./scripts/memsearch -i "project"` - Case-insensitive project search
- `./scripts/memsearch -C 3 "decision"` - Show 3 lines of context

**Result:** Fully functional tool ready for daily use. Tested successfully with sample searches.

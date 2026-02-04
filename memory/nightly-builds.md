# Nightly Builds

Small improvements I build while Sam sleeps.

## Ideas Backlog
- [ ] Conversation stats tracker (tokens, costs, topics)
- [ ] Link saver/organizer (URLs mentioned in chats → organized list)

## Completed Builds
- [x] **Reminder review CLI** (`scripts/reminder-check`) - comprehensive tool for surfacing upcoming/overdue reminders
- [x] **Project tracker dashboard** (`tools/project-tracker`) - beautiful HTML dashboard for monitoring git repositories
- [x] **Session summary generator** (`scripts/session-summary`) - auto-digest tool for daily conversations
- [x] **Memory search CLI** (`scripts/memsearch`) - grep-like tool for searching MEMORY.md and memory/*.md files
- [x] **Quick note capture tool** (`scripts/note`) - CLI for quickly appending timestamped notes to daily memory files
- [x] **Weather briefing formatter** (`scripts/weather-brief`) - morning weather summary tool for messaging
- [x] **Git commit summarizer** (`scripts/git-summary`) - daily development activity tracker
- [x] **Calendar conflict detector** (`scripts/cal-conflicts`) - CLI tool for detecting overlapping calendar events

## Build Log

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

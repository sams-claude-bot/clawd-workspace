# Nightly Builds

Small improvements I build while Sam sleeps.

## Ideas Backlog
- [ ] Project tracker dashboard (simple HTML status page)
- [ ] Reminder review CLI (surface upcoming/overdue items)
- [ ] Git commit summarizer (what changed in repos today)
- [ ] Conversation stats tracker (tokens, costs, topics)
- [ ] Calendar conflict detector (find overlapping events)
- [ ] Link saver/organizer (URLs mentioned in chats → organized list)

## Completed Builds
- [x] **Session summary generator** (`scripts/session-summary`) - auto-digest tool for daily conversations
- [x] **Memory search CLI** (`scripts/memsearch`) - grep-like tool for searching MEMORY.md and memory/*.md files
- [x] **Quick note capture tool** (`scripts/note`) - CLI for quickly appending timestamped notes to daily memory files
- [x] **Weather briefing formatter** (`scripts/weather-brief`) - morning weather summary tool for messaging

## Build Log

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

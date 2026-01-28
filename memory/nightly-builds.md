# Nightly Builds

Small improvements I build while Sam sleeps.

## Ideas Backlog
- [ ] Quick note capture tool (voice/text → daily memory file)
- [ ] Session summary generator (auto-digest of daily conversations)
- [ ] Project tracker dashboard (simple HTML status page)
- [ ] Reminder review CLI (surface upcoming/overdue items)
- [ ] Weather briefing formatter (morning summary for telegram)
- [ ] Git commit summarizer (what changed in repos today)
- [ ] Conversation stats tracker (tokens, costs, topics)
- [ ] Calendar conflict detector (find overlapping events)
- [ ] Link saver/organizer (URLs mentioned in chats → organized list)

## Completed Builds
- [x] **Memory search CLI** (`scripts/memsearch`) - grep-like tool for searching MEMORY.md and memory/*.md files

## Build Log

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

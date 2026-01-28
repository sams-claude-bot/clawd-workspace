# TOOLS.md - Local Notes

Skills define *how* tools work. This file is for *your* specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:
- Camera names and locations
- SSH hosts and aliases  
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras
- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH
- home-server → 192.168.1.100, user: admin

### TTS
- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Google Calendar

Access via `mcporter` MCP server:
- Server: `calendar` (12 tools)
- Account: `normal` (sammcdsam@gmail.com)
- Primary calendar: `primary`

Common commands:
```bash
# List events
mcporter call calendar.list-events calendarId=primary timeMin="2026-01-25T00:00:00" timeMax="2026-01-25T23:59:59" timeZone="America/Chicago"

# Create event
mcporter call calendar.create-event calendarId=primary summary="Event Name" start="2026-01-25T14:00:00" end="2026-01-25T14:30:00" timeZone="America/Chicago"

# Delete event
mcporter call calendar.delete-event calendarId=primary eventId=<id>

# List all calendars
mcporter call calendar.list-calendars
```

⚠️ Always use the correct year! Check system date before creating events.

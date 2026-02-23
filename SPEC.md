# Instagram Feed Plugin - Specification

## What It Does
Display Instagram posts on Framer sites. Users connect their Instagram account, select posts, and embed a feed grid.

## How Users Connect
1. Click "Connect Instagram" in plugin
2. Redirect to Instagram OAuth (Basic Display API)
3. Grant permission to read media
4. Return to plugin with access token

## Features

### Account Connection
- OAuth 2.0 flow with Instagram Basic Display API
- Token storage & refresh
- Multiple account support
- Disconnect/reconnect option

### Feed Display
- Grid layout (2, 3, or 4 columns)
- Square or masonry layout
- Show/hide captions
- Show/hide like counts
- Load more / pagination

### Customization
- Column count selector
- Gap/spacing options
- Border radius
- Hover effects (zoom, overlay)
- Dark/light overlay

### Content Selection
- Recent posts (default 12)
- Specific posts by URL
- Hashtag filtering (if API supports)

## Technical Considerations
- Instagram Basic Display API (deprecated but still works)
- Alternatively: Instagram Graph API for business
- Tokens expire in 60 days - need refresh logic
- Rate limits: 200 calls/hour

## UI Screens
1. **Home** - Connect account, show connection status
2. **Select Posts** - Browse and select posts to display
3. **Customize** - Layout and style options
4. **Preview** - Live preview of the feed

## Output
- Generates embed code for Framer
- Returns component with props for customization

---

Version: 0.1.0
Status: Building

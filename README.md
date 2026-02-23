# 📸 Instagram Feed Plugin

> Display your Instagram posts on your Framer site with a beautiful, customizable grid.

[![Framer Plugin](https://img.shields.io/badge/Plugin-View-blue)](https://www.framer.com/marketplace/)

## The Problem

You want to showcase your Instagram content on your Framer site, but:

- Manually embedding posts is tedious
- Existing plugins are expensive or limited
- No control over appearance
- Hard to keep feed updated

You need a simple way to display your Instagram posts that looks great and stays fresh.

## The Solution

**Instagram Feed** gives you:

- ✅ **One-click connection** — OAuth with Instagram
- ✅ **Post selection** — Choose exactly which posts to show
- ✅ **Full customization** — Layout, colors, hover effects
- ✅ **Live preview** — See changes in real-time
- ✅ **Embed code** — Copy and paste into Framer

## Who It's For

| User | Use Case |
|------|----------|
| **Photographers** | Showcase portfolio from Instagram |
| **Designers** | Share visual work |
| **Brands** | Social proof on landing pages |
| **Influencers** | Grow following from website |
| **E-commerce** | Product UGC on product pages |

## Installation

### Step 1: Download
Download `plugin.zip` from this repository.

### Step 2: Upload to Framer
1. Go to [Framer Marketplace Dashboard](https://www.framer.com/marketplace/dashboard/plugins/)
2. Click **Add Plugin**
3. Select `plugin.zip`
4. Wait for upload

### Step 3: Connect
1. Open your Framer project
2. Add the plugin from the plugins panel
3. Click **Connect Instagram**
4. Authorize the app

## User Guide

### Connecting Your Account

1. Open the plugin in Framer
2. Click **Connect Instagram**
3. A browser popup appears (if blocked, allow popups)
4. Log into Instagram if prompted
5. Click **Authorize** or **Allow**
6. You're redirected back with posts loaded

**Permissions requested:**
- `instagram_basic` — Read your profile info
- `instagram_manage_insights` — (optional) View post metrics

**We never:**
- ❌ Post to your account
- ❌ Access your DMs
- ❌ Share your data

### Selecting Posts

After connecting:

1. Browse your posts in the grid
2. Click to select/deselect
3. Use **Select All** for quick selection
4. Use **Deselect All** to start fresh
5. See like counts on each post

**Tips:**
- Select 6-12 posts for best appearance
- Mix landscape and portrait (grid adjusts automatically)
- Choose your best-performing posts

### Customizing Appearance

#### Layout Options

| Setting | Options | Description |
|---------|---------|-------------|
| Columns | 2, 3, 4 | Posts per row |
| Gap | 0-24px | Space between images |
| Border Radius | 0-24px | Corner roundness |
| Layout | Grid, Masonry | Arrangement style |

**Recommended settings:**
- 3 columns for standard layouts
- 8-12px gap for clean separation
- 8px radius for subtle rounding

#### Content Options

| Setting | Default | Description |
|---------|---------|-------------|
| Show Captions | Off | Display post text |
| Show Likes | On | Show like count |

#### Hover Effects

| Effect | Behavior |
|--------|----------|
| None | No interaction |
| Zoom | Image scales up on hover |
| Overlay | Dark overlay with likes on hover |

**Best combinations:**
- Instagram aesthetic: 3 columns, 8px gap, zoom hover
- Clean/minimal: 4 columns, 4px gap, overlay hover
- Portfolio: 2 columns, 16px gap, no hover

### Previewing

The preview shows exactly how your feed will look:

- Real-time updates as you change settings
- Accurate layout representation
- Shows captions and likes if enabled
- Displays like counts

### Exporting

1. Click **Copy Code** in the preview screen
2. The embed code is copied to clipboard
3. Paste into a Code Embed element in Framer
4. Publish to see it live!

## Features

### Account Connection
- ✅ **OAuth 2.0** — Secure Instagram login
- ✅ **Read-only Access** — No posting permissions needed
- ✅ **Multiple Accounts** — Support for switching accounts
- ✅ **Disconnect Option** — Easy account removal

### Post Selection
- ✅ **Grid Browse** — Visual post selection
- ✅ **Like Counts** — See engagement metrics
- ✅ **Select All/None** — Quick actions
- ✅ **Pagination** — Handle large accounts

### Customization
- ✅ **Column Count** — 2, 3, or 4 columns
- ✅ **Gap Spacing** — 0-24px adjustable
- ✅ **Border Radius** — 0-24px rounded corners
- ✅ **Grid/Masonry** — Two layout styles
- ✅ **Hover Effects** — None, zoom, or overlay
- ✅ **Caption Toggle** — Show/hide post text
- ✅ **Likes Toggle** — Show/hide like counts

### Preview & Export
- ✅ **Live Preview** — Real-time appearance
- ✅ **Copy Code** — One-click embed generation
- ✅ **Summary Stats** — See your settings at a glance

### UI/UX
- ✅ **Dark/Light Theme** — Automatic based on Framer
- ✅ **Responsive** — Works on any screen
- ✅ **Fast Loading** — Optimized performance
- ✅ **Error Handling** — Clear error messages

## Use Cases

### Photography Portfolio
```
Columns: 3
Gap: 12px
Radius: 8px
Hover: Zoom
Likes: Off
```
Showcase your best shots with subtle zoom effect

### Brand Landing Page
```
Columns: 4
Gap: 4px
Radius: 4px
Hover: Overlay
Likes: On
```
Maximize visibility, show social proof

### Product Showcase
```
Columns: 2
Gap: 16px
Radius: 12px
Hover: Zoom
Captions: On
```
Larger images with product context

### Blog Sidebar
```
Columns: 2
Gap: 8px
Radius: 8px
Hover: None
```
Compact feed for blog integration

## Technical Details

### How It Works

1. **OAuth Flow** — User authorizes app via Instagram
2. **Token Storage** — Access token saved securely
3. **API Calls** — Fetch user media via Instagram API
4. **Embed Generation** — Create embeddable HTML/CSS

### API Used

- **Instagram Basic Display API** — For personal accounts
- **Instagram Graph API** — For business accounts (future)

### Rate Limits

- 200 requests per hour (Instagram limit)
- Tokens refresh automatically
- Local caching for performance

### Security

- OAuth 2.0 (industry standard)
- Tokens stored locally (never on servers)
- No data collection or tracking
- Read-only permissions only

## Troubleshooting

### "Can't connect to Instagram"

1. Check your internet connection
2. Disable ad blockers temporarily
3. Allow popups in browser
4. Try a different browser
5. Ensure Instagram account is public

### "Posts not loading"

1. Refresh the plugin
2. Reconnect your account
3. Check if you have any public posts
4. Verify token hasn't expired

### "Embed code not working"

1. Make sure to use a Code Embed element
2. Check that JavaScript is enabled
3. Verify the code copied completely
4. Try repasting the code

### "Feed looks different than preview"

- Preview shows approximation
- Actual appearance depends on your Framer theme
- Check your site's CSS for conflicts

### "How do I update the feed?"

The embed code fetches live data. To refresh:
1. Open the plugin
2. Your posts update automatically
3. Re-export code if needed

## Roadmap

Planning to add:

- 🔄 **Auto-refresh** — Keep feed updated automatically
- 📱 **Stories** — Display Instagram Stories
- 🏷️ **Hashtag Filter** — Filter by hashtags
- 🎨 **More Themes** — Pre-built style presets
- 📊 **Analytics** — Track embed performance

## Support

- **Bugs:** Open a GitHub issue
- **Questions:** Use GitHub Discussions
- **Features:** Suggest on GitHub

---

**Version:** 0.1.0  
**Author:** [Levi Tijerina](https://github.com/levi-openclaw)  
**License:** MIT

---

*Share your Instagram. Grow your audience. 📸*

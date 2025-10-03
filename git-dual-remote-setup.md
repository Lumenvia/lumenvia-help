# Git Dual Remote Setup

This repository is configured to push to two GitHub repositories simultaneously.

## Current Configuration

```bash
origin  https://github.com/Lumenvia/quest-for-lumenvia.git (fetch)
origin  https://github.com/Lumenvia/quest-for-lumenvia.git (push)
origin  https://github.com/Lumenvia/workspace-link-buddy.git (push)
```

## How It Works

When you run `git push origin main`, it automatically pushes to both:
1. **Primary Repository**: `Lumenvia/quest-for-lumenvia`
2. **Secondary Repository**: `Lumenvia/workspace-link-buddy`

## Commands

```bash
# Single command pushes to both repositories
git push origin main

# Push to specific remote only
git push workspace-buddy main  # Only to workspace-link-buddy

# Check remote configuration
git remote -v
```

## Setup Commands (Already Configured)

If you need to replicate this setup elsewhere:

```bash
# Add multiple push URLs to origin
git remote set-url --add --push origin https://github.com/Lumenvia/quest-for-lumenvia.git
git remote set-url --add --push origin https://github.com/Lumenvia/workspace-link-buddy.git
```

## Documentation Deployment

Both repositories will trigger GitHub Pages deployment for documentation:
- **Primary**: https://lumenvia.github.io/quest-for-lumenvia/
- **Secondary**: https://lumenvia.github.io/workspace-link-buddy/

## Benefits

- ✅ **Single command** pushes to both repositories
- ✅ **Automatic synchronization** between repos
- ✅ **Dual deployment** triggers for documentation
- ✅ **Backup repository** for redundancy
- ✅ **Maintains git history** in both locations

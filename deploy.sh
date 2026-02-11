#!/bin/bash

# Production Deployment Script for mind-space
# This script prepares and deploys the project to GitHub and Vercel

set -e  # Exit on error

echo "🚀 Mind-Space Production Deployment"
echo "===================================="
echo ""

# Step 1: Verify we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

echo "✅ Project root verified"
echo ""

# Step 2: Check git status
echo "📋 Checking git status..."
git status --short
echo ""

# Step 3: Stage changes
echo "📦 Staging changes..."
git add proxy.ts
git rm middleware.ts 2>/dev/null || echo "middleware.ts already removed"
git add .env.example
git add test-cerebrus-api.js
echo "✅ Changes staged"
echo ""

# Step 4: Commit
echo "💾 Committing changes..."
git commit -m "feat: migrate from middleware.ts to proxy.ts for Next.js 16 compatibility

- Renamed middleware.ts to proxy.ts
- Updated function name from middleware() to proxy()
- Fixes Vercel deployment warning
- All functionality preserved (auth, rate limiting, security headers)
- Removed API key from .env.example for security"

echo "✅ Changes committed"
echo ""

# Step 5: Push to GitHub
echo "📤 Pushing to GitHub..."
read -p "Push to origin/backup-2026-02-10? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git push origin backup-2026-02-10
    echo "✅ Pushed to GitHub"
else
    echo "⏭️  Skipped push"
fi
echo ""

# Step 6: Deploy to Vercel (optional)
echo "🌐 Deploy to Vercel?"
read -p "Run 'vercel --prod'? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if command -v vercel &> /dev/null; then
        vercel --prod
        echo "✅ Deployed to Vercel"
    else
        echo "❌ Vercel CLI not found. Install with: npm i -g vercel"
        exit 1
    fi
else
    echo "⏭️  Skipped Vercel deployment"
    echo ""
    echo "To deploy manually:"
    echo "1. Go to https://vercel.com"
    echo "2. Import project from GitHub: TattvaAI/mind-space"
    echo "3. Configure environment variables"
    echo "4. Deploy"
fi

echo ""
echo "✅ Deployment process complete!"
echo ""
echo "📝 Next steps:"
echo "1. Configure environment variables in Vercel dashboard"
echo "2. Test the deployed application"
echo "3. Update OAuth redirect URIs for production domain"

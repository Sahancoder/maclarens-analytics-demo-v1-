#!/bin/bash
# Deploy McLarens Analytics to GitHub and Vercel

echo "🚀 Deploying McLarens Analytics Demo..."
echo ""

# Step 1: Initialize Git (if not already)
if [ ! -d ".git" ]; then
  echo "📦 Initializing Git repository..."
  git init
  git branch -M main
fi

# Step 2: Add all files
echo "📝 Adding files to Git..."
git add .

# Step 3: Commit
echo "💾 Creating commit..."
git commit -m "Deploy: McLarens Analytics Demo with mock data"

# Step 4: Add remote (if not exists)
if ! git remote | grep -q 'origin'; then
  echo "🔗 Adding GitHub remote..."
  git remote add origin https://github.com/Sahancoder/maclarens-analytics-demo-v1-.git
fi

# Step 5: Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main --force

echo ""
echo "✅ Pushed to GitHub successfully!"
echo ""
echo "📌 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Click 'Add New Project'"
echo "3. Import: Sahancoder/maclarens-analytics-demo-v1-"
echo "4. Add Environment Variable:"
echo "   NEXT_PUBLIC_USE_MOCK_DATA=true"
echo "5. Click 'Deploy'"
echo ""
echo "🎉 Your app will be live in 2-3 minutes!"

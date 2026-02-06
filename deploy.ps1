# Deploy McLarens Analytics to GitHub and Vercel
# PowerShell script for Windows

Write-Host "🚀 Deploying McLarens Analytics Demo..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Initialize Git (if not already)
if (-not (Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
    git branch -M main
}

# Step 2: Add all files
Write-Host "📝 Adding files to Git..." -ForegroundColor Yellow
git add .

# Step 3: Commit
Write-Host "💾 Creating commit..." -ForegroundColor Yellow
git commit -m "Deploy: McLarens Analytics Demo with mock data"

# Step 4: Add remote (if not exists)
$remotes = git remote
if ($remotes -notcontains 'origin') {
    Write-Host "🔗 Adding GitHub remote..." -ForegroundColor Yellow
    git remote add origin https://github.com/Sahancoder/maclarens-analytics-demo-v1-.git
}

# Step 5: Push to GitHub
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main --force

Write-Host ""
Write-Host "✅ Pushed to GitHub successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📌 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://vercel.com" -ForegroundColor White
Write-Host "2. Click 'Add New Project'" -ForegroundColor White
Write-Host "3. Import: Sahancoder/maclarens-analytics-demo-v1-" -ForegroundColor White
Write-Host "4. Add Environment Variable:" -ForegroundColor White
Write-Host "   NEXT_PUBLIC_USE_MOCK_DATA=true" -ForegroundColor Yellow
Write-Host "5. Click 'Deploy'" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Your app will be live in 2-3 minutes!" -ForegroundColor Green

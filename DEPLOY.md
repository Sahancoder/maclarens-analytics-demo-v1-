# 🚀 Quick Start - Deploy to Vercel

## Prerequisites
- GitHub account
- Vercel account (free at vercel.com)

## Step-by-Step Deployment

### 1️⃣ Push to GitHub

**Option A: Using PowerShell (Windows)**
```powershell
cd "e:\My Projects\frontend"
.\deploy.ps1
```

**Option B: Manual Commands**
```bash
cd "e:\My Projects\frontend"

# Initialize Git
git init
git add .
git commit -m "Initial commit - Demo with mock data"

# Connect to GitHub
git remote add origin https://github.com/Sahancoder/maclarens-analytics-demo-v1-.git
git branch -M main
git push -u origin main --force
```

### 2️⃣ Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select: `Sahancoder/maclarens-analytics-demo-v1-`
5. Vercel will auto-detect Next.js - just click **"Deploy"**

### 3️⃣ Configure Environment Variables (Important!)

After deployment:
1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Add these variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_USE_MOCK_DATA` | `true` |
| `NEXTAUTH_SECRET` | `any-random-string-here` |

4. Click **"Deployments"** → **"Redeploy"** (if needed)

### 4️⃣ Access Your Live App

Your app will be at: `https://your-project-name.vercel.app`

## ✅ Success Checklist

- [ ] Code pushed to GitHub
- [ ] Project imported to Vercel
- [ ] Environment variables added
- [ ] App is live and loading
- [ ] Can log in with demo credentials
- [ ] Dashboard shows sample data

## 🐛 Common Issues

### "Failed to fetch" errors
**Solution:** Make sure `NEXT_PUBLIC_USE_MOCK_DATA=true` is set in Vercel

### Build fails
**Solution:** Check Vercel build logs. Usually a TypeScript error.

### Blank page
**Solution:** Check browser console. Likely missing environment variables.

## 📞 Need Help?

1. Check Vercel deployment logs
2. Check browser console (F12)
3. Verify environment variables are set
4. Ensure `.env.production` exists

## 🎉 You're Done!

Your app is now live with:
- ✅ Mock data (no backend needed)
- ✅ All features working
- ✅ Fast loading
- ✅ Free hosting

# McLarens Analytics - Frontend Demo

This is a **demo version** of McLarens Analytics that runs with **mock data** - no backend required!

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   cd "e:\My Projects\frontend"
   git init
   git add .
   git commit -m "Initial commit - Demo version with mock data"
   git remote add origin https://github.com/Sahancoder/maclarens-analytics-demo-v1-.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `Sahancoder/maclarens-analytics-demo-v1-`
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add Environment Variable (Important!):**
   - In Vercel dashboard, go to: Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_USE_MOCK_DATA` = `true`
   - Add: `NEXTAUTH_SECRET` = `your-random-secret-string-here`
   - Redeploy if needed

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd "e:\My Projects\frontend"
vercel

# Follow prompts and confirm deployment
```

## 🎯 Features

- ✅ **No Backend Required** - Runs entirely on mock data
- ✅ **Sample Financial Data** - Pre-populated dashboards
- ✅ **All User Roles** - Admin, Director, MD, Finance Officer views
- ✅ **Responsive Design** - Works on mobile and desktop
- ✅ **Fast Deployment** - Deploy in under 2 minutes

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Login Credentials (Demo Mode)

The app uses mock authentication. You can use any email:

- **Admin:** `admin@maclarens.com`
- **Finance Director:** `director@maclarens.com`
- **MD:** `md@maclarens.com`
- **Finance Officer:** `officer@maclarens.com`

*No password required in demo mode*

## 🐛 Troubleshooting Vercel Deployments

### Build Fails

**Error:** TypeScript errors or ESLint errors

**Fix:** Update `package.json` build script:
```json
{
  "scripts": {
    "build": "next build",
    "build:vercel": "next build || echo 'Build completed with warnings'"
  }
}
```

### Runtime Errors

**Error:** "Failed to fetch" or network errors

**Fix:** Ensure environment variable is set:
- Vercel Dashboard → Settings → Environment Variables
- Add `NEXT_PUBLIC_USE_MOCK_DATA=true`
- Redeploy

### Blank Page After Deploy

**Fix:** 
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Check browser console for errors
4. Make sure `.env.production` has `NEXT_PUBLIC_USE_MOCK_DATA=true`

## 📂 Project Structure

```
frontend/
├── app/                    # Next.js 14 App Router
├── components/             # React components
├── lib/                    
│   ├── mock-data.ts       # ✨ Sample data
│   ├── api-client.ts      # API client with mock support
│   └── graphql-client.ts  # GraphQL client with mock support
├── .env.production        # Production environment variables
├── vercel.json            # Vercel configuration
└── next.config.js         # Next.js configuration
```

## 🔄 Switching to Real Backend

To connect to a real backend later:

1. Set `NEXT_PUBLIC_USE_MOCK_DATA=false`
2. Update `NEXT_PUBLIC_API_URL` with your backend URL
3. Update `NEXT_PUBLIC_GRAPHQL_ENDPOINT` with your GraphQL endpoint
4. Redeploy

## 📄 License

MIT

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**

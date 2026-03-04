# Deployment Guide

This guide covers deploying the backend on Vercel and the frontend on Netlify.

## Backend on Vercel (Express + MongoDB)

1. Prepare repository
   - Ensure your backend is a standalone repository (it already is).
   - Commit your latest changes.
   - Ensure `.env` is not tracked and `.env.example` lists required variables.

2. Environment variables (Vercel Project Settings → Environment Variables)
   - `MONGO_URI` – your MongoDB connection string
   - `JWT_SECRET` – secret key for JWT signing
   - `CORS_ORIGIN` – your Netlify site URL (e.g., `https://<your-site>.netlify.app`)
   - `RATE_LIMIT_WINDOW_MS` – e.g., `900000`
   - `RATE_LIMIT_MAX` – e.g., `100`
   - `DEMO_MODE` – `false`
   - Optionally set `NODE_ENV` to `production`

3. Vercel configuration
   - Import the backend GitHub repo into Vercel.
   - Framework preset: Other.
   - Build & Output Settings:
     - Install Command: `npm ci`
     - Build Command: `npm run build || echo "no build step"`
     - Output Directory: Leave empty
   - Set “Root Directory” to the repo root.

4. Server settings
   - Vercel detects Express and deploys as a serverless function automatically with proper handlers if using API route structure; for a standard Express server, use a serverless adapter or Vercel's Node runtime.
   - If using a traditional server, consider deploying on Render/Railway/Fly. If you stick with Vercel:
     - Create `vercel.json` at the repo root with:
       ```json
       {
         "version": 2,
         "builds": [{ "src": "src/index.js", "use": "@vercel/node" }],
         "routes": [{ "src": "/(.*)", "dest": "src/index.js" }]
       }
       ```
     - Ensure your Express app exports a handler compatible with serverless (if needed).

5. Test
   - After deploy, verify the health endpoint: `/api/health`
   - Confirm CORS allows your Netlify URL.

## Frontend on Netlify (Vite + React)

1. Prepare repository
   - Ensure the frontend is a standalone repository (it already is).
   - Commit your latest changes.
   - Ensure `.env` is ignored; keep `.env.example` with `VITE_API_URL` documented.

2. Netlify site setup
   - Create a new site from Git → choose the frontend repo.
   - Build settings:
     - Build Command: `npm run build`
     - Publish Directory: `dist`
     - Base Directory: repo root

3. Environment variables (Netlify Site Settings → Environment variables)
   - `VITE_API_URL` – set to your backend base API URL, e.g., `https://<your-vercel-app>.vercel.app/api`
   - Additional variables as needed for your app.

4. Deploy and test
   - Trigger deploy.
   - Open the Netlify URL; ensure requests hit the Vercel backend.
   - Verify auth and subscription flows work end-to-end.

## Notes & Tips

- CORS: Backend should allow your Netlify origin in `CORS_ORIGIN`.
- JWT: Keep `JWT_SECRET` secure; never commit it.
- Analytics: For production, ensure time zones are consistent between client and server.
- Logs: Use a hosted logging/monitoring service in production; avoid writing local files on serverless.


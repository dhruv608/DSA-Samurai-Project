# DSA Samurai Project - Deployment Guide

## Environment Configuration

### Backend Environment Variables
Copy `backend/.env.example` to `backend/.env` and update:

```bash
# Required
SUPABASE_URL=your_supabase_url_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
JWT_SECRET=your_jwt_secret_here
JWT_REFRESH_SECRET=your_jwt_refresh_secret_here

# CORS - Add your frontend URLs here
CORS_ORIGIN=https://your-frontend.vercel.app,https://another-domain.com

# Optional
PORT=3001
NODE_ENV=production
```

### Frontend Environment Variables
Copy `frontend/.env.example` to `frontend/.env` and update:

```bash
# Development
REACT_APP_API_URL=http://localhost:3001

# Production (uncomment and update when deploying)
# REACT_APP_API_URL=https://your-backend.onrender.com
```

## Deployment Instructions

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy - Render will automatically install dependencies and start the server

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set `REACT_APP_API_URL` to your backend URL
3. Deploy - Vercel will automatically build and deploy

## Important Notes
- The CORS configuration in backend uses environment variables
- Frontend uses environment variables for API URL
- No hardcoded URLs in the codebase
- Proxy removed from package.json (using environment variables instead)

## Post-Deployment Checklist
- [ ] Update CORS_ORIGIN in backend with your frontend URL
- [ ] Set REACT_APP_API_URL in frontend to your backend URL
- [ ] Test authentication flow
- [ ] Test API endpoints

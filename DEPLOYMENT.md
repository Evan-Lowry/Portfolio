# Deployment Guide

This guide will help you deploy your portfolio to Vercel or Netlify.

## Option 1: Vercel (Recommended)

Vercel is the easiest option and is built by the creators of Next.js.

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign up/login

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will automatically detect it's a Vite project and configure:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Click "Deploy"

7. Your site will be live in ~1 minute!

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts (press Enter to accept defaults)

5. For production deployment:
   ```bash
   vercel --prod
   ```

## Option 2: Netlify

### Method 1: Deploy via Netlify Dashboard

1. Build your project locally:
   ```bash
   npm install
   npm run build
   ```

2. Go to [app.netlify.com](https://app.netlify.com)

3. Drag and drop the `dist` folder to the deploy area

4. Your site will be live immediately!

### Method 2: Deploy from Git (Continuous Deployment)

1. Push your code to GitHub (see Vercel Method 1, step 1)

2. Go to [app.netlify.com](https://app.netlify.com) and login

3. Click "Add new site" → "Import an existing project"

4. Connect to your Git provider and select your repository

5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

6. Click "Deploy site"

### Method 3: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Custom Domain

Both Vercel and Netlify offer:
- Free `.vercel.app` or `.netlify.app` subdomain
- Easy custom domain setup
- Free SSL certificates

To add a custom domain:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed

## Environment Variables

If you add environment variables later:

**Vercel**: Add them in Project Settings → Environment Variables

**Netlify**: Add them in Site Settings → Environment Variables

## Continuous Deployment

Both platforms support automatic deployments:
- Every push to your `main` branch triggers a new deployment
- Pull requests get preview deployments
- Rollback to previous deployments anytime

## Performance

Both Vercel and Netlify provide:
- Global CDN
- Automatic HTTPS
- Instant cache invalidation
- Optimized static asset serving

Your minimalist portfolio should achieve perfect 100/100 scores on PageSpeed Insights!

## Troubleshooting

### Build fails
- Make sure all dependencies are in `package.json`
- Check build logs for specific errors
- Test `npm run build` locally first

### 404 on refresh
- For single-page apps, this shouldn't be an issue
- If you add routing later, check routing configuration

### Slow loading
- Optimize images (use WebP format, compress)
- Minimize bundle size
- Check Network tab in browser DevTools

## Monitoring

Both platforms provide:
- Analytics (page views, visitors)
- Performance metrics
- Error tracking
- Build logs

Check your dashboard regularly to monitor your site's performance!

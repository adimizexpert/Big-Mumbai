# Deployment Guide - Big Mumbai Game Website

This guide will help you deploy the Big Mumbai Game website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### 1. Prepare Your Repository
- Push your code to GitHub, GitLab, or Bitbucket
- Ensure all dependencies are in `package.json`
- Verify your `.env.local` file is properly configured

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your repository
4. Set environment variables:
   ```
   SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```
5. Click "Deploy"

### 3. Configure Custom Domain
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Update DNS records as instructed by Vercel
4. Update environment variables with your domain

## 🌐 Deploy to Netlify

### 1. Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x or higher

### 2. Environment Variables
Set these in Netlify dashboard:
```
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. Deploy
1. Connect your repository to Netlify
2. Configure build settings
3. Set environment variables
4. Deploy

## ☁️ Deploy to AWS Amplify

### 1. Build Settings
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### 2. Environment Variables
Set in Amplify console:
```
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🖥️ Manual Deployment

### 1. Build the Project
```bash
npm run build
```

### 2. Start Production Server
```bash
npm start
```

### 3. Use PM2 for Process Management
```bash
npm install -g pm2
pm2 start npm --name "big-mumbai" -- start
pm2 save
pm2 startup
```

## 🔧 Post-Deployment Checklist

### 1. SEO Verification
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] Meta tags are properly set
- [ ] Open Graph tags work on social media

### 2. Performance Check
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Verify image optimization
- [ ] Test mobile responsiveness

### 3. Functionality Test
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Forms submit successfully
- [ ] CTAs link to correct destinations

### 4. Analytics Setup
- [ ] Google Analytics is tracking
- [ ] Conversion goals are set
- [ ] UTM parameters are working
- [ ] Event tracking is functional

## 📱 Mobile Optimization

### 1. Test on Real Devices
- Test on various mobile devices
- Check touch interactions
- Verify button sizes (minimum 44px)
- Test loading speeds on slow networks

### 2. PWA Features (Optional)
- Add service worker for offline support
- Create app manifest for install prompts
- Implement push notifications

## 🔒 Security Considerations

### 1. HTTPS Enforcement
- Ensure SSL certificate is valid
- Redirect HTTP to HTTPS
- Set security headers

### 2. Content Security Policy
- Configure CSP headers
- Allow necessary resources
- Block malicious scripts

### 3. Rate Limiting
- Implement API rate limiting
- Protect against DDoS attacks
- Monitor suspicious activity

## 📊 Monitoring & Maintenance

### 1. Performance Monitoring
- Set up uptime monitoring
- Monitor Core Web Vitals
- Track conversion rates
- Analyze user behavior

### 2. Regular Updates
- Keep dependencies updated
- Monitor security advisories
- Update content regularly
- Test new features

### 3. Backup Strategy
- Regular database backups
- Code repository backups
- Configuration backups
- Disaster recovery plan

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

#### Environment Variables
- Ensure all required variables are set
- Check variable names match exactly
- Restart deployment after changes

#### Performance Issues
- Optimize images
- Enable compression
- Use CDN for static assets
- Implement caching strategies

## 📞 Support

For deployment issues:
1. Check the error logs in your platform dashboard
2. Verify environment variables are set correctly
3. Ensure all dependencies are installed
4. Contact platform support if needed

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm start
```

---

**Happy Deploying! 🎉**

# BMFUTUROMIND AI - Render Deployment Guide

## Overview
This guide explains how to deploy the BMFUTUROMIND AI website to Render with the custom domain `bmfuturomindai.com`.

## Files Included

### Configuration Files
- **render.json** - Render deployment configuration (JSON format)
- **render.yaml** - Render deployment configuration (YAML format)
- **package.json** - Node.js dependencies and scripts
- **server.js** - Express server for serving static files and API routes
- **.env.example** - Environment variables template

### Website Files
- **index.html** - Main landing page
- **course-details.html** - Course details page
- **styles.css** - Complete styling
- **script.js** - JavaScript functionality
- **send-registration.php** - Registration email handler
- **logo.jpeg** - Website logo

## Deployment Steps

### 1. Prepare Repository
```bash
git init
git add .
git commit -m "Initial commit - BMFUTUROMIND AI website"
git remote add origin https://github.com/yourusername/bmfuturomindai.git
git push -u origin main
```

### 2. Create Render Account
- Visit https://render.com
- Sign up with GitHub account
- Connect your GitHub repository

### 3. Create Web Service
1. Dashboard → New → Web Service
2. Connect GitHub repository
3. Configure:
   - **Name:** bmfuturomindai
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free or Paid (based on needs)

### 4. Add Custom Domain
1. In Render dashboard, go to your service
2. Settings → Custom Domains
3. Add: `bmfuturomindai.com`
4. Add: `www.bmfuturomindai.com`
5. Follow DNS configuration instructions

### 5. Configure DNS
Update your domain registrar with Render's DNS records:
- Get DNS records from Render dashboard
- Add A records pointing to Render's servers
- Wait 24-48 hours for DNS propagation

### 6. Environment Variables
1. Settings → Environment
2. Add variables from `.env.example`:
   ```
   NODE_ENV=production
   PORT=3000
   DOMAIN=bmfuturomindai.com
   ```

### 7. Deploy
- Push changes to GitHub
- Render automatically builds and deploys
- Visit `https://bmfuturomindai.com`

## File Descriptions

### render.json
JSON-based Render configuration with:
- Build and start commands
- Environment variables
- Routes and handlers
- Security headers
- Domain configuration

### render.yaml
YAML-based alternative configuration with:
- Services definition
- Multiple domains support
- Static file publishing
- Security headers
- Strict Transport Security

### server.js
Express server that:
- Serves static HTML files
- Handles API endpoints
- Implements CORS
- Provides health check endpoint
- Includes error handling

### package.json
Defines:
- Project metadata
- Dependencies (express, cors, dotenv)
- Scripts for build and start
- Node/NPM versions

## API Endpoints

### GET /
Returns index.html - Main website

### GET /course-details
Returns course-details.html - Course information

### POST /api/register
Handles course registration
```json
{
  "name": "Student Name",
  "email": "student@example.com",
  "phone": "+91 XXXXXXXXXX",
  "education": "Bachelor",
  "course": "Python Basics",
  "price": "1000"
}
```

### GET /health
Health check - Returns server status

## SSL/HTTPS
- Render automatically provides SSL certificates
- HTTPS is enabled by default
- All traffic redirected to HTTPS

## Performance Optimization

### Caching Headers
- Static assets cached for 1 hour
- Browser caching enabled

### Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- HSTS enabled

## Monitoring

### View Logs
1. Render Dashboard → Service
2. Logs tab → Real-time logs

### Monitor Performance
- Render provides built-in analytics
- Track uptime and response times

## Troubleshooting

### Domain not resolving
- Check DNS records in domain registrar
- Wait for DNS propagation (24-48 hours)
- Verify records in Render dashboard

### Build failing
- Check build logs in Render dashboard
- Ensure package.json is correctly formatted
- Verify all dependencies are listed

### 502 Bad Gateway
- Check server logs
- Restart service from dashboard
- Verify PORT environment variable

## Maintenance

### Update Website
1. Make changes locally
2. Test on localhost
3. Commit and push to GitHub
4. Render automatically redeploys

### Update Dependencies
1. Update package.json
2. Run `npm install` locally
3. Test thoroughly
4. Commit and push

## Support
- Render Docs: https://render.com/docs
- Email: info@bmfuturomindai.com
- Phone: +91 91508 51916

---
**Version:** 1.0  
**Last Updated:** November 8, 2025  
**Domain:** bmfuturomindai.com

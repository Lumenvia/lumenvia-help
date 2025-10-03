# System Configuration

Configuration settings and environment variables for Lumenvia deployment.

## Environment Variables

Create a `.env` file in your project root with the following variables:

### Core Application
```env
# Application Settings
VITE_APP_NAME=Lumenvia
VITE_APP_URL=https://app.lumenvia.app
VITE_DOCS_URL=https://docs.lumenvia.app

# Environment
NODE_ENV=production
VITE_ENV=production
```

### Database (Supabase)
```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Email Services
```env
# EmailJS (recommended for quick setup)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Alternative: Resend
RESEND_API_KEY=your_resend_api_key

# Alternative: SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
```

### AI Services (Optional)
```env
# OpenAI for AI Tutor
OPENAI_API_KEY=your_openai_api_key
VITE_OPENAI_MODEL=gpt-4

# Alternative: Claude
ANTHROPIC_API_KEY=your_anthropic_api_key
```

### File Storage
```env
# Supabase Storage (included with Supabase)
VITE_SUPABASE_STORAGE_BUCKET=materials

# Alternative: AWS S3
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_S3_BUCKET=your_s3_bucket
AWS_REGION=us-east-1
```

## Deployment Configuration

### Netlify Deployment

The project includes a `netlify.toml` configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment-Specific Settings

#### Development
```env
VITE_ENV=development
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true
```

#### Staging
```env
VITE_ENV=staging
VITE_API_URL=https://staging-api.lumenvia.app
VITE_DEBUG=false
```

#### Production
```env
VITE_ENV=production
VITE_API_URL=https://api.lumenvia.app
VITE_DEBUG=false
```

## Security Configuration

### Content Security Policy
```javascript
// vite.config.ts
export default defineConfig({
  // ... other config
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    }
  }
})
```

### CORS Configuration
Configure CORS in your Supabase project settings:
- Allowed origins: Your domain(s)
- Allowed methods: GET, POST, PUT, DELETE
- Allowed headers: Authorization, Content-Type

## Performance Configuration

### Build Optimization
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dropdown-menu', '@radix-ui/react-dialog']
        }
      }
    },
    target: 'es2015',
    minify: 'terser'
  }
})
```

### Caching Headers
```toml
# netlify.toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Monitoring & Analytics

### Error Tracking
```env
# Sentry
VITE_SENTRY_DSN=your_sentry_dsn
SENTRY_AUTH_TOKEN=your_sentry_auth_token

# Alternative: LogRocket
VITE_LOGROCKET_APP_ID=your_logrocket_app_id
```

### Analytics
```env
# Google Analytics
VITE_GA_TRACKING_ID=your_ga_tracking_id

# Alternative: Plausible
VITE_PLAUSIBLE_DOMAIN=lumenvia.app
```

## Database Configuration

### Supabase Setup
1. Create new Supabase project
2. Run migration files from `/supabase/migrations/`
3. Set up Row Level Security (RLS) policies
4. Configure storage buckets

### Storage Buckets
Create these buckets in Supabase Storage:
- `materials` - For uploaded course materials
- `avatars` - For user profile images
- `exports` - For generated reports/exports

## Backup Configuration

### Database Backups
- Supabase automatic backups (included)
- Manual export scripts
- Regular backup verification

### File Storage Backups
- Automated storage bucket backups
- Cross-region replication
- Version control for critical files

## Health Checks

Set up monitoring for:
- Application uptime
- Database connectivity
- Email service status
- File upload functionality
- AI service availability

## Troubleshooting

### Common Issues

**Build Failures:**
- Check environment variable names
- Verify all dependencies are installed
- Clear build cache: `npm run clean`

**Runtime Errors:**
- Check browser console for errors
- Verify API endpoint configuration
- Test database connections

**Email Issues:**
- Verify email service credentials
- Check spam filters
- Test email templates

### Debug Mode

Enable debug mode for development:
```env
VITE_DEBUG=true
VITE_LOG_LEVEL=debug
```

This will enable:
- Detailed console logging
- Error boundary information
- Performance metrics
- API request/response logging

For production deployment, ensure all sensitive environment variables are properly configured and secure.

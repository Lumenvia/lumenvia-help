# Email Service Integration

This guide explains how to set up email services for the in-app support system.

## Current Implementation

The app currently has two support contact methods:

1. **Internal Form (Recommended)** - Uses in-app forms with Supabase Edge Function + Resend
2. **External Email Client** - Opens user's default email client with mailto links

## Setting Up Resend with Supabase Edge Functions

✅ **Supabase Edge Function is already configured and ready to use!**

### Quick Setup Steps

1. **Get your Resend API key:**
   - Go to [resend.com/api-keys](https://resend.com/api-keys)
   - Create a new API key
   - Copy the key (starts with `re_`)

2. **Add to Supabase Secrets:**
   ```bash
   # Using Supabase CLI
   supabase secrets set RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. **Deploy the Edge Function:**
   ```bash
   # Deploy to Supabase
   supabase functions deploy send-support-email
   ```

4. **Verify domain setup:**
   - Ensure `lumenvia.app` domain is verified in Resend
   - The app sends from `noreply@lumenvia.app`
   - Emails go to `support@lumenvia.app` and `bugs@lumenvia.app`

### How It Works

The internal form:
1. Collects user input and technical context
2. Sends data to Supabase Edge Function: `/functions/v1/send-support-email`
3. Edge Function uses Resend API to send formatted email
4. User gets success confirmation in the app

### Architecture

```
User Form → Supabase Edge Function → Resend API → Your Support Email
```

**Benefits of this approach:**
- ✅ **Same platform** as your main app (Supabase)
- ✅ **Global edge performance** - faster worldwide
- ✅ **Integrated secrets management** - RESEND_API_KEY as Supabase secret
- ✅ **No additional platforms** - everything in Supabase ecosystem
- ✅ **Better security** - server-side API key handling

### Option 3: SendGrid (Enterprise)

SendGrid is a robust email service used by many enterprises.

1. **Sign up at [sendgrid.com](https://sendgrid.com/)**
2. **Get API key**
3. **Set up sender authentication**

4. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

### Option 4: Nodemailer + SMTP

Use any SMTP provider (Gmail, Outlook, custom) with Nodemailer.

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
```

## Environment Variables

Create a `.env` file with your email service credentials:

```env
# EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Resend
RESEND_API_KEY=your_resend_api_key

# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# SMTP
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

## Email Template Example

For the HTML email template, you can use the template already built into `InternalContactForm.tsx`. It includes:

- Support request details
- User information
- Technical context
- Professional formatting
- Reply-to functionality

## Security Considerations

1. **Never expose API keys in frontend code** (except EmailJS public key)
2. **Use environment variables** for all credentials
3. **Validate email inputs** on both frontend and backend
4. **Rate limit** support requests to prevent spam
5. **Sanitize user inputs** before including in emails

## Testing

1. **Test with different request types** (bug, support, feedback)
2. **Test with different user roles** (teacher, student, admin)
3. **Test email delivery** to all support addresses
4. **Test reply functionality** 
5. **Test error handling** when email service is down

## Recommended: EmailJS for Quick Setup

For immediate deployment, EmailJS is recommended because:

- ✅ No backend code required
- ✅ Free tier available
- ✅ Easy setup (10 minutes)
- ✅ Works from frontend directly
- ✅ Good for small to medium volume

For production or high volume, consider Resend or SendGrid with a proper backend API.

## Support Email Addresses

Make sure these email addresses are set up and monitored:

- `support@lumenvia.app` - General support questions
- `bugs@lumenvia.app` - Bug reports and technical issues  
- `feedback@lumenvia.app` - Feature requests and suggestions

## Current Fallback

The current implementation includes a simulation that will work for testing. Replace the `submitToEmailService` function in `InternalContactForm.tsx` with your chosen email service implementation.

For immediate use without backend setup, the external email client option (mailto links) will work on any device with a configured email client.

# Support Email System Testing Guide

## Overview
This guide explains how to test the complete support email flow in the Lumenvia app.

## Architecture
- **Frontend**: InternalContactForm component
- **Backend**: SupabaseEdgeFunctionService.sendSupportEmail()
- **Edge Function**: `send-support-email` (Supabase)
- **Email Service**: Resend API
- **Authentication**: Service layer pattern with Supabase auth

## Prerequisites

### 1. Resend API Configuration
```bash
# In Supabase Dashboard > Settings > API > Secrets
RESEND_API_KEY=re_your_actual_api_key_here
```

### 2. Domain Verification
- Verify your domain (lumenvia.app) in Resend dashboard
- Ensure from/reply-to addresses are properly configured

### 3. Development Server
```bash
npm run dev
# Should run on http://localhost:8081/
```

## Testing Steps

### 1. Basic Form Functionality
1. Navigate to any page with the Help & Support system
2. Open the internal contact form
3. Fill out all required fields:
   - Type: bug/feature/question
   - Priority: low/normal/high/urgent
   - Subject: Test support request
   - Description: Detailed test message

### 2. Email Delivery Test
1. Submit the form
2. Check for success notification
3. Monitor browser developer tools for any errors
4. Verify email delivery to configured support addresses:
   - Bug reports → bugs@lumenvia.app
   - Other requests → support@lumenvia.app

### 3. Edge Function Verification
1. Check Supabase Edge Function logs
2. Verify function is called via service layer
3. Confirm no direct fetch calls to edge function

### 4. Error Handling Test
1. Test with invalid email domains
2. Test with missing required fields
3. Test with network failures
4. Verify user-friendly error messages

## Expected Email Content

The email should include:
- Properly formatted HTML
- Request type and priority
- User information and context
- Technical details (browser, timestamp)
- Page context (if available)
- Professional styling and branding

## Service Layer Integration

The form should use:
```typescript
const { backendService } = useBackendService();
await backendService.functions.sendSupportEmail(emailData);
```

NOT direct fetch calls to the edge function.

## Troubleshooting

### Common Issues
1. **Resend API Key**: Ensure it's set as a Supabase secret
2. **Domain Verification**: Check Resend dashboard
3. **Service Layer**: Verify useBackendService context is available
4. **CORS**: Edge function includes proper CORS headers

### Debug Tools
- Browser developer tools (Network/Console)
- Supabase Edge Function logs
- Resend dashboard logs
- React component state debugging

## Success Criteria
- [ ] Form submits without errors
- [ ] Success message appears to user
- [ ] Email is delivered to correct address
- [ ] Email content is properly formatted
- [ ] Service layer pattern is followed
- [ ] Edge function logs show successful execution
- [ ] Error handling works for edge cases

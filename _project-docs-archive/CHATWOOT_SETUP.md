# Chatwoot Live Chat Integration

## Overview
This integration provides live chat support for the Boise Gun Club website using Chatwoot, an open-source customer engagement platform.

## Setup Instructions

### 1. Create Chatwoot Account
- Visit [Chatwoot Cloud](https://app.chatwoot.com) or deploy self-hosted
- Create an account and set up your workspace
- Navigate to Settings > Inboxes > Website

### 2. Create Website Inbox
1. Click "Add Inbox" 
2. Select "Website" 
3. Configure your website details:
   - **Website Name**: Boise Gun Club
   - **Website URL**: https://your-domain.com
   - **Welcome Heading**: Welcome to Boise Gun Club!
   - **Welcome Tagline**: How can we help you today?
   - **Widget Color**: #F28705 (Lahoma Orange from brand colors)

### 3. Get Website Token
- After creating the inbox, copy the **Website Token**
- Update `.env.local` with your token:
```bash
NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN=your-actual-token-here
```

### 4. Configure Widget Settings
The widget is configured with these defaults:
- **Position**: Bottom right
- **Theme**: Auto (follows site theme)
- **Locale**: English
- **Type**: Standard bubble

### 5. Customize Appearance (Optional)
In the Chatwoot dashboard, you can customize:
- Widget colors to match brand
- Welcome messages
- Business hours
- Team member availability
- Automated responses

## Features Included

### Automatic Theme Detection
- Widget automatically switches between light/dark mode
- Matches the site's theme system

### Professional Configuration
- Positioned to not interfere with accessibility controls
- Only loads after component mounts (SSR safe)
- Proper cleanup on unmount

### Brand Integration
- Uses official Boise Gun Club orange (#F28705)
- Professional messaging for gun club context
- Appropriate for handling member inquiries

## Usage Examples

### For Range Officers
- Answer questions about range hours
- Provide safety information
- Help with membership inquiries
- Assist with event registration

### For Members
- Get quick answers without phone calls
- Report issues or concerns
- Ask about upcoming events
- Get facility information

### For Visitors
- Learn about membership options
- Ask about first-time visit procedures
- Get directions and hours
- Understand safety requirements

## Technical Details

### Component Location
- `src/components/chat/ChatwootWidget.tsx` - Main widget component
- Integrated in `src/app/ClientLayout.tsx` - Site-wide availability

### Environment Variables
```bash
NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN=your-token
NEXT_PUBLIC_CHATWOOT_BASE_URL=https://app.chatwoot.com  # Optional for self-hosted
```

### Browser Support
- Modern browsers with JavaScript enabled
- Falls back gracefully if script fails to load
- No impact on site performance if Chatwoot is unavailable

## Security Considerations

### Data Privacy
- All chat data stored securely in Chatwoot
- GDPR compliant if needed
- No sensitive information should be collected via chat

### Configuration
- Website token is public (safe to expose)
- No server-side secrets required
- Widget loads from Chatwoot's CDN

## Deployment Notes

### Production Setup
1. Replace demo token with real token
2. Configure business hours in Chatwoot dashboard
3. Set up team members and permissions
4. Test widget functionality
5. Train staff on using Chatwoot dashboard

### Monitoring
- Monitor chat response times
- Review common questions for FAQ updates
- Track conversion from chat to membership

## Support
- [Chatwoot Documentation](https://www.chatwoot.com/docs)
- [Chatwoot Community](https://github.com/chatwoot/chatwoot)
- Component source: `src/components/chat/ChatwootWidget.tsx`
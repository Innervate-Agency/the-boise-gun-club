# Sanity CMS Setup Guide for Boise Gun Club Directors

## Overview
This Content Management System (CMS) allows club directors to easily update website content without technical knowledge. Designed for the "one afternoon training" requirement.

## 🎯 What Directors Can Manage

### 1. **Club Events** 📅
- Monthly competitions
- Training sessions  
- Social events
- Facility maintenance notices
- Event registration and fees

### 2. **News & Updates** 📰
- Club announcements
- Safety updates
- Competition results
- Facility improvements

### 3. **Photo Gallery** 📸
- Event photos
- Facility showcases
- Training documentation
- Achievement highlights

### 4. **Website Pages** 📄
- Update existing content
- Create new informational pages
- Manage special notices

## 🚀 Quick Setup (One-Time)

### Step 1: Create Sanity Account
1. Visit [sanity.io](https://sanity.io)
2. Sign up with club email
3. Create new project: "Boise Gun Club"
4. Choose "Blog" template
5. Note your **Project ID**

### Step 2: Configure Environment
Update `.env.local` with your details:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token-here
```

### Step 3: Deploy Studio
```bash
cd studio
npm install
npm run deploy
```

Your CMS will be available at: `https://your-project-id.sanity.studio`

## 📚 Director Training Guide (30 Minutes)

### Accessing the CMS
1. Open browser
2. Go to your studio URL
3. Login with Google/email
4. See organized content sections

### Adding a New Event
1. Click "Events" → "All Events"
2. Click "Create" button
3. Fill out form:
   - **Title**: "Monthly Trap Competition"
   - **Date**: Select from calendar
   - **Location**: Choose from dropdown
   - **Type**: Competition/Training/Social
   - **Registration Required**: Yes/No
   - **Fee**: Enter dollar amount
   - **Description**: What's happening?
   - **Contact**: Your name/phone

4. Upload event photo (optional)
5. Toggle "Feature on Homepage" for important events
6. Click "Publish"

✅ **Event appears on website within 5 minutes**

### Publishing News Updates
1. Click "News & Updates" → "All News"
2. Click "Create" button
3. Fill out:
   - **Title**: Clear headline
   - **Summary**: Brief description
   - **Category**: General/Safety/Competition/Facility
   - **Author**: Your name
   - **Content**: Full article using editor

4. Use editor tools:
   - **Bold/Italic**: Select text, click buttons
   - **Headings**: Use H2 for sections
   - **Lists**: Click bullet/number buttons
   - **Images**: Click image button, upload
   - **Links**: Select text, click link button

5. Set "Published Date"
6. Toggle "Feature on Homepage" if important
7. Click "Publish"

### Managing Photo Galleries
1. Click "Photo Gallery" → "All Galleries"
2. Click "Create" button
3. Fill out:
   - **Title**: "Summer Competition 2024"
   - **Category**: Events/Facilities/Training/Awards
   - **Year**: 2024

4. Upload photos:
   - Click "Add item" in Photos section
   - Upload image
   - Add description for each photo
   - Drag to reorder

5. Click "Publish"

### Updating Website Pages
1. Click "Website Pages"
2. Find existing page or create new
3. Edit content using rich text editor
4. Add special notices:
   - Click "+" button
   - Select "Important Notice"
   - Choose type: Alert/Info/Success/Warning
   - Write message

5. Click "Publish"

## 🛡️ Safety & Best Practices

### Content Guidelines
- **Always double-check dates and times**
- **Verify contact information**
- **Use clear, professional language**
- **Include all necessary safety information**

### Photo Guidelines
- **Only upload club-owned photos**
- **Ensure people have given permission**
- **Describe photos clearly for accessibility**
- **Use landscape orientation when possible**

### Emergency Updates
For urgent announcements:
1. Create news article
2. Toggle "Feature on Homepage"
3. Use "Alert" notice type
4. Include emergency contact info

## 🔧 Common Tasks

### Weekly Competition Results
1. News & Updates → Create
2. Title: "Weekly Trap Results - [Date]"
3. Category: Competition
4. List winners and scores
5. Upload trophy/winner photos
6. Publish

### Weather Closures
1. News & Updates → Create
2. Title: "Range Closure - [Reason]"
3. Category: General
4. Use "Alert" notice in content
5. Feature on homepage
6. Include reopening information

### New Member Welcome
1. Website Pages → Find "New Members"
2. Update orientation schedule
3. Add any new requirements
4. Publish changes

### Event Registration Full
1. Find event in Events section
2. Edit event
3. Change status to "Registration Full"
4. Add note in description
5. Update and publish

## 📱 Mobile Access
- CMS works on tablets and phones
- Use Safari/Chrome for best experience
- All features available on mobile
- Voice-to-text supported for content

## 🆘 Help & Support

### Common Issues
**"Can't find publish button"**: Scroll down in editor
**"Image won't upload"**: Try smaller file size (under 10MB)
**"Changes not showing"**: Wait 5 minutes, then refresh website

### Getting Help
1. Check this guide first
2. Ask fellow directors who've been trained
3. Contact web developer if technical issue
4. Sanity support: help.sanity.io

### Training Resources
- Video tutorials available in studio
- Practice on test content first
- Monthly director refresher sessions

## 🎯 Success Metrics
After training, directors should be able to:
- ✅ Add a new event in under 5 minutes
- ✅ Publish news update with photos
- ✅ Upload photo gallery from competition
- ✅ Update club hours for holidays
- ✅ Post emergency closure notice

## 🔄 Content Workflow

### Weekly Tasks
- Update competition results
- Add upcoming events
- Share member achievements

### Monthly Tasks
- Review and update club information
- Add photo galleries from events
- Archive old events

### Seasonal Tasks
- Update operating hours
- Post annual meeting information
- Share facility improvement updates

## 📊 Content Best Practices

### Writing Style
- **Clear and direct language**
- **Include all relevant details**
- **Use active voice**
- **Proofread before publishing**

### SEO Friendly
- **Use descriptive titles**
- **Include relevant keywords naturally**
- **Add photo descriptions**
- **Link to related content**

### Accessibility
- **Describe all images clearly**
- **Use headings properly**
- **Ensure good color contrast**
- **Write in plain language**

This CMS is designed to be director-friendly while maintaining the professional quality expected from Idaho's premier shooting sports facility.
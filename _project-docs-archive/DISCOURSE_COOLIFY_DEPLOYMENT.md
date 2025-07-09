# 🚀 Discourse Deployment via Coolify - Boise Gun Club

## Server Specs ✅
- **CPU:** 8vCPU 
- **RAM:** 24GB
- **Storage:** 200GB NVMe
- **Bandwidth:** 32TB both ways
- **Management:** Coolify (already running)
- **Status:** Ready for Discourse deployment

## Coolify Discourse Deployment

### 1. Docker Compose Configuration
Create new application in Coolify with this docker-compose.yml:

```yaml
version: '3.8'

services:
  discourse:
    image: discourse/discourse:latest
    ports:
      - "4000:80"
    environment:
      DISCOURSE_HOSTNAME: forum.boisegunclub.com
      DISCOURSE_DEVELOPER_EMAILS: admin@boisegunclub.com
      DISCOURSE_SMTP_ADDRESS: smtp.mailgun.com
      DISCOURSE_SMTP_PORT: 587
      DISCOURSE_SMTP_USER_NAME: ${SMTP_USERNAME}
      DISCOURSE_SMTP_PASSWORD: ${SMTP_PASSWORD}
      POSTGRES_DB: discourse
      POSTGRES_USER: discourse
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      REDIS_HOST: redis
    volumes:
      - discourse_data:/shared
      - discourse_logs:/var/log
    depends_on:
      - postgres
      - redis
    restart: unless-stopped

  postgres:
    image: postgres:13
    environment:
      POSTGRES_DB: discourse
      POSTGRES_USER: discourse
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  redis:
    image: redis:6-alpine
    volumes:
      - redis_data:/data
    restart: unless-stopped

volumes:
  discourse_data:
  discourse_logs:
  postgres_data:
  redis_data:
```

### 2. Environment Variables (Coolify)
```bash
POSTGRES_PASSWORD=your_secure_postgres_password
SMTP_USERNAME=your_mailgun_username
SMTP_PASSWORD=your_mailgun_password
DISCOURSE_SSO_SECRET=your_32_char_random_secret
```

### 3. Domain Configuration
- **Primary:** `forum.boisegunclub.com`
- **SSL:** Auto-generated via Coolify
- **Proxy:** Coolify's built-in Traefik

### 4. Resource Allocation
```yaml
# In Coolify, set resource limits:
resources:
  discourse:
    memory: 4GB
    cpu: 2 cores
  postgres:
    memory: 2GB
    cpu: 1 core
  redis:
    memory: 512MB
    cpu: 0.5 cores
```

## Integration with Next.js Site

### 1. SSO Configuration File
```typescript
// /src/lib/discourse-sso.ts
import crypto from 'crypto';

export class DiscourseSSO {
  private discourseUrl = 'https://forum.boisegunclub.com';
  private ssoSecret = process.env.DISCOURSE_SSO_SECRET!;

  generateSSO(user: any) {
    const nonce = crypto.randomBytes(16).toString('hex');
    const payload = new URLSearchParams({
      nonce,
      email: user.email,
      external_id: user.id.toString(),
      username: user.username,
      name: user.name,
      admin: user.isAdmin ? 'true' : 'false',
      moderator: user.isModerator ? 'true' : 'false'
    });

    const base64Payload = Buffer.from(payload.toString()).toString('base64');
    const signature = crypto
      .createHmac('sha256', this.ssoSecret)
      .update(base64Payload)
      .digest('hex');

    return `${this.discourseUrl}/session/sso_login?sso=${base64Payload}&sig=${signature}`;
  }
}
```

### 2. Update Forum Page
```typescript
// /src/app/forum/page.tsx
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function ForumPage() {
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user) {
      // Redirect to SSO login
      window.location.href = `/api/discourse/sso`;
    } else {
      // Redirect to public forum
      window.location.href = 'https://forum.boisegunclub.com';
    }
  }, [user, isAuthenticated]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-2 border-[var(--accent-primary)] border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-[var(--text-secondary)]">Redirecting to forum...</p>
      </div>
    </div>
  );
}
```

### 3. API Route for SSO
```typescript
// /src/app/api/discourse/sso/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { DiscourseSSO } from '@/lib/discourse-sso';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    
    if (!user) {
      return NextResponse.redirect('https://forum.boisegunclub.com');
    }

    const discourse = new DiscourseSSO();
    const ssoUrl = discourse.generateSSO(user);
    
    return NextResponse.redirect(ssoUrl);
  } catch (error) {
    console.error('SSO generation failed:', error);
    return NextResponse.redirect('https://forum.boisegunclub.com');
  }
}
```

## Coolify Deployment Steps

### 1. Create New Project
1. Open Coolify dashboard
2. Create new project: "boise-gun-club-forum"
3. Select "Docker Compose" application type

### 2. Configure Application
1. Paste the docker-compose.yml above
2. Set environment variables in Coolify UI
3. Configure domain: `forum.boisegunclub.com`
4. Enable SSL auto-generation

### 3. Deploy
1. Click "Deploy" in Coolify
2. Monitor logs for successful startup
3. Initial setup will take 5-10 minutes

### 4. Initial Configuration
1. Access `https://forum.boisegunclub.com`
2. Run through Discourse setup wizard
3. Create admin account
4. Configure SSO settings in admin panel

## Post-Deployment Configuration

### 1. Discourse Admin Settings
```
Site Settings > Login:
- enable sso: ✅
- sso url: https://boisegunclub.com/api/discourse/sso
- sso secret: [your secret from env]
- sso overrides email: ✅
- sso overrides username: ✅
- sso overrides name: ✅
```

### 2. Create Categories
```
📋 General Discussion
🎯 Shooting Sports  
🛒 Marketplace
👥 Member Services
🏆 Competitions & Events
⚙️ Technical Discussion
```

### 3. Configure Groups
```
Admins, Moderators, Members, New Members, Guests
```

## Environment Variables for Next.js
```bash
# Add to your Next.js .env.local
DISCOURSE_URL=https://forum.boisegunclub.com
DISCOURSE_SSO_SECRET=your_32_char_random_secret
NEXT_PUBLIC_DISCOURSE_URL=https://forum.boisegunclub.com
```

## Resource Usage Estimate
- **Discourse:** ~2GB RAM, 2 CPU cores
- **PostgreSQL:** ~1GB RAM, 1 CPU core  
- **Redis:** ~256MB RAM, 0.5 CPU cores
- **Total:** ~3.5GB RAM, 3.5 CPU cores

Your server (24GB RAM, 8 CPU) can easily handle this alongside other applications.

## Backup Strategy
Coolify handles:
- ✅ Automatic PostgreSQL backups
- ✅ Volume snapshots
- ✅ Configuration backups

## Monitoring
Coolify provides:
- ✅ Resource usage monitoring
- ✅ Application logs
- ✅ Uptime monitoring
- ✅ Email alerts on failures

This gives you a production-ready forum that integrates seamlessly with your main site and scales with your 1,200+ member community.
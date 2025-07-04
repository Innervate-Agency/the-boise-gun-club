import crypto from 'crypto';

export interface User {
  id: number;
  email: string;
  username: string;
  name: string;
  isAdmin?: boolean;
  isModerator?: boolean;
}

export class DiscourseSSO {
  private discourseUrl = process.env.DISCOURSE_URL || 'https://forum.boisegunclub.com';
  private ssoSecret = process.env.DISCOURSE_SSO_SECRET!;

  constructor() {
    if (!this.ssoSecret) {
      throw new Error('DISCOURSE_SSO_SECRET environment variable is required');
    }
  }

  generateSSO(user: User): string {
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

  verifySSO(sso: string, sig: string): any {
    const expectedSig = crypto
      .createHmac('sha256', this.ssoSecret)
      .update(sso)
      .digest('hex');

    if (sig !== expectedSig) {
      throw new Error('Invalid SSO signature');
    }

    const payload = Buffer.from(sso, 'base64').toString();
    return new URLSearchParams(payload);
  }
}
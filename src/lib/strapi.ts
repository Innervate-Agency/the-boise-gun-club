import { Strapi } from 'strapi-sdk-js';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export const client = new Strapi({
  url: strapiUrl,
});

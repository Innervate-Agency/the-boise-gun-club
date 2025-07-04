import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { markdownSchema } from '@sanity/markdown';

// Import schemas
import event from './schemas/event';
import news from './schemas/news';
import gallery from './schemas/gallery';
import page from './schemas/page';

export default defineConfig({
  name: 'boise-gun-club',
  title: 'Boise Gun Club CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // Events section
            S.listItem()
              .title('Events')
              .icon(() => '📅')
              .child(
                S.list()
                  .title('Events')
                  .items([
                    S.listItem()
                      .title('All Events')
                      .child(S.documentTypeList('event').title('All Events')),
                    S.listItem()
                      .title('Upcoming Events')
                      .child(
                        S.documentList()
                          .title('Upcoming Events')
                          .filter('_type == "event" && date >= now()')
                          .defaultOrdering([{ field: 'date', direction: 'asc' }])
                      ),
                    S.listItem()
                      .title('Featured Events')
                      .child(
                        S.documentList()
                          .title('Featured Events')
                          .filter('_type == "event" && featured == true')
                          .defaultOrdering([{ field: 'date', direction: 'asc' }])
                      ),
                  ])
              ),
            
            // News section
            S.listItem()
              .title('News & Updates')
              .icon(() => '📰')
              .child(
                S.list()
                  .title('News & Updates')
                  .items([
                    S.listItem()
                      .title('All News')
                      .child(S.documentTypeList('news').title('All News')),
                    S.listItem()
                      .title('Featured News')
                      .child(
                        S.documentList()
                          .title('Featured News')
                          .filter('_type == "news" && featured == true')
                          .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                      ),
                  ])
              ),
            
            // Gallery section
            S.listItem()
              .title('Photo Gallery')
              .icon(() => '📸')
              .child(
                S.list()
                  .title('Photo Gallery')
                  .items([
                    S.listItem()
                      .title('All Galleries')
                      .child(S.documentTypeList('gallery').title('All Galleries')),
                    S.listItem()
                      .title('Event Photos')
                      .child(
                        S.documentList()
                          .title('Event Photos')
                          .filter('_type == "gallery" && category == "events"')
                      ),
                    S.listItem()
                      .title('Facility Photos')
                      .child(
                        S.documentList()
                          .title('Facility Photos')
                          .filter('_type == "gallery" && category == "facilities"')
                      ),
                  ])
              ),
            
            // Pages section
            S.listItem()
              .title('Website Pages')
              .icon(() => '📄')
              .child(S.documentTypeList('page').title('Website Pages')),
          ])
    }),
    visionTool(),
    colorInput(),
  ],
  
  schema: {
    types: [event, news, gallery, page],
  },
  
  // Custom theme colors to match Boise Gun Club branding
  theme: {
    '--brand-primary': '#F28705', // Lahoma Orange
    '--brand-secondary': '#F2CB05', // Leonard Yellow
  }
});
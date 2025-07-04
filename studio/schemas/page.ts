import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Website Pages',
  type: 'document',
  icon: () => '📄',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required().max(100),
      description: 'The main heading for this page'
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
      description: 'This determines the page URL (e.g., /about-us)'
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal Text', value: 'normal' },
            { title: 'Large Heading', value: 'h1' },
            { title: 'Medium Heading', value: 'h2' },
            { title: 'Small Heading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet Points', value: 'bullet' },
            { title: 'Numbered List', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: Rule => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  },
                  {
                    title: 'Open in new tab?',
                    name: 'blank',
                    type: 'boolean',
                    initialValue: false
                  }
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for accessibility and SEO',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption displayed below image',
            }
          ],
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Important Notice',
          icon: () => '⚠️',
          fields: [
            {
              name: 'type',
              title: 'Notice Type',
              type: 'string',
              options: {
                list: [
                  { title: '🔴 Alert/Warning', value: 'alert' },
                  { title: '💡 Information', value: 'info' },
                  { title: '✅ Success/Good News', value: 'success' },
                  { title: '⚠️ Caution', value: 'warning' },
                ]
              },
              initialValue: 'info'
            },
            {
              name: 'title',
              title: 'Notice Title',
              type: 'string',
              description: 'Optional title for this notice'
            },
            {
              name: 'content',
              title: 'Notice Content',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              type: 'type',
              title: 'title',
              content: 'content'
            },
            prepare({type, title, content}) {
              const typeEmoji = {
                alert: '🔴',
                info: '💡',
                success: '✅',
                warning: '⚠️'
              }[type] || '💡';
              
              return {
                title: `${typeEmoji} ${title || 'Notice'}`,
                subtitle: content
              }
            }
          }
        }
      ],
      description: 'The main content of your page. You can add text, images, and special notices.'
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Optional)',
      type: 'string',
      description: 'Custom title for search engines (leave blank to use main title)',
      validation: Rule => Rule.max(60)
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description (Optional)',
      type: 'text',
      rows: 2,
      description: 'Brief description for search engines (150-160 characters)',
      validation: Rule => Rule.max(160)
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      description: 'When should this page be visible?'
    }),
    defineField({
      name: 'lastModified',
      title: 'Last Modified',
      type: 'datetime',
      readOnly: true,
      description: 'Automatically updated when you save changes'
    }),
  ],
  
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      publishedAt: 'publishedAt'
    },
    prepare(selection) {
      const { title, slug, publishedAt } = selection;
      
      return {
        title: `📄 ${title}`,
        subtitle: `/${slug} • Modified ${new Date(publishedAt).toLocaleDateString()}`,
      };
    },
  },
  
  orderings: [
    {
      title: 'Last Modified (Newest)',
      name: 'modifiedDesc',
      by: [{ field: 'lastModified', direction: 'desc' }]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    },
  ]
});
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'news',
  title: 'News & Updates',
  type: 'document',
  icon: () => '📰',
  fields: [
    defineField({
      name: 'title',
      title: 'News Title',
      type: 'string',
      validation: Rule => Rule.required().max(120),
      description: 'Clear, engaging headline (appears in browser tabs and social shares)'
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
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300),
      description: 'Brief summary that appears in news listings and search results'
    }),
    defineField({
      name: 'content',
      title: 'Article Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet Points', value: 'bullet' },
            { title: 'Numbers', value: 'number' }
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
                  },
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
      ],
      description: 'Write your full article here. You can add images, links, and formatting.'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
      description: 'When should this appear on the website?'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Who wrote this article?',
      options: {
        list: [
          { title: 'Club Manager', value: 'Club Manager' },
          { title: 'Safety Officer', value: 'Safety Officer' },
          { title: 'Competition Director', value: 'Competition Director' },
          { title: 'Training Coordinator', value: 'Training Coordinator' },
          { title: 'Board of Directors', value: 'Board of Directors' },
        ]
      }
    }),
    defineField({
      name: 'category',
      title: 'News Category',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: '📢 General Club News', value: 'general' },
          { title: '🛡️ Safety Updates', value: 'safety' },
          { title: '🏆 Competition Results', value: 'competition' },
          { title: '🏢 Facility Updates', value: 'facility' },
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Describe this image for accessibility',
        }
      ],
      description: 'Main image that represents this news story'
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage?',
      type: 'boolean',
      initialValue: false,
      description: 'Show this story prominently on the homepage'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          { title: 'Safety', value: 'safety' },
          { title: 'Competition', value: 'competition' },
          { title: 'Training', value: 'training' },
          { title: 'Membership', value: 'membership' },
          { title: 'Facility', value: 'facility' },
          { title: 'Events', value: 'events' },
          { title: 'Awards', value: 'awards' },
          { title: 'Weather', value: 'weather' },
          { title: 'Schedule', value: 'schedule' },
        ]
      },
      description: 'Add relevant tags to help organize content'
    }),
  ],
  
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'image',
      publishedAt: 'publishedAt',
      category: 'category'
    },
    prepare(selection) {
      const { title, author, media, publishedAt, category } = selection;
      const categoryEmoji = {
        general: '📢',
        safety: '🛡️',
        competition: '🏆',
        facility: '🏢'
      }[category] || '📰';
      
      return {
        title: `${categoryEmoji} ${title}`,
        subtitle: `By ${author} • ${new Date(publishedAt).toLocaleDateString()}`,
        media,
      };
    },
  },
  
  orderings: [
    {
      title: 'Published Date (Newest First)',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    },
    {
      title: 'Published Date (Oldest First)',
      name: 'publishedAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    },
  ]
});
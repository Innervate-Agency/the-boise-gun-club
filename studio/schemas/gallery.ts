import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Photo Galleries',
  type: 'document',
  icon: () => '📸',
  fields: [
    defineField({
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      validation: Rule => Rule.required().max(100),
      description: 'Name for this photo collection (e.g., "Summer Competition 2024")'
    }),
    defineField({
      name: 'images',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Photo Description',
              validation: Rule => Rule.required(),
              description: 'Describe what\'s happening in this photo'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption (Optional)',
              description: 'Additional context or story about this photo'
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Upload multiple photos for this gallery. Drag to reorder.'
    }),
    defineField({
      name: 'category',
      title: 'Gallery Category',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: '🎯 Events & Competitions', value: 'events' },
          { title: '🏢 Facilities & Ranges', value: 'facilities' },
          { title: '📚 Training & Education', value: 'training' },
          { title: '🏆 Awards & Achievements', value: 'competitions' },
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: Rule => Rule.required().min(1898).max(new Date().getFullYear() + 1),
      initialValue: new Date().getFullYear(),
      description: 'What year were these photos taken?'
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage?',
      type: 'boolean',
      initialValue: false,
      description: 'Show some photos from this gallery on the homepage'
    }),
    defineField({
      name: 'createdAt',
      title: 'Date Added',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      description: 'When was this gallery created?'
    }),
  ],
  
  preview: {
    select: {
      title: 'title',
      category: 'category',
      year: 'year',
      images: 'images',
    },
    prepare(selection) {
      const { title, category, year, images } = selection;
      const categoryEmoji = {
        events: '🎯',
        facilities: '🏢',
        training: '📚',
        competitions: '🏆'
      }[category] || '📸';
      
      const imageCount = images ? images.length : 0;
      
      return {
        title: `${categoryEmoji} ${title}`,
        subtitle: `${year} • ${imageCount} photo${imageCount !== 1 ? 's' : ''}`,
        media: images && images[0],
      };
    },
  },
  
  orderings: [
    {
      title: 'Newest First',
      name: 'createdDesc',
      by: [{ field: 'createdAt', direction: 'desc' }]
    },
    {
      title: 'Oldest First',
      name: 'createdAsc',
      by: [{ field: 'createdAt', direction: 'asc' }]
    },
    {
      title: 'Year (Newest)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    },
  ]
});
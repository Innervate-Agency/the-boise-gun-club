import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Club Events',
  type: 'document',
  icon: () => '📅',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required().max(100),
      description: 'Keep it clear and descriptive (e.g., "Monthly Trap Competition")'
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
      name: 'description',
      title: 'Event Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(500),
      description: 'Brief description for event listings and social media'
    }),
    defineField({
      name: 'date',
      title: 'Event Date & Time',
      type: 'datetime',
      validation: Rule => Rule.required(),
      description: 'When does the event start?'
    }),
    defineField({
      name: 'endDate',
      title: 'End Date & Time (Optional)',
      type: 'datetime',
      description: 'Leave blank for single-day events'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'e.g., "Trap Fields 1-5" or "Main Clubhouse"',
      options: {
        list: [
          { title: 'Trap Fields 1-5', value: 'Trap Fields 1-5' },
          { title: 'Trap Fields 6-10', value: 'Trap Fields 6-10' },
          { title: 'All Trap Fields', value: 'All Trap Fields' },
          { title: 'Skeet Fields', value: 'Skeet Fields' },
          { title: 'Sporting Clays Course', value: 'Sporting Clays Course' },
          { title: 'Main Clubhouse', value: 'Main Clubhouse' },
          { title: 'Training Range', value: 'Training Range' },
          { title: 'Entire Facility', value: 'Entire Facility' },
        ],
        layout: 'dropdown'
      }
    }),
    defineField({
      name: 'category',
      title: 'Event Type',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: '🏆 Competition', value: 'competition' },
          { title: '🎯 Training/Instruction', value: 'training' },
          { title: '🎉 Social Event', value: 'social' },
          { title: '🔧 Facility Maintenance', value: 'maintenance' },
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'registrationRequired',
      title: 'Registration Required?',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle on if people need to sign up in advance'
    }),
    defineField({
      name: 'maxParticipants',
      title: 'Maximum Participants',
      type: 'number',
      description: 'Leave blank for unlimited capacity',
      hidden: ({ document }) => !document?.registrationRequired
    }),
    defineField({
      name: 'fee',
      title: 'Entry Fee ($)',
      type: 'number',
      description: 'Leave blank if free. Enter dollar amount (e.g., 25 for $25)'
    }),
    defineField({
      name: 'image',
      title: 'Event Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Describe the image for accessibility',
        }
      ],
      description: 'Upload a photo that represents this event'
    }),
    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: '📅 Upcoming', value: 'upcoming' },
          { title: '▶️ In Progress', value: 'ongoing' },
          { title: '✅ Completed', value: 'completed' },
          { title: '❌ Cancelled', value: 'cancelled' },
        ],
        layout: 'radio'
      },
      initialValue: 'upcoming'
    }),
    defineField({
      name: 'organizer',
      title: 'Event Organizer',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Who is running this event? (Name or committee)'
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Phone number or email for questions'
    }),
    defineField({
      name: 'rules',
      title: 'Special Rules or Requirements',
      type: 'text',
      rows: 3,
      description: 'Any specific rules, equipment needs, or safety requirements'
    }),
    defineField({
      name: 'equipment',
      title: 'Required Equipment',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Shotgun', value: 'shotgun' },
          { title: 'Safety Glasses', value: 'safety-glasses' },
          { title: 'Hearing Protection', value: 'hearing-protection' },
          { title: 'Shooting Vest', value: 'shooting-vest' },
          { title: 'Shell Bag', value: 'shell-bag' },
          { title: 'Eye Dominance Test', value: 'eye-dominance-test' },
        ]
      },
      description: 'Select all equipment participants need to bring'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      description: 'When should this event be visible on the website?'
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage?',
      type: 'boolean',
      initialValue: false,
      description: 'Show this event prominently on the homepage'
    }),
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
      category: 'category',
      status: 'status'
    },
    prepare(selection) {
      const { title, subtitle, media, category, status } = selection;
      const categoryEmoji = {
        competition: '🏆',
        training: '🎯',
        social: '🎉',
        maintenance: '🔧'
      }[category] || '📅';
      
      const statusEmoji = {
        upcoming: '📅',
        ongoing: '▶️',
        completed: '✅',
        cancelled: '❌'
      }[status] || '';
      
      return {
        title: `${categoryEmoji} ${title}`,
        subtitle: `${statusEmoji} ${new Date(subtitle).toLocaleDateString()}`,
        media,
      };
    },
  },
  
  orderings: [
    {
      title: 'Event Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    },
    {
      title: 'Event Date (Oldest First)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    },
  ]
});
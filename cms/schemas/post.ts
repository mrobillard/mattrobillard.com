import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'visible',
      type: 'boolean',
      title: 'Visible',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        layout: 'radio',
        list: [
          {
            title: 'Writing',
            value: 'writing',
          },
          {
            title: 'Technical',
            value: 'technical',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'tag' },
        },
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
      hidden: ({ document }) => !document?.quote,
      validation: (Rule) =>
        Rule.custom((value, context) =>
          !!context.document?.quote && !value ? 'Required' : true,
        ),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'newsletter',
      title: 'Send to Newsletter',
      type: 'boolean',
      initialValue: false,
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});

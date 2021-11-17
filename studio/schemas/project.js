export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'sortingIndex',
      title: 'Sorting index',
      type: 'number',
      description:
        'Used for sorting the projects on the front-end and in the Studio',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this project on the Home page',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'additionalImages',
      title: 'Additional images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption / Alt text',
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    },
    {
      name: 'roleTags',
      title: 'My roles',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'roleTag' } }],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'techTags',
      title: 'Technologies used',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'techTag' } }]
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      description: "E.g. '2021' or 'Nov 2020–Feb 2021'"
    },
    {
      title: 'Primary link',
      name: 'primaryLink',
      type: 'link',
      description: 'Preferrably a live website'
    },
    {
      title: 'Secondary link',
      name: 'secondaryLink',
      type: 'link',
      description: 'E.g. a GitHub repository'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Only for internal use, not shown on the front-end',
      validation: (Rule) => Rule.required()
    }
  ],
  initialValue: () => ({
    featured: true,
    primaryLink: {
      text: 'Visit site',
      _type: 'link'
    },
    secondaryLink: {
      text: 'GitHub repo',
      _type: 'link'
    },
    publishedAt: new Date().toISOString()
  }),
  orderings: [
    {
      title: 'Sorting index',
      name: 'sortingIndex',
      by: [{ field: 'sortingIndex', direction: 'asc' }]
    },
    {
      title: 'Title',
      name: 'title',
      by: [{ field: 'title', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sortingIndex',
      media: 'mainImage'
    }
  }
}

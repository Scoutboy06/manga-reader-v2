import type { CollectionConfig } from 'payload'

export const Manga: CollectionConfig = {
  slug: 'manga',
  access: {
    read: () => true,
  },
  fields: [
    // General
    {
      label: 'MAL ID',
      name: 'malId',
      type: 'text',
      required: true,
    },
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'Slug',
      name: 'slug',
      type: 'text',
      required: true,
      hooks: {
        beforeValidate: [
          ({ data, operation }) => {
            if (operation === 'create') {
            }
          },
        ],
      },
    },
    {
      label: 'Poster',
      name: 'poster',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textarea',
    },

    // Metadata
    {
      label: 'Author',
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
      hasMany: true,
      required: false,
    },
    {
      label: 'Published',
      name: 'published',
      type: 'date',
      required: false,
    },
    {
      label: 'Genres',
      name: 'genres',
      type: 'relationship',
      relationTo: 'genres',
      hasMany: true,
      unique: true,
    },
  ],
  // upload: true,
}

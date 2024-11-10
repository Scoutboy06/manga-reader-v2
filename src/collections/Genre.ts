import type { CollectionConfig } from 'payload'

export const Genre: CollectionConfig = {
  slug: 'genres',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

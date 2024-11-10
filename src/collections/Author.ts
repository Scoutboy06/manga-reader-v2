import type { CollectionConfig } from 'payload'

export const Author: CollectionConfig = {
  slug: 'authors',
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
    {
      label: 'Description',
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      label: 'Picture',
      name: 'picture',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}

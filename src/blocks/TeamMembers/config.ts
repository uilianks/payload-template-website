import type { Block, Field } from 'payload'

const columnFields: Field[] =  [{
    name: 'name',
    type: 'text',
    label: 'Name',
    required: true,
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Description',
    required: true,
  },
  {
    name: 'image',
    type: 'upload',
    label: 'Image',
    relationTo: 'media',
    required: true,
  }
]

export const TeamMemberBlock: Block = {
  slug: 'teamMember',
  interfaceName: 'TeamMemberBlock',
  labels: {
    singular: 'Team Member',
    plural: 'Team Members',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
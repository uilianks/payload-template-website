import type { Block } from 'payload'

export const TemplateBlock: Block = {
  slug: 'template',
  interfaceName: 'TemplateBlock', // NOME DO COMPONENT NO FRONTEND
  labels: {
    singular: 'Template',
    plural: 'Templates',
  },
  fields: [
    {
      name: 'field',
      type: 'text',
    }
  ]
}
import type { Block } from 'payload'

export const CompetenciasBlock: Block = {
  slug: 'competencias',
  interfaceName: 'CompetenciasBlock',
  labels: {
    singular: 'Competências',
    plural: 'Competências',
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
      label: 'Título da Seção',
    },
    {
      name: 'descricao',
      type: 'textarea',
      required: true,
      label: 'Descrição da Seção',
    },
    {
      name: 'competencias',
      type: 'array',
      label: 'Competências',
      minRows: 1,
      maxRows: 6,
      labels: {
        singular: 'Competência',
        plural: 'Competências',
      },
      fields: [
        {
          name: 'titulo',
          type: 'text',
          required: true,
          label: 'Título',
        },
        {
          name: 'descricao',
          type: 'textarea',
          required: true,
          label: 'Descrição',
        },
      ],
    },
  ],
}

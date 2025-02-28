import type { Block } from 'payload'

export const StatisticsBlock: Block = {
  slug: 'statistics',
  interfaceName: 'StatisticsBlock',
  labels: {
    singular: 'Estatísticas',
    plural: 'Estatísticas',
  },
  fields: [
    {
      name: 'statistics',
      type: 'array',
      label: 'Estatísticas',
      minRows: 1,
      maxRows: 4,
      labels: {
        singular: 'Estatística',
        plural: 'Estatísticas',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Rótulo',
        },
        {
          name: 'number',
          type: 'number',
          required: true,
          label: 'Número',
        },
        {
          name: 'prefix',
          type: 'text',
          label: 'Prefixo',
          admin: {
            description: 'Ex: +, $, etc',
          },
        },
        {
          name: 'suffix',
          type: 'text',
          label: 'Sufixo',
          admin: {
            description: 'Ex: k, M, %, etc',
          },
        },
        {
          name: 'columns',
          type: 'select',
          defaultValue: '1',
          options: [
            {
              label: '1 Coluna',
              value: '1',
            },
            {
              label: '2 Colunas',
              value: '2',
            },
            {
              label: '3 Colunas',
              value: '3',
            },
            {
              label: 'Full Width',
              value: 'full',
            },
          ],
          admin: {
            description: 'Quantas colunas este item deve ocupar',
          },
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Ícone (SVG Path)',
          admin: {
            description: 'Cole o path do ícone SVG aqui',
          },
        },
      ],
    },
  ],
}

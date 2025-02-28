import React from 'react'
import type { CompetenciasBlock as CompetenciasBlockProps } from '@/payload-types'

const CompetenciaCard: React.FC<{
  title: string
  description: string
}> = ({ title, description }) => {
  return (
    <div className="relative p-6 border border-zinc-800 rounded-lg group hover:bg-zinc-800/30 transition-all">
      <h3 className="text-xl font-semibold mb-4 flex justify-between items-center">
        {title}
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17l9.2-9.2M17 17V7H7"
          />
        </svg>
      </h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}

export const CompetenciasBlock: React.FC<CompetenciasBlockProps> = (props) => {
  const { titulo, descricao, competencias } = props

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">{titulo}</h2>
        <p className="text-zinc-400 mb-12 max-w-3xl">{descricao}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencias?.map((competencia, index) => (
            <CompetenciaCard
              key={index}
              title={competencia.titulo}
              description={competencia.descricao}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

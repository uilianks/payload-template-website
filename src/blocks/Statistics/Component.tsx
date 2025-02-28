'use client'

import React, { useEffect, useState, useRef } from 'react'
import type { StatisticsBlock as StatisticsBlockProps } from '@/payload-types'

const useCountAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = elementRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    const steps = 60
    const stepDuration = duration / steps
    const increment = end / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end, duration, isInView])

  return { count, ref: elementRef }
}

const StatCard: React.FC<{
  prefix?: string
  number: number
  suffix?: string
  label: string
  columns?: string
  icon?: React.ReactNode
}> = ({ prefix = '', number, suffix = '', label, columns = '1', icon }) => {
  const { count, ref } = useCountAnimation(number)

  const colSpanClass = {
    '1': '',
    '2': 'lg:col-span-2',
    '3': 'lg:col-span-3',
    full: 'lg:col-span-full',
  }[columns]

  return (
    <div ref={ref} className={`stat bg-base-200 rounded-xl ${colSpanClass}`}>
      {icon && <div className="stat-figure text-primary">{icon}</div>}
      <div className="stat-title text-base-content/60">{label}</div>
      <div className="stat-value text-4xl">
        {prefix}
        {count}
        {suffix}
      </div>
    </div>
  )
}

export const StatisticsBlock: React.FC<StatisticsBlockProps> = (props) => {
  const { statistics } = props

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Veja nossos resultados</h2>
        <p className="text-base-content/70 mb-8">Veja os numeros que ja atingimos</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {statistics?.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              columns={stat.columns}
              icon={
                stat.icon && (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    dangerouslySetInnerHTML={{ __html: stat.icon }}
                  />
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import Typewriter from 'typewriter-effect'

export const SoftwareHouseHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const [showMockups, setShowMockups] = useState(false)

  useEffect(() => {
    setHeaderTheme('dark')
  }, [])

  return (
    <div className="hero min-h-screen">
      <div className="w-full">
        <div className="grid grid-cols-12">
          <div className="col-span-1"></div>
          <div className="col-span-4 lg:col-span-5">
            {/* Text Content */}
            <div className="max-w-xl">
              <div className="text-4xl md:text-5xl font-bold mb-8">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Você pensa,')
                      .pauseFor(500)
                      .typeString('<br>nós desenvolvemos')
                      .pauseFor(1000)

                      .start()
                  }}
                  options={{
                    delay: 50,
                    cursor: '▋',
                  }}
                />
              </div>

              <div className="mockup-code w-full">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString('<code>npm create application@latest</code>')
                      .pauseFor(1000)
                      .callFunction(() => setShowMockups(true))
                      .start()
                  }}
                  options={{
                    delay: 50,
                    cursor: '▋',
                  }}
                />
              </div>

              <p className="py-6 text-base-content/70">
                Transformamos suas ideias em soluções digitais inovadoras. Desenvolvimento de
                websites, aplicativos e sistemas sob medida para seu negócio.
              </p>
              <button className="btn btn-primary">Começar Projeto</button>
            </div>
          </div>
          <div className="col-span-6">
            <div
              className="relative flex items-center gap-4 transition-all duration-1000 opacity-0 translate-y-10"
              style={{
                opacity: showMockups ? 1 : 0,
                transform: showMockups ? 'translateY(0)' : 'translateY(40px)',
              }}
            >
              {/* Phone Mockup */}
              <div className="mockup-phone border-primary relative -left-[550px] md:scale-75 z-10">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1 relative overflow-hidden">
                    {/* Método 1: Usando Image */}
                    <Image
                      src="/images/app-screenshot.png" // Coloque sua imagem em public/images/
                      alt="App Screenshot"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Browser Mockup */}
              <div className="mockup-browser border absolute w-full h-[calc(60vw*0.5625)] mt-10 z-0">
                <div className="mockup-browser-toolbar">
                  <div className="input border border-base-300">https://seusite.com.br</div>
                </div>
                {/* Método 2: Usando background-image */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/website-screenshot.png)',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

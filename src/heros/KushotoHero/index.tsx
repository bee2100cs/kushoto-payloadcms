'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import type { Page } from '@/payload-types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Fade, Zoom } from 'react-awesome-reveal'
import KushotoAbout from '@/components/HomeSections/KushotoAbout'
import ProjectHighlights from '@/components/HomeSections/ProjectHighlights'
import Partners from '@/components/HomeSections/Partners'
import PartnerTestimonial from '@/components/HomeSections/PartnerTestimonial'
import TeamHome from '@/components/HomeSections/TeamHome'
import FeaturedPosts from '@/components/HomeSections/FeaturedPosts'
import Image from 'next/image'

export const KushotoHero: React.FC<Page['hero']> = ({}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <>
      {/* New Kushoto Header */}
      <div className="relative overflow-hidden pt-[20px]" data-theme="light">
        {/* Background Image and shapes */}
        <Image
          src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/image-hero-1.webp"
          alt="black background"
          className="absolute top-0 right-0 z-0"
          layout="fill"
          objectFit="cover"
          priority
        />

        <div className="mx-auto w-full max-w-[1644px] px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="xl:w-5/12 lg:w-8/12 mb-[30px]">
              <div className="lg:pl-[66px] pl-0">
                {/* Hero Content */}
                <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center gap-1 text-[#ff5800] tracking-[0.1em] uppercase font-semibold text-md mb-6">
                      <i className="fa-solid fa-heart btn__icon"></i>
                      Welcome to Kushoto
                    </span>
                  </div>

                  <div className="text-center">
                    <h1 className="font-[var(--font-franklin-gothic)] mb-8">
                      <span className="block uppercase">
                        <span className=" font-black text-[calc(0.5rem+3vw)] lg:text-[3rem] bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text mb-2 uppercase">
                          Climate & Health Justice Advocates
                        </span>
                      </span>
                    </h1>
                  </div>
                  <div className="text-center max-w-2xl mx-auto px-4">
                    <p className="text-xl lg:text-2xl leading-relaxed mb-4">
                      We champion for climate and gender justice,&nbsp;
                      <motion.span
                        className="inline-block font-bold text-pink-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                      >
                        one story at a time
                      </motion.span>
                    </p>
                    <p className="text-lg lg:text-xl leading-relaxed mb-12">
                      Join us in amplifying stories that matter
                    </p>
                  </div>
                  <div className="text-center">
                    <Link
                      className="relative inline-flex items-center gap-2 px-10 py-4 text-white font-semibold text-sm uppercase border-0 shadow-none rounded-none bg-[#eb9309] transition-all duration-400 ease-in-out hover:bg-[#7fb432] hover:text-white focus:outline-none focus:ring-0"
                      href="/get-involved"
                    >
                      <span className="relative z-10">Get Involved</span>
                      <i className="fa-solid fa-heart z-10"></i>
                      <span className="absolute inset-0 bg-[#eb9309] transition-all duration-400 ease-in-out group-hover:scale-100 rounded-full opacity-50 z-0"></span>
                      <svg className="it-btn__animation absolute bottom-0 left-0 w-full h-full z-11">
                        <defs>
                          <filter>
                            <feGaussianBlur
                              in="SourceGraphic"
                              result="blur"
                              stdDeviation="10"
                            ></feGaussianBlur>
                            <feColorMatrix
                              in="blur"
                              mode="matrix"
                              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                              result="goo"
                            ></feColorMatrix>
                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-xl-6 mb-30">
              <Zoom triggerOnce={false}>
                <div>
                  <figure className="relative overflow-hidden xl:rounded-full rounded-0 mb-[30px] border-4 xl:border-[#ff5800] ">
                    <Image
                      src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_hero/hero-thumb-Q4g4YpnB2aJ9h3IpPVWeydwhI7tKWC.webp"
                      alt="Kushoto hero"
                      className="w-full"
                      width={500} // Replace with the actual width of the image
                      height={500} // Replace with the actual height of the image
                      priority // Optional: Add this if the image is above the fold
                    />
                  </figure>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <KushotoAbout />
      <div className="w-4/5 h-2 mx-auto bg-gradient-to-r from-transparent via-brand-orange to-transparent rounded-full animate-pulse-bright"></div>
      <ProjectHighlights />
      <div className="w-4/5 h-2 mx-auto bg-gradient-to-r from-transparent via-brand-orange to-transparent rounded-full animate-pulse-bright"></div>
      <Partners />
      <PartnerTestimonial />
      <TeamHome />
      <FeaturedPosts />
    </>
  )
}

'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import type { Page } from '@/payload-types'
import KushotoAbout from '@/components/HomeSections/KushotoAbout'
import Partners from '@/components/HomeSections/Partners'
import PartnerTestimonial from '@/components/HomeSections/PartnerTestimonial'
import TeamHome from '@/components/HomeSections/TeamHome'
import HeroSection from '@/components/HomeSections/HeroSection'
import ImpactAreas from '@/components/HomeSections/ImpactAreas'
import FeaturedProjects from '@/components/HomeSections/FeaturedProjects'
import FeaturedGallery from '@/components/HomeSections/FeaturedGallery'
import DonateCta from '@/components/HomeSections/DonateCta'
import FeaturesSection from '@/components/HomeSections/FeaturesSection'

export const KushotoHero: React.FC<Page['hero']> = ({}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <>
      {/* New Kushoto Header */}
      <HeroSection />
      <KushotoAbout />

      <ImpactAreas />

      <FeaturesSection />
      <div className="w-4/5 h-2 mx-auto bg-gradient-to-r from-transparent via-brand-orange to-transparent rounded-full animate-pulse-bright"></div>
      <FeaturedProjects />
      <Partners />
      <PartnerTestimonial />
      <TeamHome />
      <FeaturedGallery />
      <DonateCta />
    </>
  )
}

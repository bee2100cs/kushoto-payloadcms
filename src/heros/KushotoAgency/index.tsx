'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import type { Page } from '@/payload-types'
import AgencyProcess from '@/components/AgencySections/AgencyProcess'
import AgencyCallToAction from '@/components/AgencySections/AgencyCallToAction'
import HeroSection from '@/components/AgencySections/HeroSection'
import ServiceList from '@/components/AgencySections/ServiceList'
import { services } from '@/components/AgencySections/Data'

export const KushotoAgency: React.FC<Page['hero']> = ({}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <>
      <div className="animate-fade-in-up">
        <div className="container mx-auto px-4">
          <HeroSection />
          <section className="text-center pt-20 pb-12">
            <h2
              id="services-list"
              className="text-3xl font-bold font-heading mb-4 text-kushoto-primary"
            >
              Our Services
            </h2>
            <p className="text-xl text-kushoto-neutralDark/80 max-w-3xl mx-auto">
              Explore the range of services Kushoto Agency offers.
            </p>
          </section>
          <ServiceList services={services} />
        </div>
      </div>

      <AgencyProcess />
      <AgencyCallToAction />
    </>
  )
}

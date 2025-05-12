'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import type { Page } from '@/payload-types'
import AboutAgency from '@/components/AgencySections/AboutAgency'
import AgencyServices from '@/components/AgencySections/AgencyServices'
import AgencyProcess from '@/components/AgencySections/AgencyProcess'
import AgencyCallToAction from '@/components/AgencySections/AgencyCallToAction'

export const KushotoAgency: React.FC<Page['hero']> = ({}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <>
      <AboutAgency />
      <AgencyServices />
      {/* <AgencyProcess />
      <AgencyCallToAction /> */}
    </>
  )
}

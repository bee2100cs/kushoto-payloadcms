'use client'
import type { Header } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'
import React from 'react'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const { data, rowNumber } = useRowLabel<NonNullable<Header['navItems']>[number]>()

  let label: string = 'Row' // Default label

  // Check the blockType to determine how to get the label
  if (data?.blockType === 'link' && data.link?.label) {
    label = data.link.label
  } else if (data?.blockType === 'dropdown' && data.label) {
    label = `${data.label} (Dropdown)`
  }

  const finalLabel = `Nav item ${rowNumber !== undefined ? rowNumber + 1 : ''}: ${label}`

  return <div>{finalLabel}</div>
}

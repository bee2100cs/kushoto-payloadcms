import { Check } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { AgencyData } from './Data'

const AboutAgency = () => {
  const [expanded, setExpanded] = useState(false)
  const items = AgencyData.checklistItems

  const firstThree = items.slice(0, 3)
  const rest = items.slice(3)

  return (
    <section className="relative block pt-10 px-0 pb-10 z-10">
      <div className="mx-auto max-w-[1320px] px-[15px]">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-normal italic text-[#ff5800] mb-6">{AgencyData.title}</h1>

            {/* On small screens: show only 3 items and expand toggle */}
            <div className="block sm:hidden">
              <ul className="list-none p-0 m-0 space-y-1.5">
                {firstThree.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500" /> {item}
                  </li>
                ))}
                {expanded &&
                  rest.map((item, index) => (
                    <li key={`mobile-${index}`} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500" /> {item}
                    </li>
                  ))}
              </ul>
              {items.length > 3 && (
                <div className="relative mt-3 flex justify-center">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 text-xl text-orange-600 z-10"
                  >
                    {expanded ? 'Show less' : 'Show more'}
                  </button>
                  {/* Gradient Overlay */}
                  {!expanded && (
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  )}
                </div>
              )}
            </div>
            {/* On larger screens: show full list in two columns */}
            <div className="hidden sm:flex gap-4">
              {/* First column */}
              <div className="w-1/2">
                <ul className="list-none p-0 m-0 space-y-1.5">
                  {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                    <li key={`col1-${index}`} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Second Column (only on large screens or if expanded) */}
              <div className={`w-full lg:w-1/2 ${expanded ? '' : 'hidden sm:block'}`}>
                <ul className="list-none p-0 m-0 space-y-1.5">
                  {items
                    .slice(Math.ceil(AgencyData.checklistItems.length / 2))
                    .map((item, index) => (
                      <li key={index} className="flex items-start gap-2 mb-1.5 last:mb-0">
                        <Check className="w-5 h-5 text-green-500" /> {item}
                      </li>
                    ))}
                </ul>
              </div>
              {/* Toggle button only on small screens */}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full flex">
              <div className="-full md:w-1/2">
                <Image
                  className="md:mt-4 rounded-tl-[4em] rounded-br-[4em]"
                  src={AgencyData.image1.src}
                  alt={AgencyData.image1.alt}
                  width={300}
                  height={300}
                />
              </div>
              <div className="w-1/2 hidden lg:block">
                <Image
                  className="rounded-tr-[4em] rounded-bl-[4em]"
                  src={AgencyData.image2.src}
                  alt={AgencyData.image2.alt}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAgency

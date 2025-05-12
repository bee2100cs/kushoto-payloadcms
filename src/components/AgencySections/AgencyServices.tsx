import React from 'react'
import { AgencyData } from './Data'
import { Camera, Video, Clapperboard, WandSparkles, Gem, Play, Palette } from 'lucide-react'
import StyledDivider from './StyleDivider'

const services = AgencyData.services
const iconMap = {
  camera: Camera,
  video: Video,
  clapperboard: Clapperboard,
  wandSparkles: WandSparkles,
  gem: Gem,
  play: Play,
  palette: Palette,
}

const AgencyServices = () => {
  return (
    <section className="relative block pt-10 px-0 pb-10 z-10 ">
      <div className="mx-auto max-w-[1320px] px-[15px] mt-5 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {services.map((service, index) => {
            // Map icon
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Camera
            return (
              <div key={index} className="w-full">
                <div
                  className={`relative bg-gradient-${service.gradient} z-0 p-4 sm:p-12 pt-0 sm:pt-0 backdrop-blur-xs`}
                >
                  <div className="inline-flex items-center justify-center w-[70px] h-[70px] bg-[#ff5800] text-white text-xl mb-4 ">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-2xl">{service.title}</h3>
                  <p className="text-xl font-semibold text-[#000000]">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AgencyServices

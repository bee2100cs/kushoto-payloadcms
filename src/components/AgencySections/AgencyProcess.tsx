import React from 'react'
import StyledDivider from './StyleDivider'
import { AgencyData } from './Data'
import Image from 'next/image'

const agencyProcess = AgencyData.serviceProcess

const AgencyProcess = () => {
  return (
    <section className="relative block pt-10 px-0 pb-10 z-10">
      <StyledDivider />
      <div className="mx-auto max-w-[1320px] px-[15px]">
        <div className=" flex flex-col lg:flex-row w-full  gap-4 xl:gap-5 items-center mt-10 pt-10">
          <div className="w-full lg:w-1/2 xl:w-7/12 lg:order-2">
            <Image
              src={agencyProcess.image.src}
              alt={agencyProcess.image.alt}
              width={700}
              height={467}
              className="filter transition dark:invert"
            />
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 lg:order-1">
            <h2 className="text-5xl font-normal italic text-gray-600 mb-4 font-tertiary">
              {agencyProcess.title}
            </h2>
            {agencyProcess.process.map((process, index) => (
              <div
                key={index}
                data-cue="slideInRight"
                className={`
                    relative mt-4 xl:mt-5 pl-[74px]
                    ${index === 0 ? 'active' : ''}
                  `}
              >
                <div
                  className="absolute top-0 left-0 z-[1] w-[50px] h-[50px]
                    text-center leading-[50px] border border-dashed rounded-full
                    text-gray-800 font-secondary overflow-hidden
                    transition-all duration-100 ease-linear
                    group-[.active]:border-transparent group-[.active]:text-white
                  "
                >
                  <span>{index + 1}</span>
                </div>
                <h4 className="font-semibold text-xl mt-2">{process.title}</h4>
                <p className="text-md text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgencyProcess

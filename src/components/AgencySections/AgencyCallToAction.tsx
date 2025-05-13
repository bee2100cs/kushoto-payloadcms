import React from 'react'
import StyledDivider from './StyleDivider'
import { callToActionData } from './Data'
import { CallToAction } from '@/blocks/CallToAction/config'

const AgencyCallToAction = () => {
  return (
    <section className="relative block pt-10 px-0 pb-10 z-10">
      <StyledDivider />
      <div className="mx-auto max-w-[1320px] px-[15px] mt-10">
        <div
          className="relative bg-center bg-no-repeat bg-cover rounded-[2em] overflow-hidden"
          style={{
            backgroundImage: `url(${callToActionData.backgroundImage})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center 0px',
          }}
        >
          <div className="bg-[rgba(0,0,0,0.6)] px-6 py-12 md:p-12">
            <div className="flex w-full flex-col lg:flex-row gap-4 items-center">
              <div className="w-full lg:w-4/6 text-center lg:text-left">
                <div className="text-4xl sm:text-5xl font-bold text-white uppercase mb-0 font-poppins stroke-text">
                  {callToActionData.title}
                </div>
              </div>
              <div className="w-full lg:w-1/3 text-center lg:text-right" data-cue="slideInLeft">
                <a
                  href={callToActionData.button.link}
                  className="inline-block rounded-full px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-pink-500 text-lg font-medium hover:opacity-90 transition"
                >
                  {callToActionData.button.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgencyCallToAction

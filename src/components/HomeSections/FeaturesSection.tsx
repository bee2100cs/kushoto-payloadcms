'use client'

import Link from 'next/link'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { Button } from '../ui/button'

const Features = [
  {
    title: 'African Stories',
    des: 'We tell afrocentric stories to give a voice to the voiceless',
    icon: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/globe-africa-svgrepo-com-EodGAr85vmZ2WMBzK8gmuybdakojw9.svg',
    width: '80%',
    duration: 1000,
  },
  {
    title: 'Multimedia Tools',
    des: 'Our story mediums range from articles, photos and videos',
    icon: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/camera-svgrepo-com-QnKRyK7YY4O50q6eJhhepNpRx66dsU.svg',
    width: '94%',
    duration: 1200,
  },
  {
    title: 'Passionate Team',
    des: 'We boast a passionate, skilled and well informed team',
    icon: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/icon3-l6kahs24wgRWNNU2UH9bWtf7l7Nz5u.svg',
    width: '70%',
    duration: 1400,
  },
]

const FeaturesSection = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <div className="pt-[70px] relative">
      <div className="absolute right-0 left-0 mx-auto text-center -z-10 opacity-5 ">
        <img
          src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/map-iIoAusbdZqMdg7NQH1JPX3BgJvTHLj.png"
          alt="african map"
        />
      </div>
      <div className="w-full px-3 md:px-4 lg:px-6 mx-auto max-w-[1314px]">
        <div className="grid grid-cols-1">
          <div>
            <div className="bg-white border-0 md:border md:border-gray-100 shadow-none md:shadow-md pr-4 pl-4 md:pr-12 md:pl-12 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {Features.map((features, fitem) => (
                  <div className="animate-fadeInLeft" key={fitem}>
                    <Slide direction="left" triggerOnce={false} duration={features.duration}>
                      <div>
                        <div className="keyFeatureBlock bg-white border border-gray-100 box-border flex items-center pl-0 pr-6 pt-9 pb-9 ml-[41px] relative mb-[30px]">
                          <div className="keyFeatureBlock__left">
                            <span className="keyFeatureBlock__icon w-[82px] h-[82px] grid place-content-center bg-white border border-gray-100 box-border shadow-md rounded-full -ml-[41px] transition-all duration-400 ease-in-out">
                              <img src={features.icon} alt="feature icon" />
                            </span>
                          </div>
                          <div className="pl-[30px]">
                            <h3 className="text-black text-xl lg:text-[1.375rem] uppercase font-semibold mb-4">
                              <Link
                                onClick={ClickHandler}
                                className="keyFeatureBlock__heading__link"
                                href="/"
                              >
                                {features.title}
                              </Link>
                            </h3>
                            <p className="text-black mb-[13px]">{features.des}</p>
                          </div>
                          <div
                            className="keyFeatureBlock__skill absolute h-[10px] bottom-[-5px] skill-bar"
                            style={{ width: features.width }}
                          >
                            <span className="bg-[#eb9309] h-[2px] absolute left-0 w-full top-1/2 -translate-y-1/2"></span>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cool fact */}
      <div className="pt-[70px] pb-[95px]">
        <div className="w-full px-3 md:px-4 lg:px-6 mx-auto max-w-[1314px]">
          <div className="grid grid-cols-1">
            <div>
              <div className="text-center mb-[30px]">
                <Fade direction="up" triggerOnce={false} duration={1400}>
                  <div>
                    <h2 className="wow animate__fadeInUp text-4xl sm:text-5xl md:text-5xl lg:text-[5rem] xl:text-[7rem] 2xl:text-[7rem] leading-none uppercase inline-flex items-center mt-[50px] mb-[50px]">
                      <span className="stroke-[4px] stroke-[#eb9309] md:stroke-[2px] mr-4">
                        One
                      </span>
                      <span className="text-[#eb9309]"> Third</span>
                    </h2>
                  </div>
                </Fade>
                <Fade direction="up" triggerOnce={false} duration={1400}>
                  <div>
                    <h3 className="text-center uppercase text-xl md:text-2xl lg:text-[calc(1rem+1vw)] font-medium mb-[50px] leading-relaxed">
                      <span className="block md1:mb-4">of the World&apos;s</span>
                      <span className="block md1:mb-4">most climate-vulnerable nations</span>
                      <span className="block">
                        are in{' '}
                        <span className="text-green-700 font-extrabold ">
                          Eastern & Southern Africa!!
                        </span>
                      </span>
                    </h3>
                  </div>
                  <div>
                    <h3 className="uppercase text-xl md:text-xl lg:text-[calc(1rem+1vw)] font-medium mb-[50px]">
                      <span className="block md1:mb-4">Africa contributes</span>
                      <span className="block md1:mb-4">the least to climate change,</span>{' '}
                      <span className="block md1:mb-4">yet she suffers the most.</span>
                    </h3>
                  </div>
                  <div>
                    <h3 className="uppercase text-xl md:text-2xl lg:text-[calc(1rem+1vw)] font-medium mb-[50px]">
                      Africa deserves{' '}
                      <span className="inline-flex items-end md1:mb-4 text-red-700 font-extrabold ">
                        to be heard.
                        <span className="inline-block ml-2">
                          <img
                            className="w-[82px] h-[82px]"
                            src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/speaker-high-volume-svgrepo-com-uyUVQFLYEZvTeclMpVBRIKRvKtmw5e.svg"
                            alt="africa deserves to be heard"
                          />
                        </span>
                      </span>
                    </h3>
                    <h3 className="uppercase text-xl md:text-2xl lg:text-[calc(1rem+1vw)] font-medium mb-[33px]">
                      <span className="block md1:mb-4"> Kushoto is amplifying voices </span>
                      <span className="block md1:mb-4">from the frontlines</span>
                    </h3>
                  </div>
                  <div>
                    <Button className="uppercase text-xl md:text-2xl p-10">Work With Us</Button>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection

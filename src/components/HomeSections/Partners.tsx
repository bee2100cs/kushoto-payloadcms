import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

export const partnerData = {
  partnerMessage:
    'Our partners are deeply committed to creating lasting, positive change in the world. They are actively involved in impactful initiatives that focus on climate and health justice, working to address inequalities and champion sustainable solutions.',
  partnerIntro: 'Our Key Partners',
  partners: [
    {
      link: '#',
      logo: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-partners/Amref-Logo-yS4RuqKZBtIhOnzMhWQVSXbvo4D7PZ.png',
      alt: 'Amref Africa',
    },
    {
      link: '#',
      logo: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-partners/actionaid-logo--JUW7NNTV3u4lAF2wcDiaqABt7U0zJf.png',
      alt: 'Action Aid',
    },
    {
      link: '#',
      logo: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-partners/NCIC-VT9eDOWHcf9FW16EJyRQVnUxeHVfNW.png',
      alt: 'NCIC',
    },
    {
      link: '#',
      logo: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-partners/PolycomGirls-Logo-qZSotdecXkpPXi07CmjRMr5s3PlKXE.png',
      alt: 'Polycom Girls',
    },
    {
      link: '#',
      logo: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-partners/WTW-IsWa5x2OjnifrM9vqtOXsE0Gwzb200.png',
      alt: 'WTW',
    },
    {
      link: '#',
      logo: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-partners/unfccc-kpB843sHN9EvY4PnZNA8uehxsWWCuh.png',
      alt: 'UNFCCC',
    },
    {
      link: '#',
      logo: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-partners/pen-ybeT4JH6jJvkvON5uVgq2rbynqazxh.png',
      alt: 'PEN',
    },
    {
      link: '#',
      logo: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-partners/convoy%20of%20hope-SwHwWA2YYjJUxwMSvm6swZ1X1yEgt1.png',
      alt: 'Convoy of Hope',
    },
  ],
}

const Partners = () => {
  return (
    <section className="relative block pt-10 px-0 pb-10 z-10">
      <div className="mx-auto max-w-[1320px] px-[15px]">
        <div className="">
          <div className="flex justify-center items-center p-10 xl:p-20">
            <div className="text-center max-w-xl">
              <p className="font-semibold text-2xl">{partnerData.partnerMessage}</p>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 lg:gap-5">
              <div className="inline-block pl-[10px] mb-[9px] bg-gradient-to-r from-[#ff5800] to-[rgba(202,243,51,0)]">
                <p className="font-semibold text-2xl">{partnerData.partnerIntro}</p>
              </div>
              <div className="w-full lg:w-9/12">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 60,
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  {partnerData.partners.map((partner, index) => (
                    <SwiperSlide key={index}>
                      <div className="partner-box">
                        <a
                          href={partner.link}
                          className="block transition-opacity duration-150 ease-out hover:opacity-100"
                        >
                          <img
                            src={partner.logo}
                            alt={partner.alt}
                            loading="lazy"
                            className="w-full opacity-50"
                          />
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners

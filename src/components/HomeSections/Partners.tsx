import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export const partnerData = {
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
      alt: 'PEN International',
    },
    {
      link: '#',
      logo: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-partners/convoy%20of%20hope-SwHwWA2YYjJUxwMSvm6swZ1X1yEgt1.png',
      alt: 'Convoy of Hope',
    },
  ],
}

const Partners = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  )

  return (
    <section className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading text-kushoto-neutralDark sm:text-4xl">
          Our Trusted Partners
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[autoplay.current]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {partnerData.partners.map((partner, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Link
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 flex flex-col justify-center items-center h-full space-y-2 text-center"
                  aria-label={`Visit ${partner.alt}'s website`}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={160}
                    height={80}
                    className="h-16 w-auto object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  />
                  <p className="text-sm font-medium text-kushoto-neutralDark text-center transition-colors opacity-60 group-hover:opacity-100 mt-2">
                    {partner.alt}
                  </p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}

export default Partners

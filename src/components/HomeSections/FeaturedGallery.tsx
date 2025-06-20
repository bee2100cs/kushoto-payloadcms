'use-client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const featuredGalleryItems = [
  {
    id: 'kh-01',
    src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/gallery/homepage/Kushoto%20old%20man%20smilling%20600x480-wzQY6ZKfiJ38jLaJZkbjEyeuYj5AQn.webp',
    alt: 'An elder man from the community smiling warmly',
  },
  {
    id: 'kh-02',
    src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/gallery/homepage/kushoto%20old%20woman%20smilling%20600x480-2R908D05slmhugPDbpXI5klTzOv4h8.webp',
    alt: 'An elder woman from the community with a joyful smile',
  },
  {
    id: 'kh-3',
    src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/gallery/homepage/kushoto%20old%20woman%20traditional%20smilling600x480-0kc7jd2Z6c7Wqd2yA5xMuKELfyaGAh.webp',
    alt: 'An elder woman in traditional attire smiling',
  },
  {
    id: 'kh-4',
    src: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/gallery/homepage/kushoto%20old%20woman%20with%20hijab%20600x480-Lwdl7Y0BkZ073eyzrTW07dwbtOsnri.webp',
    alt: 'An elder woman wearing a hijab with a gentle expression',
  },
]

const FeaturedGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  const openModalWithImage = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  useEffect(() => {
    if (!api) return
    api.scrollTo(selectedImageIndex, true)
  }, [api, selectedImageIndex])

  const handlePrevious = () => api?.scrollPrev()
  const handleNext = () => api?.scrollNext()

  return (
    <>
      <section className="py-16 sm:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading text-kushoto-neutralDark sm:text-4xl">
            Glimpses From Our Gallery
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {featuredGalleryItems.map((item, index) => (
              <div
                key={item.id}
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openModalWithImage(index)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                  <p className="text-white text-sm font-medium">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-kushoto-primary text-kushoto-primary hover:bg-kushoto-primary/10 hover:text-kushoto-primary rounded-full px-8 py-3 text-lg shadow-md transition-transform hover:scale-105"
            >
              <Link href="/gallery">
                Explore Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none">
          <VisuallyHidden>
            <DialogTitle>Image Gallery</DialogTitle>
            <DialogDescription>
              A carousel of featured images. Use the arrow keys or buttons to navigate.
            </DialogDescription>
          </VisuallyHidden>

          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
              startIndex: selectedImageIndex,
            }}
            className="w-full group"
          >
            <CarouselContent>
              {featuredGalleryItems.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="flex items-center justify-center p-1">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={640}
                      className="w-auto h-auto max-h-[85vh] object-contain rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <button
              onClick={handlePrevious}
              aria-label="Previous image"
              className="absolute top-1/2 -translate-y-1/2 left-3 z-10 p-2 rounded-full bg-black/30 text-white transition-all hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute top-1/2 -translate-y-1/2 right-3 z-10 p-2 rounded-full bg-black/30 text-white transition-all hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight size={28} />
            </button>
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default FeaturedGallery

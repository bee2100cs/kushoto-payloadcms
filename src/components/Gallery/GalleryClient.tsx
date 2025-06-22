'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { galleries, galleryCategories as categories } from '@/components/Gallery/galleriesData'
import GalleryCard from './GalleryCard'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'

export interface GalleryImage {
  src: string
  alt: string
}

export interface Gallery {
  id: string
  title: string
  category: string
  coverImage: string
  images: GalleryImage[]
}

const GalleryClient = () => {
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null)

  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="all">All Galleries</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {galleries.map((gallery) => (
              <GalleryCard
                key={gallery.id}
                gallery={gallery}
                onClick={() => setSelectedGallery(gallery)}
              />
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {galleries
                .filter((g) => g.category === category)
                .map((gallery) => (
                  <GalleryCard
                    key={gallery.id}
                    gallery={gallery}
                    onClick={() => setSelectedGallery(gallery)}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Lightbox Dialog for viewing a selected gallery */}
      {selectedGallery && (
        <Dialog open={!!selectedGallery} onOpenChange={() => setSelectedGallery(null)}>
          <DialogContent className="max-w-5xl w-full p-2 bg-transparent border-0 shadow-none">
            <VisuallyHidden>
              <DialogTitle>Image Gallery</DialogTitle>
              <DialogDescription>
                A carousel of gallery images. Use the arrow keys or buttons to navigate.
              </DialogDescription>
            </VisuallyHidden>
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {selectedGallery.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1600} // Provide a base width for high-quality images
                        height={1000} // Provide a base height
                        className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white" />
            </Carousel>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default GalleryClient

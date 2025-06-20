import React from 'react'
import { Quote } from 'lucide-react'

// Shadcn/ui Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Autoplay from 'embla-carousel-autoplay'

const testimonialData = [
  {
    id: 'polycom',
    quote:
      'Kushoto has been an invaluable partner in raising the voices of grass root communities. Their dedication to storytelling and capturing the essence of our work has not only elevated us but also brought much-needed attention to the challenges and triumphs of those we serve.',
    name: 'Jane Anyango',
    title: 'CEO/Founder - Polycom Girls',
    avatar: {
      src: '',
      fallback: 'JA',
    },
  },
  {
    id: 'lucy-and-dan',
    quote:
      'Kushoto exceeded all our expectations! From the very first meeting, they were professional and truly understood our vision. They captured every special moment without being intrusive, and the final photos were absolutely stunning. Thank you for being a part of our love story.',
    name: 'Lucy & Dan',
    title: 'Wedding Client',
    avatar: {
      src: '',
      fallback: 'LD',
    },
  },
  // add more testimonialData here
]

const PartnerTestimonial = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true }),
  )

  return (
    <section className="py-16 sm:py-24 bg-kushoto-neutralLight/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-kushoto-neutralDark sm:text-4xl">
            What Our Partners & Clients Say
          </h2>
          <p className="mt-4 text-lg text-kushoto-neutralDark/70">
            We are proud to collaborate with inspiring individuals and organizations. Here’s what
            they have to say about our work together.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[autoplay.current]}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonialData.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-2">
                  <div className="relative flex flex-col justify-between h-full p-8 bg-white rounded-lg shadow-lg">
                    {/* Decorative Quote Icon in the background */}
                    <Quote className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 text-kushoto-primary/10 pointer-events-none z-0" />

                    <div className="relative z-10 mb-6 text-center">
                      <p className="text-lg italic leading-relaxed text-kushoto-neutralDark/90">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-border">
                      <Avatar className="h-12 w-12">
                        {testimonial.avatar.src && (
                          <AvatarImage src={testimonial.avatar.src} alt={testimonial.name} />
                        )}
                        <AvatarFallback className="bg-kushoto-secondary text-white">
                          {testimonial.avatar.fallback}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold font-heading text-kushoto-primary">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-kushoto-neutralDark/60">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

export default PartnerTestimonial

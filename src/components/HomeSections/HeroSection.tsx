import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section
      className="relative bg-kushoto-neutralDark text-white py-20 md:py-32 rounded-lg shadow-xl overflow-hidden"
      data-theme="light"
    >
      <div className="absolute inset-0 bg-animated-lines animate-rain opacity-50"></div>

      <div className="w-full max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6">
            Empowering <span className="text-kushoto-primary">Communities</span>,
            <br />
            Inspiring <span className="text-kushoto-secondary">Change</span>.
          </h1>
          <p className="text-lg md:text-xl text-kushoto-neutralLight/90 max-w-2xl md:max-w-none mx-auto md:mx-0 mb-10">
            Kushoto champions climate and health justice by amplifying stories that matter, one
            community at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-kushoto-primary hover:bg-kushoto-primaryDark text-white px-8 py-3 text-lg rounded-full shadow-md transition-transform hover:scale-105"
            >
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-kushoto-secondary text-kushoto-secondary hover:bg-kushoto-secondary/10 hover:text-white px-8 py-3 text-lg rounded-full shadow-md transition-transform hover:scale-105 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Right Side: Image with stacked effect */}
        <div
          className="hidden md:flex justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -top-4 -right-4 w-full h-full bg-kushoto-primary rounded-lg transform -rotate-3 transition-transform group-hover:rotate-0"></div>
            <Image
              src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_hero/hero-thumb-Q4g4YpnB2aJ9h3IpPVWeydwhI7tKWC.webp"
              alt="A Kushoto team member working with the community"
              width={400}
              height={500}
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

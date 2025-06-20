import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import FeatureCard from './FeaturedCard' // Assuming you created the separate component

// Define the type for our feature data
type Feature = {
  title: string
  description: string
  icon: string
}

const featuresData: Feature[] = [
  {
    title: 'African Stories',
    description: 'We tell afro-centric stories to give a voice to the voiceless.',
    icon: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/globe-africa-svgrepo-com-EodGAr85vmZ2WMBzK8gmuybdakojw9.svg',
  },
  {
    title: 'Multimedia Tools',
    description: 'Our story mediums range from articles, photos, and videos.',
    icon: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/camera-svgrepo-com-QnKRyK7YY4O50q6eJhhepNpRx66dsU.svg',
  },
  {
    title: 'Passionate Team',
    description: 'We boast a passionate, skilled, and well-informed team.',
    icon: 'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/icon3-l6kahs24wgRWNNU2UH9bWtf7l7Nz5u.svg',
  },
]

// This is now a Server Component! No 'use client' needed.
const FeaturesSection = () => {
  return (
    <div className="relative pt-16 sm:pt-24">
      {/* Background Map Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/map-iIoAusbdZqMdg7NQH1JPX3BgJvTHLj.png"
          alt="Outline of the African continent"
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* --- Part 1: Core Features --- */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold font-heading text-kushoto-neutralDark sm:text-4xl">
            Our Core Strengths
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-kushoto-neutralDark/80">
            We combine authentic storytelling, diverse multimedia expertise, and a deeply committed
            team. This is why partners choose us to bring their stories to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        {/* --- Part 2: Impact Statement --- */}
        <div className="pt-24 pb-16 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-5xl font-extrabold leading-tight text-kushoto-neutralDark sm:text-6xl lg:text-7xl">
              <span className="text-kushoto-primary">One Third</span> of the World&apos;s Most
              Vulnerable
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-kushoto-neutralDark/80 sm:text-2xl">
              nations are in{' '}
              <span className="font-bold text-kushoto-secondary">Eastern & Southern Africa</span>.
              Africa contributes the least to climate change, yet she suffers the most.
            </p>
            <div className="mt-10">
              <h3 className="inline-flex items-center gap-4 text-2xl font-bold uppercase tracking-wider text-kushoto-primary sm:text-3xl">
                <span>Africa Deserves to Be Heard</span>
                <Image
                  src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/speaker-high-volume-svgrepo-com-uyUVQFLYEZvTeclMpVBRIKRvKtmw5e.svg"
                  alt="Loudspeaker icon"
                  width={48}
                  height={48}
                />
              </h3>
              <p className="mt-4 text-xl">Kushoto is amplifying voices from the frontlines.</p>
            </div>
            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-kushoto-primary hover:bg-kushoto-primaryDark text-white px-10 py-3 text-lg"
              >
                <Link href="/get-involved">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection

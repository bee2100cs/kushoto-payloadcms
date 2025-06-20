import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button' // Assumes this path is correct
import { ArrowRight } from 'lucide-react'

const KushotoAbout = () => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image on the left */}
            <div className="animate-fade-in-up">
              <Image
                src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto%20about.-qiSWmttAvezJPNstWGxwx1mAFx87Qh.webp"
                alt="Kushoto team engaging with a local community"
                width={500} // Replace with the actual image width
                height={400} // Replace with the actual image height
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[5/4] transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content on the right */}
            <div
              className="flex flex-col items-start animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-sm font-bold text-kushoto-primary uppercase tracking-wider mb-2">
                About Kushoto
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-kushoto-neutralDark">
                We tell impactful stories
              </h2>
              <div className="space-y-4 text-lg text-kushoto-neutralDark/80 mb-6">
                <p>
                  Kushoto is a women-founded grassroots organization dedicated to amplifying the
                  voices of communities in Africa impacted by climate change. We empower rural
                  populations through storytelling, creativity, and actionable insights, aiming to
                  drive conversations around climate and health justice.
                </p>
                <p>
                  We utilize a range of media, including videos, photos, blogs, and infographics, to
                  inspire, educate, and mobilize local communities.
                </p>
              </div>
              <p className="mb-8 font-semibold text-kushoto-secondary text-lg">
                Sound interesting? Learn everything about Kushoto by clicking below.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-kushoto-primary hover:bg-kushoto-primaryDark text-white rounded-full transition-transform hover:scale-105 shadow-lg px-8 py-3"
              >
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default KushotoAbout

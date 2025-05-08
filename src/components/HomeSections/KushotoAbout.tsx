import React from 'react'
import { Button } from '../ui/button'
import FeaturesSection from './FeaturesSection'

const KushotoAbout = () => {
  return (
    <section className="relative">
      <div className="pt-[79px] pb-10 relative">
        <img
          className="mask-underlay absolute top-[66%] -z-10 hidden md1:block xl1:left-[-10%] xl2:left-[-11px] md1:left-[-30%] animate__animated animate__fadeInLeft"
          data-wow-duration="1200ms"
          data-wow-delay="300ms"
          src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/mask-shape3-ljFUDiUjsmSyDrmaozplKvi4AKcwkq.svg"
          alt="   kushoto mask Shape"
        />
        <div
          className="mask absolute top-0 z-[-1] xl2:left-[-11px] xl1:left-[-10%] md1:left-[-30%] p-px hidden md1:block animate__animated animate__fadeInLeft"
          data-wow-duration="1200ms"
          data-wow-delay="200ms"
        >
          <img
            src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/kushoto-about.webp"
            alt="Kushoto"
            className="relative"
          />
          <img
            className="absolute left-[2px] top-[-1px]"
            src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto_about/mask-shape2-S9IRXDGIt0SnKkXw3vec2ptMZrwEDs.svg"
            alt="Kushoto overlay"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex justify-end">
            <div className="w-full md1:w-1/2 mb-8">
              <div>
                <div className="mb-5">
                  <span className="text-[#eb9309] uppercase tracking-wider font-semibold text-sm flex items-center gap-1.5 mb-4">
                    <i className="fa-solid fa-heart animate-pulse"></i>
                    about Kushoto
                  </span>
                  <h2 className="text-3xl uppercase leading-tight font-bold">
                    We tell impactful stories
                  </h2>
                </div>
                <p className="text-xl mb-6 pr-16 max-md:pr-0">
                  Kushoto is a youth-founded grassroots organization dedicated to amplifying the
                  voices of communities in Africa impacted by climate change. We empower rural
                  populations through storytelling, creativity, and actionable insights, aiming to
                  drive conversations around climate and gender justice.
                </p>
                <p className="text-xl mb-6 pr-16 max-md:pr-0">
                  Our platform features a range of media, including videos, photos, blogs, and
                  infographics, to inspire, educate, and mobilize local communities. Additionally,
                  our initiatives—such as &quot;Adopt a Library&quot; and &quot;A Million Fruit
                  Trees&quot;—focus on enhancing education and promoting climate adaptation for
                  children.
                </p>
                <span className="block text-xl font-medium mb-[46px]">
                  Sound interesting? Learn everything about Kushoto by clicking me
                </span>
                <Button>Click Me</Button>
                {/* add a learn more button leading to about page */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </section>
  )
}

export default KushotoAbout

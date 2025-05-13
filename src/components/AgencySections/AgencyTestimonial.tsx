import React from 'react'
import { testimonialData } from '../HomeSections/PartnerTestimonial'
import { Quote } from 'lucide-react'

const AgencyTestimonial = () => {
  return (
    <section className="relative block pt-10 px-0 pb-10 z-10">
      <div className="mx-auto max-w-[1320px] px-[15px]">
        <div className="-full lg:w-10/12 lg:ml-auto lg:mr-auto">
          <div className="px-[15px] md:px-[80px]">
            <div>
              {testimonialData.lucyAndDan.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center items-center text-5xl font-light mb-2">
                    <Quote className="w-10 h-10" style={{ color: '#4a4a4a' }}></Quote>
                  </div>
                  <p className="text-2xl font-semibold italic">{testimonial.text}</p>
                  <h4 className="mt-4 font-semibold text-xl">{testimonial.name}</h4>
                  <span>{testimonial.position}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgencyTestimonial

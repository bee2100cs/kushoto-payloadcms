import React from 'react'
import { Quote } from 'lucide-react'

export const testimonialData = {
  polycom: [
    {
      text: 'Kushoto has been an invaluable partner in raising \
      the voices of grass root communities, particularly for women and girls in Kenya. \
      Their dedication to storytelling and capturing the essence of our work has \
      not only elevated us but also brought much-needed attention to the challenges\
      and triumphs of those we serve. The quality and depth of their ork reflect their deep \
      understanding of grass root issues, and we are proud to be associated with such a passionate and professional team',
      name: 'Jane Anyango',
      position: 'CEO/Founder - Polycom Girls',
    },
  ],
}

const PartnerTestimonial = () => {
  return (
    <section className="relative block pt-10 px-0 pb-10 z-10">
      <div className="mx-auto max-w-[1320px] px-[15px]">
        <div className="-full lg:w-10/12 lg:ml-auto lg:mr-auto">
          <div className="px-[15px] md:px-[80px]">
            <div>
              {testimonialData.polycom.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center items-center text-5xl font-light mb-2">
                    <Quote className="w-10 h-10" style={{ color: '#4a4a4a' }}></Quote>
                  </div>
                  <p className="text-2xl font-semibold italic text-green-500">{testimonial.text}</p>
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

export default PartnerTestimonial

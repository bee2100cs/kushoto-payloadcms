import React from 'react'

const LeftToRight = () => {
  return (
    <div className="flex flex-wrap -mx-[15px] pb-10">
      <div className="w-full xl:w-7/12 p-4">
        <div
          className="relative border-l border-solid"
          style={{ borderColor: 'var(--thm-border-color)' }}
        >
          <div className="lg:pl-[30px] pl-[5px] xl:pl-[81px] ml-[0px] xl:ml-[110px]">
            {/* Title */}
            <div className="relative pb-[58px]">
              <div className="inline-block pl-[10px] mb-[9px] bg-gradient-to-r from-[#ff5800] to-[rgba(202,243,51,0)]">
                <h4 className="text-[20px] leading-[35px] text-[var(--thm-black)] font-[var(--thm-body-font)] sm:text-[17px]">
                  Project Highlight
                </h4>
              </div>
              <h2
                className="text-3xl leading-[1.2] text-[var(--thm-black)] font-[var(--thm-heading-font)] 
               xl:text-[43px] sm:text-[30px]"
              >
                The Weight Of Our Water
              </h2>
            </div>
            {/* 📱 Mobile Image (only shows on small screens) */}
            <div className="block xl:hidden mb-[30px] w-full">
              <div className="relative overflow-hidden xl:rounded-[145px] rounded-[0px] border-4 border-[#ff5800]">
                <img
                  src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-projects/weight-of-our-water-9NWOjVEIa8LFqVix1k4GClga1tEB9H.webp"
                  alt="weight of our water"
                />
              </div>
            </div>
            {/* Content */}
            <div className="relative">
              <div className="relative">
                <p className="text-[18px] leading-[34px] font-medium">
                  As part of the{' '}
                  <a
                    href="https://naturefootprints.org/weight-water"
                    className="text-[#ff5800] underline"
                  >
                    Nature Footprints Storybook project for COP28,
                  </a>{' '}
                  we created &quot;The Weight of Our Water,&quot; a poignant photo essay exploring
                  communities&apos; relationship with their dwindling water resources across
                  Murang’a, Kirinyaga, and Tharaka Nithi counties, Kenya. Each image reveals stories
                  of resilience, highlighting the sacrifices made by children, the determination of
                  young adults working as water couriers, and the wisdom of elders guiding their
                  communities. The ever-present jerrican serves as a powerful symbol of both burden
                  and shared responsibility in navigating this vital resource. <br />
                  <a
                    href="https://naturefootprints.org/weight-water"
                    className="text-[#ff5800] underline"
                  >
                    View Storybook
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-full xl:w-5/12 p-4 hidden xl:block">
        <div className="relative max-w-[480px] w-full mx-auto xl:mx-0">
          <ul className="relative flex justify-end items-end -mx-[10px]">
            <li
              className="relative px-[10px] animate-fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1200ms"
            >
              <div className="relative overflow-hidden xl:rounded-[145px] rounded-[0px] mb-[30px] border-4 border-[#ff5800]">
                <img
                  src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-projects/weight-of-our-water-9NWOjVEIa8LFqVix1k4GClga1tEB9H.webp"
                  alt="lake baring rising levels"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LeftToRight

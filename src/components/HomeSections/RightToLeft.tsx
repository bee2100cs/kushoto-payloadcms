import React from 'react'

const RightToLeft = () => {
  return (
    <div className="flex flex-wrap -mx-[15px] pt-10">
      <div className="w-full xl:w-5/12 p-4 hidden xl:block">
        <div className="relative max-w-[480px] w-full mx-auto xl:mx-0">
          <ul className="relative flex items-end -mx-[10px]">
            <li
              className="relative px-[10px] animate-fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1200ms"
            >
              <div className="relative overflow-hidden xl:rounded-[145px] rounded-[0px] mb-[30px] border-4 border-[#ff5800]">
                <img
                  src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-projects/baringo-lake-6JqW7t0JpM92hYuk0eHkOM95gGNid2.webp"
                  alt="lake baring rising levels"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full xl:w-7/12 p-4">
        <div className="relative border-r" style={{ borderColor: 'var(--thm-border-color)' }}>
          <div className="pr-[30px] xr:pl-[81px] mr-[0px] xl:mr-[110px]">
            {/* Title */}
            <div className="relative pb-[58px]">
              <div className="inline-block pl-[10px] mb-[9px] bg-gradient-to-r from-[#ff5800] to-[rgba(202,243,51,0)]">
                <h4 className="text-[20px] leading-[35px] font-medium text-[var(--thm-black)] font-[var(--thm-body-font)] sm:text-[17px]">
                  Project Highlight
                </h4>
              </div>
              <h2
                className="text-3xl leading-[1.2] font-bold text-[var(--thm-black)] font-[var(--thm-heading-font)] 
               xl:text-[43px] sm:text-[30px]"
              >
                Loss and Damage in Focus
              </h2>
            </div>
            {/* 📱 Mobile Image (only shows on small screens) */}
            <div className="block xl:hidden mb-[30px] w-full">
              <div className="relative overflow-hidden xl:rounded-[145px] rounded-[0px] border-4 border-[#ff5800]">
                <img
                  src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-projects/baringo-lake-6JqW7t0JpM92hYuk0eHkOM95gGNid2.webp"
                  alt="lake baring rising levels"
                />
              </div>
            </div>
            {/* Content */}
            <div className="relative">
              <div className="relative">
                <p className="text-[18px] leading-[34px] font-medium">
                  In recognition of the 10th Anniversary of the Warsaw International Mechanism for
                  Loss and Damage associated with Climate Change,{' '}
                  <a
                    href="https://unfccc.int/L-and-D-in-focus/photo-gallery"
                    className="text-[#ff5800] underline"
                  >
                    we proudly contributed to the Loss and Damage in Focus gallery.
                  </a>{' '}
                  This issue highlights the devastating impacts of rising water levels in Lake
                  Baringo, which have displaced communities, disrupted transportation to Tangulbei,
                  and overtaken local schools in Baringo County, Kenya. <br />
                  <a
                    href="https://unfccc.int/L-and-D-in-focus/photo-gallery"
                    className="text-[#ff5800] underline"
                  >
                    View Gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightToLeft

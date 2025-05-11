import React from 'react'

const FeaturedPosts = () => {
  return (
    <section className="relative block pt-10 px-0 pb-10 z-10">
      <div className="mx-auto max-w-[1320px]">
        {/* Title */}
        <div className="relative">
          <div className="inline-block pl-[10px] mb-[9px] bg-gradient-to-r from-[#ff5800] to-[rgba(202,243,51,0)]">
            <p className="text-2xl leading-[35px] font-semibold text-[var(--thm-black)] sm:text-[17px]">
              Featured Posts
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts

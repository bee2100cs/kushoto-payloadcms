import React from 'react'
import LeftToRight from './LeftToRight'
import RightToLeft from './RightToLeft'

const ProjectHighlights = () => {
  return (
    <section className="relative block pt-[140px] px-0 pb-[110px] z-10">
      <div className="mx-auto max-w-[1320px] px-[15px]">
        <LeftToRight />
        <RightToLeft />
      </div>
    </section>
  )
}

export default ProjectHighlights

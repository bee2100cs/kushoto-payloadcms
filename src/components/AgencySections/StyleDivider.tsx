import React from 'react'

const StyledDivider = () => {
  return (
    <hr
      className="relative mx-auto max-w-[1320px] h-2 border-0 m-0 overflow-hidden"
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, #ff5800 0, #ff5800 1px, transparent 0, transparent 5px)',
        backgroundSize: '5px 5px',
        opacity: 0.5,
      }}
    />
  )
}

export default StyledDivider

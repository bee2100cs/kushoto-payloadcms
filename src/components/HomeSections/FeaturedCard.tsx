import Image from 'next/image'
import React from 'react'

type FeatureCardProps = {
  icon: string
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="flex items-center justify-center w-20 h-20 mb-5 bg-kushoto-neutralLight rounded-full ring-4 ring-kushoto-primary/20">
        <Image src={icon} alt={`${title} icon`} width={48} height={48} />
      </div>
      <h3 className="mb-2 text-xl font-bold font-heading text-kushoto-neutralDark">{title}</h3>
      <p className="text-kushoto-neutralDark/80">{description}</p>
    </div>
  )
}

export default FeatureCard

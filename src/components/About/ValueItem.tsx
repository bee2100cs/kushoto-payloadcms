import React from 'react'

interface ValueItemProps {
  icon: React.ElementType
  title: string
  description: string
}

const ValueItem: React.FC<ValueItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-4 space-y-3">
    <div className="bg-kushoto-primary/10 p-4 rounded-full">
      <Icon className="h-8 w-8 text-kushoto-primary" />
    </div>
    <h3 className="text-xl font-semibold text-kushoto-neutralDark">{title}</h3>
    <p className="text-kushoto-neutralDark/80">{description}</p>
  </div>
)

export default ValueItem

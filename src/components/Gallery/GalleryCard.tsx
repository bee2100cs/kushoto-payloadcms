import React from 'react'
import type { Gallery } from './GalleryClient'

interface GalleryCardProps {
  gallery: Gallery
  onClick: () => void
}

const GalleryCard: React.FC<GalleryCardProps> = ({ gallery, onClick }) => {
  return (
    <div
      className="aspect-square bg-kushoto-muted rounded-lg overflow-hidden cursor-pointer group relative"
      onClick={onClick}
    >
      <img
        src={gallery.coverImage}
        alt={gallery.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2">
        <h3 className="text-white text-lg font-bold text-center">{gallery.title}</h3>
        <p className="text-kushoto-accent text-sm">{gallery.category}</p>
      </div>
    </div>
  )
}

export default GalleryCard

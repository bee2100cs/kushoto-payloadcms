'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useState } from 'react'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motion } from 'framer-motion'

// Function to extract YouTube Video ID from URL
const getYouTubeVideoID = (url: string) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/embed\/|.*\/v\/|.*\/watch\?.*v=))([^&?]+)/,
  )
  return match ? match[1] : null
}

export const KushotoHero: React.FC<Page['hero']> = ({ links, media, youtubeURL, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  const videoID = youtubeURL ? getYouTubeVideoID(youtubeURL) : null
  const embedURL = videoID ? `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0` : null

  return (
    <div className="relative -mt-10 flex items-center justify-center text-white " data-theme="dark">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 min-h-[80vh]">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="object-cover" priority resource={media} />
        )}

        {/* Gradient Blur Overlay (Left to Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="container z-10 relative flex flex-col md:flex-row items-center justify-center md:justify-between w-full px-6 min-h-[80vh]">
        {/* Left Side: Text & Links */}
        <div className="w-full md:w-3/4 max-w-lg flex flex-col justify-center items-center md:items-start text-center md:text-left h-[50vh] flex-grow">
          {richText && (
            <RichText
              className="mb-6 leading-tight text-left"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4 justify-center md:justify-start">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Side: Floating Video Button */}
        <div className="w-full md:w-1/4 relative flex items-end justify-center md:min-h-[80vh]">
          {youtubeURL && (
            <motion.button
              className="absolute md:bottom-10 md:right-5 bottom-5 left-1/2 transform -translate-x-1/2 
                bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg flex items-center justify-center"
              onClick={() => setIsVideoOpen(true)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span
                className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 
                bg-red-500 text-white rounded-full"
              >
                ▶
                <motion.span
                  className="absolute inset-0 rounded-full bg-red-500 opacity-50"
                  animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Video Modal (Popup Window) */}
      {isVideoOpen && embedURL && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setIsVideoOpen(false)}
          >
            ✕
          </button>
          {/* YouTube Video Embed */}
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={embedURL}
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

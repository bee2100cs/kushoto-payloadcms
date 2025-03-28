import React from 'react'

export type YoutubeBlockProps = {
  url: string
  blockType: 'YoutubeVideo'
  className?: string
}

// Function to extract youtube video ID from various URL formats
const extractYoutubeID = (url: string) => {
  const regex =
    ///(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/embed\/)([^"&?/ ]{11})/
    /(?:youtube\.com\/(?:.*[?&]v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

export const YoutubeBlock: React.FC<YoutubeBlockProps> = ({ className, url }) => {
  if (!url) return null

  // Extract Youtube Video ID
  const videoId = extractYoutubeID(url)

  if (!videoId) return <p className="text-red-500">Invalid Youtube URL</p>

  return (
    <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg border border-border"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

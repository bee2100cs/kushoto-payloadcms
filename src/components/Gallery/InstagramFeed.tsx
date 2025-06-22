import React from 'react'
import { Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

const InstagramFeed: React.FC = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold font-heading mb-2 text-kushoto-primary">
        Follow Us on Instagram
      </h2>
      <Button
        asChild
        variant="ghost"
        className="text-lg text-kushoto-secondary hover:text-kushoto-secondary/90 mb-8"
      >
        <a href="https://www.instagram.com/kushotoorg/" target="_blank" rel="noopener noreferrer">
          <Instagram className="mr-2 h-5 w-5" />
          @kushotoorg
        </a>
      </Button>
    </section>
  )
}

export default InstagramFeed

export const dynamic = 'force-static'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import GalleryClient from '@/components/Gallery/GalleryClient'
import InstagramFeed from '@/components/Gallery/InstagramFeed'

const GalleryPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="animate-fade-in-up space-y-12 py-8 md:py-16">
        {/* Static content rendered on the server for fast load and SEO */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-kushoto-primary">
            Our Gallery
          </h1>
          <p className="text-xl text-kushoto-neutralDark/80 max-w-3xl mx-auto">
            A visual journey through our diverse projects and moments.
          </p>
        </section>

        <section className="text-center bg-kushoto-neutralLight/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold font-heading mb-4 text-kushoto-primary">
            Shop Our Art
          </h2>
          <p className="text-lg text-kushoto-neutralDark/80 max-w-2xl mx-auto mb-6">
            Love what you see? Many of our stunning photographs are available for purchase as
            high-quality prints or digital downloads. Support our mission by bringing a piece of our
            work into your home or project.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-kushoto-secondary hover:bg-kushoto-secondary/90 text-white"
          >
            <Link href="/store">Visit the Store</Link>
          </Button>
        </section>

        {/* The interactive part of the page is rendered by this Client Component */}
        <GalleryClient />

        {/* More static content rendered on the server */}
        <InstagramFeed />

        <p className="text-center text-lg text-kushoto-neutralDark/70">
          More photos and videos will be added soon. Follow us on social media for live updates!
        </p>
      </div>
    </div>
  )
}

export default GalleryPage

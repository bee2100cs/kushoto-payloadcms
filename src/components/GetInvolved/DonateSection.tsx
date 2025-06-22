'use client' // Add this directive because it uses an onClick handler

import Link from 'next/link' // Import Next.js Link
import { Button } from '@/components/ui/button'
import { Heart, Store } from 'lucide-react'

const DonateSection = () => {
  return (
    <section id="donate" className="pt-12 text-center">
      <h2 className="text-3xl font-semibold font-heading mb-8 text-kushoto-secondary">
        Support Our Mission
      </h2>
      <div className="max-w-xl mx-auto bg-kushoto-accent/20 p-8 rounded-lg shadow-xl">
        <div className="pb-8">
          <Heart size={48} className="text-kushoto-primary mx-auto mb-6" />
          <h3 className="text-2xl font-semibold font-heading mb-4 text-kushoto-neutralDark">
            Donate Directly
          </h3>
          <p className="text-kushoto-neutralDark/80 mb-6">
            Your generous donation enables us to continue our programs and expand our reach. Every
            contribution helps build a stronger community.
          </p>
          <Button
            size="lg"
            className="bg-kushoto-primary hover:bg-kushoto-primaryDark text-white text-lg px-10 py-3 rounded-full shadow-lg transition-transform hover:scale-105" // Adjusted padding for consistency
            onClick={() => alert('Redirecting to donation platform... (Placeholder Action)')}
          >
            Make a Donation
          </Button>
          <p className="text-sm text-kushoto-muted mt-4">
            (You will be redirected to our secure payment partner)
          </p>
        </div>

        <div className="border-t border-kushoto-primary/20 pt-8 space-y-4">
          <Store size={48} className="text-kushoto-primary mx-auto mb-6" />
          <h3 className="text-2xl font-semibold font-heading text-kushoto-neutralDark">
            Shop To Support
          </h3>
          <p className="text-kushoto-neutralDark/80 max-w-md mx-auto">
            Another way to contribute is by purchasing our beautiful prints. Every sale directly
            funds our conservation efforts.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-kushoto-primary text-kushoto-primary hover:bg-kushoto-primary/10 hover:text-kushoto-primary rounded-full shadow-lg transition-transform hover:scale-105"
          >
            {/* Use Next.js Link with 'href' prop */}
            <Link href="/store">
              <Store className="mr-2 h-5 w-5" />
              Browse Our Store
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DonateSection

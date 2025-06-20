import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Library, TreePine } from 'lucide-react'

const DonateCta = () => {
  return (
    <section className="py-16 sm:py-24 bg-kushoto-secondary text-kushoto-neutralLight rounded-lg shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4 sm:text-4xl">Support Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          Your contribution helps us continue our vital work in community empowerment, climate
          action, and education. By supporting us, you&apos;re helping to fund impactful
          initiatives, including our flagship CSR programs.
        </p>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold font-heading mb-6 text-kushoto-accent">
            Our Flagship CSR Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-kushoto-secondary/50 p-6 rounded-lg flex items-start gap-4 ring-1 ring-kushoto-accent/20 transition-transform hover:scale-105">
              <Library className="h-8 w-8 text-kushoto-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-2">Adopt a Library</h4>
                <p className="text-kushoto-neutralLight/90">
                  Help us establish and stock community libraries, providing access to knowledge and
                  fostering a culture of reading for all ages.
                </p>
              </div>
            </div>
            <div className="bg-kushoto-secondary/50 p-6 rounded-lg flex items-start gap-4 ring-1 ring-kushoto-accent/20 transition-transform hover:scale-105">
              <TreePine className="h-8 w-8 text-kushoto-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl mb-2">Plant a Million Fruit Trees</h4>
                <p className="text-kushoto-neutralLight/90">
                  Join our ambitious goal to enhance food security and combat climate change by
                  planting fruit trees in communities across the region.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-kushoto-accent hover:bg-yellow-500 text-kushoto-neutralDark px-10 py-3 text-lg rounded-full shadow-md transition-transform hover:scale-105"
          >
            <Link href="/get-involved#donate">Donate Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-kushoto-neutralLight border-kushoto-neutralLight/50 bg-kushoto-neutralLight text-kushoto-secondary px-10 py-3 text-lg rounded-full shadow-md transition-transform hover:scale-105"
          >
            <Link href="/csr">Explore CSR Partnerships</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DonateCta

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const ClimateActionCta = () => {
  return (
    <section className="py-20 bg-kushoto-neutralDark text-white rounded-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold font-heading leading-tight mb-8">
          <span className="block">One Third of the World&apos;s</span>
          <span className="block text-kushoto-primary my-2">most climate-vulnerable nations</span>
          <span className="block">are in Eastern & Southern Africa.</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-kushoto-neutralLight/90 mb-4">
            Africa contributes the least to climate change, yet it suffers the most. Africa deserves
            to be heard.
          </p>
          <p className="text-xl font-semibold text-white mb-8">
            Kushoto is amplifying voices from the frontlines.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-kushoto-accent hover:bg-yellow-500 text-kushoto-neutralDark px-10 py-4 text-xl rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <Link href="/get-involved">Work With Us</Link>
        </Button>
      </div>
    </section>
  )
}

export default ClimateActionCta

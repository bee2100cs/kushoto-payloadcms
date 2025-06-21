import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { callToActionData } from './Data'

// Destructure data for cleaner access
const { backgroundImage, title, button } = callToActionData

const AgencyCallToAction = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className="relative bg-cover bg-center lg:bg-fixed rounded-2xl shadow-2xl overflow-hidden"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Content */}
          <div className="relative z-10 px-6 py-16 md:p-20">
            <div className="flex w-full flex-col lg:flex-row gap-8 items-center justify-between">
              {/* Left Side: Title */}
              <div className="w-full lg:w-auto text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white uppercase font-heading stroke-text-white">
                  {title}
                </h2>
              </div>

              {/* Right Side: Button */}
              <div className="w-full lg:w-auto text-center lg:text-right">
                <Button
                  asChild
                  size="lg"
                  className="
                    bg-gradient-to-r from-kushoto-primary to-pink-500 text-white font-bold
                    px-8 py-4 text-lg rounded-full shadow-lg
                    transition-transform duration-300 hover:scale-105
                  "
                >
                  <Link href={button.link}>{button.text}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgencyCallToAction

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AgencyData } from './Data'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-8 md:py-12">
      {/* Left side: Text content */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold font-heading text-kushoto-neutralDark">
          Your Vision, Captured.
          <br />
          <span className="text-kushoto-primary">Your Story, Amplified.</span>
        </h1>
        <p className="text-lg md:text-xl text-kushoto-neutralDark/80">{AgencyData.description}</p>
        <Button
          asChild
          size="lg"
          className="bg-kushoto-secondary hover:bg-kushoto-secondary/90 text-white mt-4"
        >
          <Link href="/landing">Work with us</Link>
        </Button>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src={AgencyData.image1.src}
          alt="Kushoto Wedding photography"
          width={600}
          height={450}
          priority
          className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[400px]"
        />
      </div>
    </section>
  )
}

export default HeroSection

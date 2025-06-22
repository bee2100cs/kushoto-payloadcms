import Image from 'next/image' // <-- Import Next.js Image component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, ShieldCheck, Handshake, Lightbulb, Leaf } from 'lucide-react'
import ValueItem from '@/components/About/ValueItem'

export const dynamic = 'force-dynamic'
export const revalidate = 600

const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: 'Community-Centric',
      description: 'We prioritize the needs and voices of the communities we serve.',
    },
    {
      icon: ShieldCheck,
      title: 'Integrity & Transparency',
      description: 'We operate with the highest ethical standards and openness.',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We believe in the power of working together to achieve common goals.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Adaptability',
      description: 'We embrace creative solutions and respond to evolving challenges.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We aim for long-term impact by building capacity and self-reliance.',
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="animate-fade-in-up space-y-12 py-8 md:py-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-kushoto-primary">
            About Kushoto
          </h1>
          <p className="text-xl text-kushoto-neutralDark/80 max-w-3xl mx-auto">
            Discover our story, mission, vision, and the values that drive our commitment to
            community empowerment.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold font-heading text-kushoto-secondary">
              Our Story
            </h2>
            <p className="text-lg text-kushoto-neutralDark/90 leading-relaxed">
              Founded with a passion for grassroots change, Kushoto.org started as a small
              initiative to connect local volunteers with community needs. Today, we've grown into a
              network of dedicated individuals working together to build a more equitable and
              sustainable future from the ground up.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/kushoto%20old%20man-6gJvF4MHEIKsHeg5toQH1aomHEf1BX.webp"
              alt="A group of people collaborating around a table"
              width={800}
              height={534}
              className="rounded-lg shadow-md object-cover w-full h-full max-h-80"
            />
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-kushoto-secondary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-lg text-kushoto-neutralDark/90 leading-relaxed">
                To foster sustainable development and empowerment within grassroots communities. We
                strive to create lasting positive change by implementing innovative programs,
                promoting education, and ensuring access to essential resources through
                collaborative, community-led solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-kushoto-secondary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-lg text-kushoto-neutralDark/90 leading-relaxed">
                We envision a world where every community is empowered, resilient, and thriving. A
                world where individuals have the opportunities and resources to reach their full
                potential, contributing to a just, equitable, and sustainable society for all.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-kushoto-secondary text-center text-3xl">
              Our Core Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {values.map((value) => (
                <ValueItem
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AboutPage

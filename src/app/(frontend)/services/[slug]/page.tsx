import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { services } from '@/components/AgencySections/Data'
import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, MessageSquare } from 'lucide-react'

type Props = {
  params: Promise<{
    slug: string
  }>
}

const ServiceDetailPage = async ({ params: paramsPromise }: Props) => {
  const { slug } = await paramsPromise

  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  //   // Placeholder for portfolio items related to this service
  //   const portfolioItems = [
  //     {
  //       id: 1,
  //       title: `Related Project for ${service.title}`,
  //       imageUrl:
  //         'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/KushotoAgency_img1-PtQcdrzYilrzqinkB3in4lX9WWyVXb.webp',
  //     },
  //     {
  //       id: 2,
  //       title: `Case Study for ${service.title}`,
  //       imageUrl:
  //         'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-services/services-image2-J06MwoCH8ZlKEImee7RgLgvPG6igmb.webp',
  //     },
  //   ]

  return (
    <div className="animate-fade-in-up space-y-16 md:space-y-24 py-12 container mx-auto px-4">
      {/* Back to Services Button */}
      <section>
        <Button
          asChild
          variant="outline"
          className="border-kushoto-secondary text-kushoto-secondary hover:bg-kushoto-secondary/10 hover:text-kushoto-secondary"
        >
          <Link href="/services">← Back to All Services</Link>
        </Button>
      </section>

      {/* Service Header */}
      <section className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 pb-12 border-b border-border">
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-kushoto-primary">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">{service.description}</p>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <Image
            src={service.imageUrl}
            alt={service.title}
            width={600}
            height={400}
            priority // Load this image first
            className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[300px]"
          />
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading text-kushoto-secondary text-center">
          About This Service
        </h2>
        <p className="text-foreground/80 leading-relaxed text-lg">
          {service.fullExplanation ||
            'More details about this service are coming soon. We are working on providing comprehensive information to help you understand how we can assist you better.'}
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="space-y-6 bg-kushoto-neutral-light p-8 md:p-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold font-heading text-kushoto-secondary">
          Why Partner with Kushoto for {service.title}?
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          {service.whyWorkWithUs ||
            "Kushoto is dedicated to delivering impactful and high-quality services. Our team's expertise, community-focused approach, and commitment to excellence make us a trusted partner. We'll add more specific reasons here soon!"}
        </p>
        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="bg-kushoto-primary hover:bg-kushoto-primary/90 text-white shadow-md"
          >
            <Link href="/get-involved#contact">
              Contact Us for a Consultation
              <MessageSquare size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Related Portfolio Entries */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold font-heading text-kushoto-secondary text-center">
          Our Impact: Related Projects
        </h2>
        {/* {portfolioItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold mb-2 text-kushoto-primary">
                    {item.title}
                  </CardTitle>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 text-kushoto-secondary hover:text-kushoto-secondary/80"
                  >
                    <Link href="#">
                      View Project <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-foreground/70 text-center">
            We are currently updating our portfolio for {service.title}. Please check back soon to
            see examples of our work in this area.
          </p>
        )} */}
        <div className="pt-6 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-kushoto-secondary text-kushoto-secondary hover:bg-kushoto-secondary/10 hover:text-kushoto-secondary"
          >
            <Link href="/portfolio">
              Explore Our Full Portfolio
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export interface Service {
  slug: string
  title: string
  description: string
  learnMoreLink: string
  imageUrl: string
  fullExplanation: string
  whyWorkWithUs: string
}

interface ServiceListProps {
  services: Service[]
}

const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Card
          key={service.slug}
          className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <CardHeader className="p-0 relative">
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="p-6 flex-grow">
            <CardTitle className="text-2xl font-semibold font-heading mb-3 text-kushoto-secondary">
              {service.title}
            </CardTitle>
            <p className="text-kushoto-neutralDark/70 text-sm">{service.description}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0 mt-auto">
            <Button
              asChild
              variant="link"
              className="p-0 text-kushoto-primary hover:text-kushoto-primaryDark font-semibold"
            >
              <Link href={service.learnMoreLink}>Learn More →</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}

export default ServiceList

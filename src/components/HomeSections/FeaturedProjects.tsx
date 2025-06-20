import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/utilities/ui'

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 'weight-of-water',
      title: 'The Weight Of Our Water',
      description:
        'A poignant photo essay for the Nature Footprints Storybook, exploring the relationship between Kenyan communities and their dwindling water resources, highlighting stories of resilience and shared responsibility.',
      imageUrl:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/weight-of-our-water.-BuM4cwhzuPGGUudTK70kVwsifFzHBx.webp',
      category: 'Photojournalism & Advocacy',
      link: 'https://naturefootprints.org/weight-water',
    },
    {
      id: 'loss-and-damage',
      title: 'Loss and Damage in Focus',
      description:
        "Our contribution to the UNFCCC's gallery, this work documents the devastating impacts of rising water levels in Lake Baringo, which have displaced communities and overtaken local schools.",
      imageUrl:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/loss%20and%20damage%20in%20focus-dFVUdXA0lDFJZuzSw1bAyKCfTeIudN.webp',
      category: 'Climate Impact Reporting',
      link: 'https://unfccc.int/L-and-D-in-focus/photo-gallery',
    },
  ]

  return (
    <section className="py-16 bg-kushoto-neutralLight/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading text-kushoto-neutralDark">
          Featured Projects
        </h2>
        <div className="space-y-12 md:space-y-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'group flex flex-col md:flex-row items-stretch gap-0 overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
                index % 2 === 0 ? 'md:flex-row-reverse' : '',
              )}
            >
              <div className="md:w-1/2 flex-shrink-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center space-y-4 p-6 md:p-10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider bg-kushoto-secondary text-white px-3 py-1 rounded-full mb-3 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-kushoto-primary group-hover:text-kushoto-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-kushoto-neutralDark/80 leading-relaxed text-base">
                  {project.description}
                </p>
                <div className="pt-2">
                  <Button
                    asChild
                    variant="link"
                    className="text-kushoto-primary p-0 hover:text-kushoto-primaryDark font-semibold"
                  >
                    <Link href={project.link}>
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-kushoto-secondary text-kushoto-secondary hover:bg-kushoto-secondary/10 hover:text-kushoto-secondary rounded-full px-8 py-3 text-lg shadow-md transition-transform hover:scale-105"
          >
            <Link href="/portfolio">
              Explore All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

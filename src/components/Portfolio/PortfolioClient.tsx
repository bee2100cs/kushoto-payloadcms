'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const projects = [
  {
    id: 'climate01',
    slug: '#',
    title: 'Loss ANd Damage In Focus',
    category: 'Climate',
    image:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/loss%20and%20damage%20in%20focus-dFVUdXA0lDFJZuzSw1bAyKCfTeIudN.webp',
  },
  {
    id: 'climate02',
    slug: '#',
    title: 'The Weight Of Our Water',
    category: 'Climate',
    image:
      'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/weight-of-our-water.-BuM4cwhzuPGGUudTK70kVwsifFzHBx.webp',
  },
]
const categories = [...new Set(projects.map((p) => p.category))]

// This component is now just a regular component, not a page
const PortfolioClient = () => {
  const renderProjectGrid = (projectList: typeof projects) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
      {projectList.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
          <Link href={`/portfolio/${project.slug}`} className="block relative w-full h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div className="p-6">
            <span className="text-sm text-kushoto-secondary font-semibold">{project.category}</span>
            <h3 className="text-xl font-semibold font-heading my-2 text-kushoto-neutralDark">
              {project.title}
            </h3>
            <Link
              href={`/portfolio/${project.slug}`}
              className="text-kushoto-primary hover:text-kushoto-primaryDark font-semibold"
            >
              View Project →
            </Link>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex justify-center">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent value="all">{renderProjectGrid(projects)}</TabsContent>

      {categories.map((category) => (
        <TabsContent key={category} value={category}>
          {renderProjectGrid(projects.filter((p) => p.category === category))}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default PortfolioClient

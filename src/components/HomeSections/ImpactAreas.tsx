import { Leaf, HeartPulse, Users } from 'lucide-react'
import React from 'react'

// Define a type for our impact area data for type safety
export type ImpactArea = {
  icon: React.ElementType // We'll use actual Lucide components for icons
  title: string
  description: string
}

export const impactAreasData: ImpactArea[] = [
  {
    icon: Leaf,
    title: 'Climate Justice',
    description:
      'We illuminate the human stories behind climate change, advocating for policy change and amplifying the voices of those most affected on the frontlines.',
  },
  {
    icon: HeartPulse,
    title: 'Health Justice',
    description:
      'Championing equitable health outcomes by sharing powerful narratives that challenge systemic barriers and promote access to information and care.',
  },
  {
    icon: Users,
    title: 'Gender Justice',
    description:
      'Through compelling storytelling, we address gender inequality, empower women and girls, and advocate for their rights in every aspect of community life.',
  },
]

const ImpactAreas = () => {
  return (
    <section className="py-16 sm:py-24 bg-kushoto-neutralLight/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold font-heading text-kushoto-neutralDark sm:text-4xl">
            Our Areas of Impact
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-kushoto-neutralDark/80">
            We focus our efforts on key interconnected areas where storytelling can drive meaningful
            change and advance justice for all.
          </p>
        </div>

        {/* 2. A more responsive grid for 4 items */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {impactAreasData.map((area, index) => {
            // 3. Destructure and alias the icon component for use in JSX
            const Icon = area.icon

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-kushoto-primary/10">
                  {/* 4. Render the actual Lucide icon */}
                  <Icon className="h-10 w-10 text-kushoto-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading text-kushoto-neutralDark">
                  {area.title}
                </h3>
                <p className="text-kushoto-neutralDark/70">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImpactAreas

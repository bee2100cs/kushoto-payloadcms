import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import TeamMemberCard from './TeamMemberCard'

export const teamKushoto = {
  title: 'Our Team',
  description:
    'Meet the dedicated team behind Kushoto, a group of passionate professionals driven by a shared commitment to empowering communities and telling the stories that matter most.',
  button: {
    text: 'Meet All Members',
    link: '/team',
  },
  members: [
    {
      name: 'Regina Mutiru',
      position: 'Co-Founder',
      social: {
        facebook: 'https://www.facebook.com/regina.pitas.3/',
        LinkedIn: 'https://www.linkedin.com/in/regina-mutiru-mwendwa-21951b27/',
        instagram: 'https://www.instagram.com/reginamutiru/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/regina-mutiru-750-ekPcaPHEzeQ5hgw2uewY8A9rdm8Zsx.webp',
    },
    {
      name: 'Ann Agar',
      position: 'Strategic Adviser',
      social: {
        facebook: 'https://www.facebook.com/anne.claire.94',
        linkedIn: 'https://www.linkedin.com/in/anne-agar-031777152/',
        instagram: 'https://www.instagram.com/agar_anne/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/Ann-750-fMHFMejb71N6hFFxVptyuPG8ie3Nwu.webp',
    },
    {
      name: 'Winnie Gatwiri',
      position: 'Communications Consultant',
      social: {
        facebook: 'https://www.facebook.com/',
        linkedIn: 'https://www.linkedin.com/in/',
        instagram: 'https://www.instagram.com/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/gatwiri-750-09CugQ22FfKx3UFJs27zA84z7aRenA.webp',
    },
    {
      name: 'Irene Mwende',
      position: 'Lead Researcher',
      social: {
        facebook: 'https://www.facebook.com/',
        linkedIn: 'https://www.linkedin.com/in/',
        instagram: 'https://www.instagram.com/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/mwende-750-V2rx5mp0FMzQJgipQEWRPbpmt6OHSt.webp',
    },
    {
      name: 'Muchai Gikundi',
      position: 'Programs Director',
      social: {
        facebook: 'https://www.facebook.com/muchai.bee/',
        linkedIn: 'https://www.linkedin.com/in/bee2100/',
        instagram: 'https://www.instagram.com/muchaibee/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/bryan-750-RvwSwEeQJ92MMqE7PfAwtL561ho5ss.webp',
    },

    {
      name: 'Kampombe Singe',
      position: 'Creative Director',
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=100086960373036',
        linkedIn: 'https://ke.linkedin.com/in/stephen-kampombe-9b54b4264',
        instagram: 'https://www.instagram.com/kampombe/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/kampombe-750-aGpBXyPxcD4TbSsNPdrjXlFu9g0WgX.webp',
    },
    {
      name: 'Dennis Muthee',
      position: 'Logistics Manager',
      social: {
        facebook: 'https://www.facebook.com/denis.muthee',
        instagram: 'https://www.instagram.com/denismuthee/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/dennis-muthee-BVtKwczXhBDN4a1jGSjqEdnnIknNiy.webp',
    },
  ],
}

const TeamHome = () => {
  // Display the first 4 members on the home page
  const featuredMembers = teamKushoto.members.slice(0, 4)

  return (
    <section className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-kushoto-neutralDark sm:text-4xl">
            {teamKushoto.title}
          </h2>
          <p className="text-lg text-kushoto-neutralDark/80 mt-4">{teamKushoto.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {featuredMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-kushoto-primary hover:bg-kushoto-primaryDark text-white px-8"
          >
            <Link href={teamKushoto.button.link}>
              {teamKushoto.button.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TeamHome

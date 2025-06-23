import { teamKushoto } from '@/components/HomeSections/TeamHome'
import TeamMemberCard from '@/components/Team/TeamMemberCard'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const TeamPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="animate-fade-in-up space-y-8 py-8 md:py-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-kushoto-primary">
            {teamKushoto.title}
          </h1>
          <p className="text-xl text-kushoto-neutralDark/80 max-w-3xl mx-auto">
            {teamKushoto.description}
          </p>
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamKushoto.members.map((memberData) => {
            const memberForCard = {
              name: memberData.name,
              role: memberData.position,
              photo: memberData.image,
              //bio: `A dedicated ${memberData.position} at Kushoto.`,
              socials: Object.entries(memberData.social).map(([platform, url]) => ({
                platform: platform.toLowerCase() as
                  | 'linkedin'
                  | 'twitter'
                  | 'instagram'
                  | 'facebook'
                  | 'youtube',
                url: url,
              })),
            }

            return <TeamMemberCard key={memberData.name} member={memberForCard} variant="full" />
          })}
        </section>

        <p className="text-center text-lg text-kushoto-neutralDark/70 pt-8">
          Our team is growing! Interested in joining us? Check our 
          <Link href="/get-involved" className="text-kushoto-primary font-semibold hover:underline">
            &apos;Get Involved&apos;
          </Link>
           page.
        </p>
      </div>
    </div>
  )
}

export default TeamPage

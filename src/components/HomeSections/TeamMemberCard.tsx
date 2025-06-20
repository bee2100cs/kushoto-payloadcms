import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

// Type for a single team member to ensure type safety
type TeamMember = {
  name: string
  position: string
  image: string
  social: {
    facebook?: string
    linkedin?: string
    instagram?: string
  }
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const socialLinks = {
    facebook: member.social.facebook,
    linkedin: member.social.linkedin,
    instagram: member.social.instagram,
  }

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[3/4]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Social Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {socialLinks.linkedin && (
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              className="rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/30"
            >
              <Linkedin size={20} />
            </Link>
          )}
          {socialLinks.instagram && (
            <Link
              href={socialLinks.instagram}
              target="_blank"
              className="rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/30"
            >
              <Instagram size={20} />
            </Link>
          )}
          {socialLinks.facebook && (
            <Link
              href={socialLinks.facebook}
              target="_blank"
              className="rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/30"
            >
              <Facebook size={20} />
            </Link>
          )}
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="font-heading text-xl font-bold text-kushoto-neutralDark">{member.name}</h3>
        <p className="text-kushoto-primary">{member.position}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard

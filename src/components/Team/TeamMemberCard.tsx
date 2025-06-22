import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react'

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'instagram' | 'facebook' | 'youtube'
  url: string
}

export interface TeamMember {
  name: string
  role: string
  photo: string
  //bio: string
  socials?: SocialLink[]
}

const iconMap: Record<SocialLink['platform'], React.ElementType> = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
}

const SocialIcon = ({ social }: { social: SocialLink }) => {
  const IconComponent = iconMap[social.platform]
  if (!IconComponent) return null

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-kushoto-neutralDark/60 hover:text-kushoto-primary transition-colors"
    >
      <IconComponent className="h-5 w-5" />
      <span className="sr-only">{social.platform}</span>
    </a>
  )
}

interface TeamMemberCardProps {
  member: TeamMember
  variant: 'full' | 'compact'
  className?: string
}

const TeamMemberCard = ({ member, variant, className = '' }: TeamMemberCardProps) => {
  if (variant === 'full') {
    return (
      <div
        className={`bg-white rounded-lg shadow-lg text-center p-6 hover:shadow-xl transition-shadow flex flex-col h-full ${className}`}
      >
        {/* --- CONVERTED IMAGE --- */}
        <div className="relative w-32 h-32 rounded-full mx-auto mb-4 border-4 border-kushoto-accent overflow-hidden">
          <Image
            src={member.photo || '/placeholder.svg'}
            alt={member.name}
            fill // Use 'fill' to make it responsive to the parent container
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold font-heading text-kushoto-neutralDark">
          {member.name}
        </h3>
        <p className="text-kushoto-secondary font-medium mb-2">{member.role}</p>
        {/* <p className="text-sm text-kushoto-neutralDark/70 flex-grow">{member.bio}</p> */}
        {member.socials && member.socials.length > 0 && (
          <div className="flex justify-center gap-4 mt-4">
            {member.socials.map((social) => (
              <SocialIcon key={social.platform} social={social} />
            ))}
          </div>
        )}
      </div>
    )
  }

  // compact variant
  return (
    <Card
      className={`text-center overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full ${className}`}
    >
      <CardContent className="p-6 flex flex-col items-center h-full">
        <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-kushoto-accent/50 group-hover:border-kushoto-accent transition-colors">
          <AvatarImage
            src={member.photo || '/placeholder.svg'}
            alt={member.name}
            className="object-cover"
          />
          <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold font-heading text-kushoto-neutralDark">
          {member.name}
        </h3>
        <p className="text-kushoto-secondary font-medium">{member.role}</p>
      </CardContent>
    </Card>
  )
}

export default TeamMemberCard

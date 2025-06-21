import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import type { Footer as FooterType } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export async function Footer() {
  const footerData: FooterType | null = await getCachedGlobal('footer', 1)()

  if (!footerData) {
    return null
  }

  const { columns, socialLinks, bottomBar } = footerData
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-kushoto-neutralDark text-kushoto-neutralLight">
      <div className="container mx-auto px-5 py-16">
        {/* 1. Main Footer Grid now includes the social links column */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Mission Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="max-w-xs text-sm text-kushoto-neutralLight/80">
              Empowering communities and inspiring change through authentic storytelling from the
              frontlines.
            </p>
          </div>

          {/* Dynamic Link Columns from Payload */}
          {columns?.map((col, i) => (
            <div key={i}>
              <h4 className="mb-4 font-heading text-lg font-semibold">{col.title}</h4>
              <ul className="space-y-2 text-sm">
                {col.navItems?.map(({ link }, j) => (
                  <li key={j}>
                    <CMSLink
                      {...link}
                      className="text-kushoto-neutralLight/80 transition-colors hover:text-kushoto-primary"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 2. New "Connect With Us" Column for Social Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks?.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kushoto-neutralLight/70 transition-colors hover:text-kushoto-primary"
                >
                  <Facebook size={22} />
                </a>
              )}
              {socialLinks?.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kushoto-neutralLight/70 transition-colors hover:text-kushoto-primary"
                >
                  <Twitter size={22} />
                </a>
              )}
              {socialLinks?.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kushoto-neutralLight/70 transition-colors hover:text-kushoto-primary"
                >
                  <Instagram size={22} />
                </a>
              )}
              {socialLinks?.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kushoto-neutralLight/70 transition-colors hover:text-kushoto-primary"
                >
                  <Linkedin size={22} />
                </a>
              )}
            </div>
            {/* Pro-Tip: You could add contact info here, managed via Payload */}
            <p className="mt-4 text-sm text-kushoto-neutralLight/80">contact@kushoto.org</p>
          </div>
        </div>

        {/* 3. Simplified and Centered Bottom Bar using CSS Grid */}
        <div className="mt-12 flex flex-col items-center gap-6 border-t border-kushoto-muted/30 pt-8 sm:grid sm:grid-cols-3 sm:items-center">
          {/* 
          This div is now a grid cell. On sm screens and up, it's the second of three columns.
          The text-center class ensures its content is centered within that cell.
          The first grid column is implicitly empty, creating the space on the left.
        */}
          <div className="text-center text-sm text-kushoto-neutralLight/60 sm:col-start-2">
            <p>
              © {currentYear} {bottomBar?.copyright || 'Kushoto.org. All Rights Reserved.'}
            </p>
            <p className="mt-1">
              Website by{' '}
              <a
                href="https://github.com/bee2100cs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-kushoto-primary"
              >
                0xkushoto
              </a>
            </p>
          </div>

          {/* 
    This div wraps the ThemeSelector and acts as the third grid cell.
    `justify-self-end` aligns the content of this cell to its right edge.
  */}
          <div className="sm:col-start-3 sm:justify-self-end"></div>
        </div>
      </div>
    </footer>
  )
}

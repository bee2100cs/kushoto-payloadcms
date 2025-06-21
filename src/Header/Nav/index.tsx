'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ChevronUp, ShoppingCart, Store } from 'lucide-react'

import { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
// import { CartSheet } from './cart/CartSheet'
// import { useCart } from '@/contexts/CartContext'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const { navItems } = data
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Placeholder cart logic, you can integrate your actual context here
  // const { itemCount } = useCart()
  const itemCount = 0 // Placeholder

  const closeMobileMenu = () => setIsOpen(false)

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName)
  }

  const renderNavItem = (item: NonNullable<HeaderType['navItems']>[0], isMobile: boolean) => {
    if (item.blockType === 'link') {
      return (
        <CMSLink
          key={item.id}
          {...item.link}
          className={
            isMobile
              ? 'block px-3 py-2 rounded-md text-base font-medium text-kushoto-neutralDark hover:bg-kushoto-neutralLight'
              : `text-base font-medium transition-colors hover:text-kushoto-primary ${pathname === item.link.url ? 'text-kushoto-primary' : 'text-kushoto-neutralDark'}`
          }
          onClick={isMobile ? closeMobileMenu : undefined}
        />
      )
    }

    if (item.blockType === 'dropdown') {
      const dropdownLabel = item.label
      const subNavs = item.subNavItems || []

      if (isMobile) {
        return (
          <div key={item.id}>
            <button
              onClick={() => toggleDropdown(dropdownLabel)}
              className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-kushoto-neutralDark hover:bg-kushoto-neutralLight focus:outline-none"
            >
              {dropdownLabel}
              {openDropdown === dropdownLabel ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openDropdown === dropdownLabel && (
              <div className="pl-4 mt-1 space-y-1">
                {subNavs.map(({ link, id }) => (
                  <CMSLink
                    key={id}
                    {...link}
                    className="block px-4 py-2 text-kushoto-neutralDark hover:bg-kushoto-neutralLight/50"
                    onClick={closeMobileMenu}
                  />
                ))}
              </div>
            )}
          </div>
        )
      }

      // Desktop Dropdown
      return (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setOpenDropdown(dropdownLabel)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="flex items-center text-base font-medium text-kushoto-neutralDark hover:text-kushoto-primary focus:outline-none cursor-pointer">
            {dropdownLabel}
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform duration-200 ${openDropdown === dropdownLabel ? 'rotate-180' : ''}`}
            />
          </div>
          {openDropdown === dropdownLabel && (
            <div className="absolute top-full pt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              {subNavs.map(({ link, id }) => (
                <CMSLink
                  key={id}
                  {...link}
                  className="block w-full text-left px-4 py-2 text-kushoto-neutralDark hover:bg-kushoto-neutralLight/50"
                  onClick={() => setOpenDropdown(null)}
                />
              ))}
            </div>
          )}
        </div>
      )
    }
    return null
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 items-center">
        {navItems?.map((item) => renderNavItem(item, false))}
        <Button asChild className="bg-kushoto-primary hover:bg-kushoto-primaryDark text-white ml-4">
          <Link href="/get-involved#donate">Donate Now</Link>
        </Button>
        <Link href="/store" title="Store">
          <Store className="h-6 w-6 text-kushoto-neutralDark hover:text-kushoto-primary" />
          <span className="sr-only">Store</span>
        </Link>
        {/* <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="relative text-kushoto-primary p-2 rounded-full hover:bg-kushoto-neutralLight/50" title="Cart">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-kushoto-secondary text-xs font-bold text-white">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
              <span className="sr-only">Open Cart</span>
            </Button>
          </SheetTrigger>
          <CartSheet />
        </Sheet> */}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-kushoto-neutralDark hover:text-kushoto-primary"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in-down">
          <nav className="flex flex-col space-y-2 px-4">
            {navItems?.map((item) => renderNavItem(item, true))}
            <div className="border-t pt-4 mt-4 space-y-2">
              <Button
                asChild
                className="bg-kushoto-primary hover:bg-kushoto-primaryDark text-white w-full"
              >
                <Link href="/get-involved#donate" onClick={closeMobileMenu}>
                  Donate Now
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/store" onClick={closeMobileMenu}>
                  <Store className="mr-2 h-4 w-4" />
                  Visit Store
                </Link>
              </Button>
              {/* Cart button for mobile */}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

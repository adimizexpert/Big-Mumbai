'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User, Trophy, Gift, HelpCircle, Info, FileText, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Gift Codes', href: '/gift-codes', icon: Gift },
    { name: 'How to Play', href: '/how-to-play', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Big Mumbai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="btn-secondary">
              <User className="w-4 h-4 mr-2" />
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-3" />}
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/login"
                  className="flex items-center justify-center w-full btn-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center justify-center w-full btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

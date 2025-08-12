import Link from 'next/link'
import { Trophy, Gift, Shield, Users, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'How to Play', href: '/how-to-play' },
      { name: 'Gift Codes', href: '/gift-codes' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    games: [
      { name: 'Lottery', href: '/games/lottery' },
      { name: 'Casino', href: '/games/casino' },
      { name: 'Fishing', href: '/games/fishing' },
      { name: 'Aviator', href: '/games/aviator' },
      { name: 'Card Games', href: '/games/cards' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Big Mumbai</span>
            </div>
            <p className="text-gray-300 text-sm">
              A unique gaming experience with connection, competition, and rewards. 
              Play anytime, anywhere and win real cash prizes.
            </p>
            <div className="flex space-x-4">
              <Link href="/register" className="btn-primary text-sm py-2 px-4">
                Register Now
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Games & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Games</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.games.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@bigmumbaimumbai.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Big Mumbai Game. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span>10K+ Players</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Gift className="w-4 h-4" />
                <span>₹50M+ Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Gift, Clock, Users } from 'lucide-react'

const StickyCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="sticky-cta"
    >
      <div className="bg-white rounded-2xl shadow-2xl p-4 border-2 border-primary-500 max-w-xs">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center py-2 px-3 rounded-lg mb-3">
          <div className="flex items-center justify-center space-x-2 text-sm font-bold">
            <Clock className="w-4 h-4" />
            <span>Limited Time Offer!</span>
          </div>
        </div>

        {/* Main CTA */}
        <Link
          href="/register"
          className="btn-primary w-full text-center mb-3 block"
        >
          Register Now & Get ₹10 Bonus!
        </Link>

        {/* Bonus Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2 text-green-600">
            <Gift className="w-4 h-4" />
            <span className="font-semibold">Welcome Bonus: ₹10</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-600">
            <Users className="w-4 h-4" />
            <span className="font-semibold">Refer & Earn ₹30</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            const element = document.querySelector('.sticky-cta');
            if (element) {
              element.remove();
            }
          }}
          className="absolute -top-2 -right-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs transition-colors duration-200"
        >
          ×
        </button>
      </div>
    </motion.div>
  )
}

export default StickyCTA

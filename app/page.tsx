import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Big Mumbai: A Unique Gaming Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Play, Compete & Win Cash Rewards – Anytime, Anywhere
          </p>
          
          {/* Urgency Banner */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-8 border border-white/30">
            <div className="flex items-center justify-center space-x-4 text-lg font-semibold">
              <span>🎁</span>
              <span>Register Now & Get Up To ₹10 Bonus</span>
              <span>🎁</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/register" 
              className="btn-primary"
            >
              🏆 Register Now & Win
            </Link>
            <Link 
              href="/login" 
              className="btn-secondary"
            >
              👥 Login
            </Link>
          </div>

          {/* Additional Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-3">
              <span className="font-semibold">🎁 Welcome Bonus: ₹10</span>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <span className="font-semibold">👥 Refer & Earn: ₹30</span>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <span className="font-semibold">⚡ Instant Play - No Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Big Mumbai Game?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/10">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Many Unique Gaming Features</h3>
              <p className="text-gray-200">Experience diverse gameplay with innovative mechanics and exciting challenges</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/10">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3">Online Chat Option</h3>
              <p className="text-gray-200">Transparent communication between users and the app for better gaming experience</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/10">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-3">Diverse Game Selection</h3>
              <p className="text-gray-200">Lottery, Casino, Fishing, Aviator, and Card Games - something for everyone</p>
            </div>
          </div>

          {/* CTA after features */}
          <div className="text-center mt-12">
            <Link 
              href="/register" 
              className="btn-primary"
            >
              Start Playing Now
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Winning?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join Big Mumbai Game today and get your ₹10 welcome bonus instantly!
          </p>
          <Link 
            href="/register" 
            className="btn-primary"
          >
            🏆 Register Now & Win
          </Link>
        </div>
      </section>
    </div>
  )
}

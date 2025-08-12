import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Gift, 
  Users, 
  Copy, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  DollarSign,
  Calendar,
  Shield
} from 'lucide-react'

export default function GiftCodes() {
  const giftCodes = [
    {
      code: "WELCOME10",
      bonus: "₹10",
      description: "Welcome bonus for new players",
      validity: "30 days",
      type: "Welcome"
    },
    {
      code: "FIRST100",
      bonus: "₹100",
      description: "First deposit bonus",
      validity: "7 days",
      type: "Deposit"
    },
    {
      code: "WEEKEND50",
      bonus: "₹50",
      description: "Weekend special bonus",
      validity: "3 days",
      type: "Special"
    },
    {
      code: "VIP200",
      bonus: "₹200",
      description: "VIP player bonus",
      validity: "15 days",
      type: "VIP"
    }
  ]

  const referralBonuses = [
    {
      tier: "Bronze",
      requirement: "1-5 referrals",
      bonus: "₹30 per referral",
      total: "Up to ₹150"
    },
    {
      tier: "Silver",
      requirement: "6-15 referrals",
      bonus: "₹35 per referral",
      total: "Up to ₹525"
    },
    {
      tier: "Gold",
      requirement: "16-30 referrals",
      bonus: "₹40 per referral",
      total: "Up to ₹1,200"
    },
    {
      tier: "Platinum",
      requirement: "31+ referrals",
      bonus: "₹50 per referral",
      total: "Unlimited"
    }
  ]

  const features = [
    {
      icon: Gift,
      title: "Instant Bonuses",
      description: "Get your bonus immediately after using the code"
    },
    {
      icon: Zap,
      title: "Easy Redemption",
      description: "Simple one-click code redemption process"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "All bonuses are processed securely"
    },
    {
      icon: Users,
      title: "Refer & Earn",
      description: "Invite friends and earn unlimited rewards"
    }
  ]

  return (
    <>
      <NextSeo
        title="Gift Codes & Bonuses - Big Mumbai Game"
        description="Get exclusive gift codes and bonuses for Big Mumbai Game. Welcome bonus, referral rewards, and special offers to boost your gaming experience."
        canonical="https://bigmumbaimumbai.com/gift-codes"
        openGraph={{
          title: "Gift Codes & Bonuses - Big Mumbai Game",
          description: "Get exclusive gift codes and bonuses for Big Mumbai Game. Welcome bonus, referral rewards, and special offers.",
          url: "https://bigmumbaimumbai.com/gift-codes",
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Gift Codes & Bonuses
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Unlock exclusive rewards and boost your gaming experience
            </p>
            
            <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300 inline-flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Register & Get ₹10 Bonus
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Welcome Bonus Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-3xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                🎁 Welcome Bonus: ₹10
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Every new player gets ₹10 bonus instantly upon registration!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/register" className="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                  <Trophy className="w-6 h-6 mr-2" />
                  Register Now & Claim
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
                <div className="text-sm text-gray-200">
                  <p>✅ No deposit required</p>
                  <p>✅ Instant credit</p>
                  <p>✅ Play immediately</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gift Codes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exclusive Gift Codes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use these special codes to unlock amazing bonuses and rewards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {giftCodes.map((code, index) => (
              <motion.div
                key={code.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <code className="text-lg font-mono font-bold text-gray-900">{code.code}</code>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{code.bonus} Bonus</h3>
                <p className="text-gray-600 text-sm mb-3">{code.description}</p>
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Valid for {code.validity}</span>
                </div>
                <div className="mt-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    code.type === 'Welcome' ? 'bg-green-100 text-green-800' :
                    code.type === 'Deposit' ? 'bg-blue-100 text-blue-800' :
                    code.type === 'Special' ? 'bg-purple-100 text-purple-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {code.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA after gift codes */}
          <div className="text-center">
            <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300 inline-flex items-center">
              <Gift className="w-6 h-6 mr-2" />
              Register & Use All Codes
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Refer & Earn Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invite your friends and earn up to ₹50 per referral. The more you refer, the more you earn!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {referralBonuses.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center border border-gray-200"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  tier.tier === 'Bronze' ? 'bg-yellow-100' :
                  tier.tier === 'Silver' ? 'bg-gray-100' :
                  tier.tier === 'Gold' ? 'bg-yellow-100' :
                  'bg-purple-100'
                }`}>
                  <Star className={`w-8 h-8 ${
                    tier.tier === 'Bronze' ? 'text-yellow-600' :
                    tier.tier === 'Silver' ? 'text-gray-600' :
                    tier.tier === 'Gold' ? 'text-yellow-600' :
                    'text-purple-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                <p className="text-gray-600 text-sm mb-2">{tier.requirement}</p>
                <p className="text-red-600 font-semibold mb-2">{tier.bonus}</p>
                <p className="text-lg font-bold text-gray-900">{tier.total}</p>
              </motion.div>
            ))}
          </div>

          {/* How Referral Works */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                How Referral Program Works
              </h3>
              <p className="text-xl text-gray-600">
                It's simple! Follow these steps and start earning
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Register & Get Your Link",
                  description: "Sign up and get your unique referral link to share with friends"
                },
                {
                  step: "2",
                  title: "Share with Friends",
                  description: "Send your referral link to friends via WhatsApp, social media, or email"
                },
                {
                  step: "3",
                  title: "Earn Rewards",
                  description: "Get ₹30-50 for every friend who registers and plays using your link"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA after referral */}
          <div className="text-center">
            <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300 inline-flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Start Referring & Earning
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Bonus System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer the most generous and transparent bonus system in online gaming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white p-12 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Claim Your Bonuses?
              </h3>
              <p className="text-xl mb-8 text-gray-100">
                Register now and get ₹10 welcome bonus + start earning from referrals!
              </p>
                              <Link href="/register" className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Register & Get ₹10 + Referral Bonuses
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Users, 
  Shield, 
  Zap, 
  MessageCircle, 
  ArrowRight,
  CheckCircle,
  Star,
  Gamepad2
} from 'lucide-react'

export default function About() {
  const aboutSections = [
    {
      icon: Gamepad2,
      title: "Gaming is More Than Just a Normal Game",
      description: "It's about connection, competition, and rewards. We've created a platform where players can experience the thrill of gaming while building meaningful connections with others.",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Fast-Paced Action & Strategic Puzzles",
      description: "From lightning-fast lottery draws to brain-teasing card games, every moment is designed to keep you engaged and excited. Challenge your skills and test your luck!",
      color: "text-purple-600"
    },
    {
      icon: Trophy,
      title: "Cash Prize Challenge",
      description: "Compete in tournaments, participate in skill-based challenges, and win real cash rewards. Our platform offers multiple ways to earn and win big!",
      color: "text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Community & Connection",
      description: "Chat with fellow players, form teams, and participate in collaborative events. Our online chat feature ensures transparency and builds a strong gaming community.",
      color: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Seamless & Secure",
      description: "Enjoy a user-friendly interface with bank-grade security. Your money and data are protected with the highest level of encryption and security protocols.",
      color: "text-red-600"
    }
  ]

  const stats = [
    { number: "50,000+", label: "Active Players", icon: Users },
    { number: "₹100M+", label: "Total Payouts", icon: Trophy },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "24/7", label: "Support", icon: MessageCircle }
  ]

  const values = [
    {
      title: "Transparency",
      description: "We believe in complete transparency in all our operations, from game mechanics to payment processing."
    },
    {
      title: "Fair Play",
      description: "Every player has an equal chance to win. Our RNG systems ensure fair and unbiased gameplay."
    },
    {
      title: "Community First",
      description: "We prioritize building a strong, supportive community where players can connect and grow together."
    },
    {
      title: "Innovation",
      description: "Constantly evolving our platform with new games, features, and technologies to enhance your gaming experience."
    }
  ]

  return (
    <>
      <NextSeo
        title="About Big Mumbai Game - Gaming is More Than Just a Game"
        description="Discover how Big Mumbai Game creates a unique gaming experience focused on connection, competition, and rewards. Learn about our values and commitment to players."
        canonical="https://bigmumbaimumbai.com/about"
        openGraph={{
          title: "About Big Mumbai Game - Gaming is More Than Just a Game",
          description: "Discover how Big Mumbai Game creates a unique gaming experience focused on connection, competition, and rewards. Learn about our values and commitment to players.",
          url: "https://bigmumbaimumbai.com/about",
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              About Big Mumbai Game
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Gaming is more than just a normal game — it's about connection, competition, and rewards
            </p>
            
            <Link href="/register" className="btn-primary text-xl px-12 py-5 bg-red-600 hover:bg-red-700 inline-flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Register & Start Winning
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Big Mumbai Game, we're passionate about creating more than just another gaming platform. 
                We're building a community where players can experience the thrill of competition while forming 
                meaningful connections with fellow gamers.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines the excitement of traditional gaming with modern technology, offering 
                a seamless experience that keeps players engaged and rewarded.
              </p>
              
              <Link href="/register" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                Join Our Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-100 to-accent-100 p-8 rounded-3xl"
            >
              <div className="text-center">
                <Trophy className="w-24 h-24 text-primary-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Big Mumbai?
                </h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Unique gaming features</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Online chat for transparency</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Diverse game selection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Real cash rewards</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* About Sections */}
          <div className="space-y-16 mb-20">
            {aboutSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 ${section.color} bg-gray-100 rounded-full flex items-center justify-center mb-6`}>
                    <section.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-lg text-gray-600">{section.description}</p>
                </div>
                
                <div className={`bg-gray-50 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <section.icon className={`w-20 h-20 ${section.color} mx-auto mb-4`} />
                    <h4 className="text-xl font-semibold text-gray-900">{section.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA after sections */}
          <div className="text-center mb-20">
            <Link href="/register" className="btn-primary text-xl px-12 py-5 inline-flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Register & Start Winning Today
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Big Mumbai by the Numbers
              </h2>
              <p className="text-xl text-gray-600">
                Our platform's success is measured by the satisfaction of our players
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and ensure the best experience for our players
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-12 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join the Big Mumbai Family?
              </h3>
              <p className="text-xl mb-8 text-gray-100">
                Experience gaming like never before with connection, competition, and real cash rewards!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                  <Trophy className="w-6 h-6 mr-2" />
                  Register Now & Get ₹10 Bonus
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
                <Link href="/how-to-play" className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300">
                  Learn How to Play
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

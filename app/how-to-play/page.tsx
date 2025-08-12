"use client"

import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Play, 
  Users, 
  Gift, 
  CheckCircle, 
  ArrowRight,
  Gamepad2,
  Zap,
  Shield,
  Star,
  Download,
  Smartphone,
  Globe
} from 'lucide-react'

export default function HowToPlay() {
  const steps = [
    {
      step: "1",
      title: "Register Your Account",
      description: "Create your Big Mumbai Game account in just 2 minutes. Provide basic information and verify your email/phone number.",
      icon: Users,
      color: "bg-blue-500",
      details: [
        "Enter your full name and email",
        "Choose a secure password",
        "Verify your contact information",
        "Get ₹10 welcome bonus instantly"
      ]
    },
    {
      step: "2",
      title: "Complete Your Profile",
      description: "Add your gaming preferences, set up payment methods, and customize your profile for the best experience.",
      icon: Shield,
      color: "bg-green-500",
      details: [
        "Upload profile picture (optional)",
        "Set gaming preferences",
        "Add payment methods",
        "Enable two-factor authentication"
      ]
    },
    {
      step: "3",
      title: "Choose Your Game",
      description: "Browse through our diverse collection of games including lottery, casino, fishing, aviator, and card games.",
      icon: Gamepad2,
      color: "bg-purple-500",
      details: [
        "Explore different game categories",
        "Read game rules and payouts",
        "Check minimum bet requirements",
        "Try free demo versions"
      ]
    },
    {
      step: "4",
      title: "Start Playing & Winning",
      description: "Place your bets, enjoy the gameplay, and start winning real cash rewards. Chat with other players for a social experience.",
      icon: Trophy,
      color: "bg-yellow-500",
      details: [
        "Place bets within your budget",
        "Use chat feature to interact",
        "Track your winnings",
        "Participate in tournaments"
      ]
    }
  ]

  const gameTypes = [
    {
      icon: Gift,
      title: "Lottery Games",
      description: "Multiple draw times, various ticket prices, and exciting jackpots. Play anytime and win big!",
      features: ["Daily draws", "Multiple price points", "High jackpots", "Instant results"]
    },
    {
      icon: Zap,
      title: "Casino Games",
      description: "Classic casino favorites including slots, table games, and live dealer options.",
      features: ["Slots & jackpots", "Blackjack & roulette", "Live dealers", "Progressive prizes"]
    },
    {
      icon: Globe,
      title: "Fishing Games",
      description: "Interactive fishing games with different themes, weapons, and fish types for endless entertainment.",
      features: ["Multiple themes", "Various weapons", "Different fish types", "Multiplayer mode"]
    },
    {
      icon: Star,
      title: "Aviator Games",
      description: "Crash-style games where you bet on how high the multiplier will go before it crashes.",
      features: ["Real-time betting", "Multiplier system", "Quick rounds", "High excitement"]
    },
    {
      icon: Users,
      title: "Card Games",
      description: "Traditional card games like poker, rummy, and teen patti with modern twists and real money stakes.",
      features: ["Poker variants", "Rummy games", "Teen patti", "Tournaments"]
    }
  ]

  const tips = [
    {
      icon: Shield,
      title: "Start Small",
      description: "Begin with small bets to understand the games and build your confidence gradually."
    },
    {
      icon: Gift,
      title: "Use Bonuses Wisely",
      description: "Take advantage of welcome bonuses and referral rewards to maximize your playing potential."
    },
    {
      icon: Users,
      title: "Join the Community",
      description: "Use the chat feature to connect with other players and learn from their experiences."
    },
    {
      icon: Zap,
      title: "Set Limits",
      description: "Always set betting limits and stick to them to ensure responsible gaming."
    }
  ]

  return (
    <>
      <NextSeo
        title="How to Play Big Mumbai Game - Step by Step Guide"
        description="Learn how to play Big Mumbai Game with our comprehensive step-by-step guide. From registration to winning, we'll show you everything you need to know."
        canonical="https://bigmumbaimumbai.com/how-to-play"
        openGraph={{
          title: "How to Play Big Mumbai Game - Step by Step Guide",
          description: "Learn how to play Big Mumbai Game with our comprehensive step-by-step guide. From registration to winning, we'll show you everything you need to know.",
          url: "https://bigmumbaimumbai.com/how-to-play",
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              How to Play Big Mumbai Game
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Your complete guide to getting started and winning big
            </p>
            
            <Link href="/register" className="btn-primary text-xl px-12 py-5 bg-red-600 hover:bg-red-700 inline-flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Start Playing Now
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Banner */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-3xl p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🚀 Quick Start: Get Playing in 5 Minutes!
              </h2>
              <p className="text-xl mb-6 text-gray-100">
                No download required • Instant play • ₹10 welcome bonus
              </p>
              <Link href="/register" className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                <Play className="w-6 h-6 mr-2" />
                Register & Play Instantly
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Step-by-Step Guide to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps and you'll be playing and winning in no time
            </p>
          </motion.div>

          <div className="space-y-12 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {step.step === "1" && (
                    <div className="mt-6">
                      <Link href="/register" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Register Now & Get ₹10
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  )}
                </div>
                
                <div className={`bg-white p-8 rounded-2xl shadow-lg ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA after steps */}
          <div className="text-center">
            <Link href="/register" className="btn-primary text-xl px-12 py-5 inline-flex items-center">
              <Play className="w-6 h-6 mr-2" />
              Ready to Start Playing?
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Game Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the variety of games available on Big Mumbai Game
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {gameTypes.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <game.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{game.title}</h3>
                <p className="text-gray-600 text-center mb-4">{game.description}</p>
                <ul className="space-y-2">
                  {game.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA after game types */}
          <div className="text-center">
            <Link href="/register" className="btn-primary text-xl px-12 py-5 inline-flex items-center">
              <Gamepad2 className="w-6 h-6 mr-2" />
              Start Playing All Games
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pro Tips for Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice to help you maximize your gaming experience and winnings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA after tips */}
          <div className="text-center">
            <Link href="/register" className="btn-primary text-xl px-12 py-5 inline-flex items-center">
              <Star className="w-6 h-6 mr-2" />
              Apply These Tips & Start Winning
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-3xl p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Big Mumbai Game?
              </h2>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                Experience the best online gaming platform with these amazing features
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Smartphone,
                  title: "Mobile First",
                  description: "Optimized for all devices - play on mobile, tablet, or desktop"
                },
                {
                  icon: Download,
                  title: "No Download",
                  description: "Play instantly in your browser - no app installation required"
                },
                {
                  icon: Zap,
                  title: "Instant Play",
                  description: "Start playing immediately after registration - no waiting time"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-100">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-12 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Gaming Journey?
              </h3>
              <p className="text-xl mb-8 text-gray-100">
                Join thousands of players who are already winning big on Big Mumbai Game!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                  <Trophy className="w-6 h-6 mr-2" />
                  Register Now & Get ₹10 Bonus
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
                <Link href="/gift-codes" className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300">
                  View All Bonuses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

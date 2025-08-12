import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Trophy, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  HelpCircle,
  Shield,
  Gift,
  Users,
  Gamepad2
} from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "What is Big Mumbai Game?",
      answer: "Big Mumbai Game is a unique online gaming platform that offers a variety of games including lottery, casino, fishing, aviator, and card games. It's designed to provide a gaming experience focused on connection, competition, and real cash rewards. Players can enjoy fast-paced action, strategic puzzles, and classic card games while competing for cash prizes."
    },
    {
      question: "Is it safe to play for real money?",
      answer: "Yes, Big Mumbai Game is completely safe for real money gaming. We use bank-grade security protocols, SSL encryption, and secure payment gateways to protect your financial information. Our platform is licensed and regulated, ensuring fair play and secure transactions. All games use certified RNG (Random Number Generator) systems for unbiased results."
    },
    {
      question: "How do I deposit and withdraw money?",
      answer: "Depositing is easy - you can use UPI, net banking, credit/debit cards, or digital wallets. For withdrawals, we support the same payment methods. All transactions are processed securely and typically completed within 24 hours. We have a minimum withdrawal amount and maximum limits to ensure responsible gaming."
    },
    {
      question: "Does Big Mumbai Game use RNG (Random Number Generator)?",
      answer: "Yes, all our games use certified RNG systems to ensure fair and unbiased gameplay. This means every player has an equal chance of winning, and game outcomes are completely random and cannot be manipulated. Our RNG systems are regularly audited by independent third-party testing agencies."
    },
    {
      question: "What games are available on Big Mumbai?",
      answer: "We offer a diverse selection of games including: Lottery games with various draw times, Casino games like slots and table games, Fishing games with different themes, Aviator crash games, and classic Card games like poker and rummy. New games are added regularly to keep the platform exciting."
    },
    {
      question: "How does the chat feature work?",
      answer: "Our online chat feature allows players to communicate with each other and with our support team in real-time. This ensures complete transparency between users and the app. You can chat with fellow players, form teams, and get instant support when needed. The chat is moderated to maintain a positive gaming environment."
    },
    {
      question: "What bonuses and rewards are available?",
      answer: "New players get a ₹10 welcome bonus upon registration. We also offer referral bonuses - earn ₹30 for every friend you invite who registers and plays. Regular players can enjoy daily bonuses, weekly rewards, and special tournament prizes. All bonuses have fair wagering requirements."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Big Mumbai Game is designed as a web-based platform that works perfectly on all devices - desktop, tablet, and mobile. No download is required, you can play instantly in your browser. The platform is fully responsive and optimized for mobile gaming, providing the same great experience across all devices."
    },
    {
      question: "What are the minimum and maximum bet limits?",
      answer: "We offer flexible betting options to suit all types of players. Minimum bets start from ₹1, while maximum bets vary by game and can go up to ₹10,000. These limits are designed to promote responsible gaming and ensure everyone can enjoy our platform regardless of their budget."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7 through multiple channels: Live chat on the platform, email at support@bigmumbaimumbai.com, and phone support at +91 98765 43210. We pride ourselves on quick response times and helpful assistance for all your gaming needs."
    },
    {
      question: "Are there any age restrictions?",
      answer: "Yes, you must be 18 years or older to register and play on Big Mumbai Game. This is a legal requirement for real money gaming in India. We verify player age during the registration process and may request additional documentation if needed."
    },
    {
      question: "How do tournaments and competitions work?",
      answer: "We regularly host tournaments and competitions across different games with exciting prize pools. Players can participate in daily, weekly, and special event tournaments. Some tournaments are skill-based, while others are luck-based. Leaderboards track performance and winners receive cash prizes and special rewards."
    }
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <NextSeo
        title="FAQ - Big Mumbai Game - Frequently Asked Questions"
        description="Find answers to common questions about Big Mumbai Game. Learn about registration, bonuses, games, security, and more. Get started with your gaming journey today!"
        canonical="https://bigmumbaimumbai.com/faq"
        openGraph={{
          title: "FAQ - Big Mumbai Game - Frequently Asked Questions",
          description: "Find answers to common questions about Big Mumbai Game. Learn about registration, bonuses, games, security, and more.",
          url: "https://bigmumbaimumbai.com/faq",
        }}
      />

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
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
            <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Everything you need to know about Big Mumbai Game
            </p>
            
            <Link href="/register" className="btn-primary text-xl px-12 py-5 bg-red-600 hover:bg-red-700 inline-flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Register Now & Get ₹10 Bonus
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Got Questions? We've Got Answers!
              </h2>
              <p className="text-xl text-gray-600">
                Find everything you need to know about playing, winning, and enjoying Big Mumbai Game
              </p>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4 mb-16">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA after FAQ */}
            <div className="text-center mb-16">
              <Link href="/register" className="btn-primary text-xl px-12 py-5 inline-flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Ready to Start Playing?
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600">
                  Check out these helpful resources or get in touch with our support team
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/how-to-play"
                  className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 card-hover"
                >
                  <Gamepad2 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">How to Play</h4>
                  <p className="text-gray-600 text-sm">Learn the basics and start gaming</p>
                </Link>

                <Link
                  href="/gift-codes"
                  className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 card-hover"
                >
                  <Gift className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Gift Codes</h4>
                  <p className="text-gray-600 text-sm">Get bonuses and special offers</p>
                </Link>

                <Link
                  href="/contact"
                  className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 card-hover"
                >
                  <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h4>
                  <p className="text-gray-600 text-sm">Get help from our team</p>
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-8 rounded-3xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Join Big Mumbai Game?
                </h3>
                <p className="text-lg mb-6 text-gray-100">
                  Get your ₹10 welcome bonus and start playing today!
                </p>
                <Link href="/register" className="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                  <Trophy className="w-6 h-6 mr-2" />
                  Register Now & Win
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

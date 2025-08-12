import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Send,
  MessageCircle,
  Shield,
  Users
} from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@bigmumbaimumbai.com",
      description: "Get help via email within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "+91 98765 43210",
      description: "Call us anytime for immediate assistance"
    },
    {
      icon: Clock,
      title: "Support Hours",
      value: "24/7 Available",
      description: "Round-the-clock customer support"
    },
    {
      icon: MapPin,
      title: "Head Office",
      value: "Mumbai, Maharashtra",
      description: "Main office location in India"
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Bank-grade security for your data"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Experienced gaming support team"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help through live chat"
    }
  ]

  return (
    <>
      <NextSeo
        title="Contact Big Mumbai Game - Get Support & Help"
        description="Contact Big Mumbai Game support team for help, questions, or assistance. We're available 24/7 to help you with your gaming experience."
        canonical="https://bigmumbaimumbai.com/contact"
        openGraph={{
          title: "Contact Big Mumbai Game - Get Support & Help",
          description: "Contact Big Mumbai Game support team for help, questions, or assistance. We're available 24/7.",
          url: "https://bigmumbaimumbai.com/contact",
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
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              We're here to help! Get in touch with our support team
            </p>
            
            <Link href="/register" className="btn-primary text-xl px-12 py-5 bg-red-600 hover:bg-red-700 inline-flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Register Now & Get ₹10 Bonus
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or need help? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="games">Game Questions</option>
                    <option value="security">Security Concerns</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 inline-flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-primary-600 font-medium">{info.value}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Why Choose Our Support?
                </h4>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{feature.title}</h5>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Banner */}
              <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-6 rounded-2xl text-center">
                <h4 className="text-xl font-bold mb-3">
                  Ready to Start Playing?
                </h4>
                <p className="text-gray-100 mb-4">
                  Join Big Mumbai Game today and get your ₹10 welcome bonus!
                </p>
                <Link href="/register" className="bg-white text-primary-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* CTA after form */}
          <div className="text-center mt-20">
            <Link href="/register" className="btn-primary text-xl px-12 py-5 inline-flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Start Your Gaming Journey Today
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about Big Mumbai Game
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "How do I register for Big Mumbai Game?",
              "What payment methods are accepted?",
              "How long do withdrawals take?",
              "Is the platform mobile-friendly?",
              "What games are available?",
              "How do I get the welcome bonus?"
            ].map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{question}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get detailed answers to this and many more questions in our comprehensive FAQ section.
                </p>
                <Link href="/faq" className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center">
                  Read Answer
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/faq" className="btn-secondary text-lg px-8 py-4 inline-flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              View All FAQs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

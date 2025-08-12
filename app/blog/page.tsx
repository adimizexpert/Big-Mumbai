"use client"

import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  FileText, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  TrendingUp,
  Gamepad2,
  Users,
  Zap
} from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Strategies to Win at Big Mumbai Game",
      excerpt: "Discover proven strategies and tips that can significantly increase your chances of winning at Big Mumbai Game. From bankroll management to game selection, learn from the experts.",
      author: "Gaming Expert",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Strategy",
      image: "/blog/strategy.jpg",
      tags: ["Strategy", "Winning", "Tips", "Gaming"]
    },
    {
      id: 2,
      title: "Why Big Mumbai's Chat Feature Changes the Gaming Experience",
      excerpt: "Explore how our innovative chat system creates a more engaging and social gaming environment. Connect with players, share strategies, and build a gaming community.",
      author: "Community Manager",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Features",
      image: "/blog/chat.jpg",
      tags: ["Chat", "Community", "Social", "Features"]
    },
    {
      id: 3,
      title: "Understanding RNG: How Fair Play is Ensured at Big Mumbai",
      excerpt: "Learn about our Random Number Generator system and how it ensures fair gameplay for all players. Discover the technology behind our commitment to transparency.",
      author: "Tech Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Technology",
      image: "/blog/rng.jpg",
      tags: ["RNG", "Fair Play", "Technology", "Security"]
    },
    {
      id: 4,
      title: "The Psychology of Successful Gaming: Mindset Matters",
      excerpt: "Your mental approach to gaming can be just as important as your strategy. Learn how to develop the right mindset for consistent success and enjoyment.",
      author: "Psychology Expert",
      date: "2024-01-08",
      readTime: "9 min read",
      category: "Psychology",
      image: "/blog/psychology.jpg",
      tags: ["Psychology", "Mindset", "Success", "Mental Game"]
    },
    {
      id: 5,
      title: "Lottery Games vs Casino Games: Which Should You Choose?",
      excerpt: "Compare different game types and understand which ones might be best suited for your playing style and goals. Make informed decisions about your gaming choices.",
      author: "Game Analyst",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Game Guide",
      image: "/blog/comparison.jpg",
      tags: ["Lottery", "Casino", "Comparison", "Guide"]
    },
    {
      id: 6,
      title: "Building Your Gaming Bankroll: Smart Money Management",
      excerpt: "Learn essential money management skills that will help you build and maintain your gaming bankroll. Smart financial decisions lead to long-term gaming success.",
      author: "Financial Advisor",
      date: "2024-01-03",
      readTime: "11 min read",
      category: "Finance",
      image: "/blog/bankroll.jpg",
      tags: ["Bankroll", "Money Management", "Finance", "Strategy"]
    }
  ]

  const categories = [
    { name: "Strategy", count: 12, icon: TrendingUp },
    { name: "Features", count: 8, icon: Zap },
    { name: "Technology", count: 6, icon: Gamepad2 },
    { name: "Community", count: 10, icon: Users },
    { name: "Game Guide", count: 15, icon: FileText },
    { name: "Tips", count: 20, icon: Trophy }
  ]

  const featuredPost = blogPosts[0]

  return (
    <>
      <NextSeo
        title="Blog - Big Mumbai Game - Gaming Tips, Strategies & News"
        description="Read the latest gaming tips, strategies, and news from Big Mumbai Game. Expert advice to improve your gaming skills and maximize your winnings."
        canonical="https://bigmumbaimumbai.com/blog"
        openGraph={{
          title: "Blog - Big Mumbai Game - Gaming Tips, Strategies & News",
          description: "Read the latest gaming tips, strategies, and news from Big Mumbai Game. Expert advice to improve your gaming skills and maximize your winnings.",
          url: "https://bigmumbaimumbai.com/blog",
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-blue-800 text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Big Mumbai Game Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Expert gaming tips, strategies, and insights to help you win big
            </p>
            
            <Link href="/register" className="btn-primary text-xl px-12 py-5 bg-red-600 hover:bg-red-700 inline-flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Register & Start Winning
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss our most popular and informative gaming content
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-600 text-sm">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/blog/${featuredPost.id}`} className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link href="/register" className="btn-secondary text-lg px-8 py-4 inline-flex items-center">
                    <Trophy className="w-5 h-5 mr-2" />
                    Apply Strategies & Win
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl mx-auto flex items-center justify-center">
                  <FileText className="w-32 h-32 text-primary-600" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
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
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find the content that matches your interests and gaming needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} articles</p>
              </motion.div>
            ))}
          </div>

          {/* CTA after categories */}
          <div className="text-center">
            <Link href="/register" className="btn-primary text-xl px-12 py-5 inline-flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Start Learning & Winning
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Gaming Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest strategies, tips, and insights from gaming experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 card-hover"
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <FileText className="w-24 h-24 text-primary-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={`/blog/${post.id}`} className="flex-1 btn-secondary text-sm py-3 px-4 inline-flex items-center justify-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Read More
                    </Link>
                    <Link href="/register" className="flex-1 btn-primary text-sm py-3 px-4 inline-flex items-center justify-center">
                      <Trophy className="w-4 h-4 mr-2" />
                      Apply & Win
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA after blog posts */}
          <div className="text-center">
            <Link href="/register" className="btn-primary text-xl px-12 py-5 inline-flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Ready to Apply These Strategies?
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-3xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with Gaming Tips
              </h3>
              <p className="text-xl mb-8 text-gray-100">
                Get the latest strategies and tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-200 mt-4">
                Plus, get exclusive access to bonus codes and special offers!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-12 rounded-3xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Knowledge is Power - Now Use It!
              </h3>
              <p className="text-xl mb-8 text-gray-100">
                You've learned the strategies, now it's time to put them into action and start winning!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                  <Trophy className="w-6 h-6 mr-2" />
                  Register & Start Winning
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

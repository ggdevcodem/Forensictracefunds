'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Lock, Target, Zap } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Blockchain Forensics',
    description: 'Advanced analysis of blockchain transactions to track and identify assets',
    href: '/en/blockchain-forensics',
  },
  {
    icon: Lock,
    title: 'Crypto Recovery',
    description: 'Recover lost or stolen cryptocurrency with our expert team',
    href: '/en/crypto-recovery',
  },
  {
    icon: Target,
    title: 'Wallet Decryption',
    description: 'Secure wallet decryption and key recovery services',
    href: '/en/wallet-decryption',
  },
  {
    icon: Zap,
    title: 'DeFi Compliance',
    description: 'Ensure compliance with DeFi regulations and standards',
    href: '/en/defi-compliance',
  },
]

export default function Home() {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">ForensicTraceFund</div>
          <nav className="hidden md:flex gap-8">
            <Link href="/en/about" className="hover:text-primary-600">About</Link>
            <Link href="/en/solutions" className="hover:text-primary-600">Solutions</Link>
            <Link href="/en/contact" className="hover:text-primary-600">Contact</Link>
            <Link href="/en/login" className="hover:text-primary-600">Login</Link>
          </nav>
          <Link href="/en/signup" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Recover Your Crypto Assets</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Professional blockchain forensics and crypto recovery services
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/en/signup" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center gap-2">
                Start Recovery <ArrowRight size={20} />
              </Link>
              <Link href="/en/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.href} href={service.href}>
                  <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition cursor-pointer h-full">
                    <Icon className="text-primary-600 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="text-primary-600 font-semibold flex items-center gap-2">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Recover Your Assets?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Our expert team is ready to help you recover your lost or stolen cryptocurrency
          </p>
          <Link href="/en/signup" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center gap-2">
            Get Started Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ForensicTraceFund</h3>
              <p className="text-gray-400">Professional blockchain forensics and crypto recovery</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en/blockchain-forensics" className="hover:text-white">Blockchain Forensics</Link></li>
                <li><Link href="/en/crypto-recovery" className="hover:text-white">Crypto Recovery</Link></li>
                <li><Link href="/en/solutions" className="hover:text-white">All Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en/about" className="hover:text-white">About</Link></li>
                <li><Link href="/en/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/en/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en/login" className="hover:text-white">Login</Link></li>
                <li><Link href="/en/signup" className="hover:text-white">Sign Up</Link></li>
                <li><Link href="/en/forgot-password" className="hover:text-white">Forgot Password</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ForensicTraceFund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

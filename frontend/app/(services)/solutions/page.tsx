'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Lock, Target, Zap, AlertCircle, TrendingUp } from 'lucide-react'

const solutions = [
  {
    icon: Shield,
    title: 'Blockchain Forensics',
    description: 'Advanced analysis of blockchain transactions to identify and trace digital assets',
    href: '/en/blockchain-forensics',
    features: ['Transaction analysis', 'Wallet tracking', 'Fund identification'],
  },
  {
    icon: Lock,
    title: 'Crypto Recovery',
    description: 'Expert recovery of lost or stolen cryptocurrency through forensic analysis',
    href: '/en/crypto-recovery',
    features: ['Theft recovery', 'Scam asset retrieval', 'Legal support'],
  },
  {
    icon: Target,
    title: 'Wallet Decryption',
    description: 'Secure wallet decryption and key recovery services',
    href: '/en/wallet-decryption',
    features: ['Key recovery', 'Secure access', 'Data protection'],
  },
  {
    icon: AlertCircle,
    title: 'Asset Identification',
    description: 'Identify and locate cryptocurrency assets across blockchain networks',
    href: '/en/crypto-asset-identification',
    features: ['Asset scanning', 'Ownership verification', 'Reporting'],
  },
  {
    icon: TrendingUp,
    title: 'Threat Intelligence',
    description: 'Real-time threat monitoring and intelligence for crypto platforms',
    href: '/en/threat-intelligence',
    features: ['Risk assessment', 'Monitoring', 'Alerts'],
  },
  {
    icon: Zap,
    title: 'DeFi Compliance',
    description: 'Comprehensive compliance solutions for DeFi platforms and protocols',
    href: '/en/defi-compliance',
    features: ['Regulatory guidance', 'AML/KYC', 'Risk management'],
  },
]

export default function SolutionsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/en" className="text-2xl font-bold text-primary-600">ForensicTraceFund</Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/en/about" className="hover:text-primary-600">About</Link>
            <Link href="/en/solutions" className="text-primary-600 font-semibold">Solutions</Link>
            <Link href="/en/contact" className="hover:text-primary-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Comprehensive blockchain forensics and cryptocurrency recovery services
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <Link key={solution.href} href={solution.href}>
                  <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition h-full flex flex-col">
                    <Icon className="text-primary-600 mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{solution.description}</p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Assessment', description: 'Initial case evaluation and forensic analysis' },
              { step: '2', title: 'Investigation', description: 'Deep blockchain analysis and tracing' },
              { step: '3', title: 'Recovery', description: 'Recovery coordination and execution' },
              { step: '4', title: 'Resolution', description: 'Asset return and documentation' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white p-8 rounded-lg shadow text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">Choose a solution and let us help you recover your assets</p>
          <Link href="/en/signup" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center gap-2">
            Get Started Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ForensicTraceFund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

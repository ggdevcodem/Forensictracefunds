'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, TrendingUp, Lock } from 'lucide-react'

export default function BlockchainForensicsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/en" className="text-2xl font-bold text-primary-600">ForensicTraceFund</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Blockchain Forensics</h1>
          <p className="text-xl text-primary-100 max-w-2xl">Advanced analysis and tracing of blockchain transactions to identify and recover digital assets</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What is Blockchain Forensics?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Blockchain forensics is the process of analyzing blockchain transactions to trace and identify the movement of cryptocurrency assets across the network.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced tools and expertise allow us to track transactions, identify wallet addresses, and trace stolen or lost funds through complex transaction histories.
              </p>
              <Link href="/en/contact" className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Request Analysis <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-primary-600">
                <Shield size={64} className="mx-auto mb-4" />
                <p className="text-xl font-bold">Real-time Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Bitcoin Analysis', description: 'Trace BTC transactions across the network' },
              { title: 'Ethereum Analysis', description: 'Track ETH and ERC-20 token movements' },
              { title: 'Wallet Identification', description: 'Identify ownership of blockchain addresses' },
              { title: 'Risk Scoring', description: 'Assess transaction risk and compliance status' },
              { title: 'Exchange Tracking', description: 'Monitor funds moving to and from exchanges' },
              { title: 'Smart Contract Analysis', description: 'Analyze DeFi and smart contract interactions' },
            ].map((cap) => (
              <div key={cap.title} className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-primary-600">{cap.title}</h3>
                <p className="text-gray-600">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Assessment', description: 'Initial case review and scope determination' },
              { step: 2, title: 'Analysis', description: 'Deep blockchain forensic investigation' },
              { step: 3, title: 'Tracing', description: 'Follow asset movement through network' },
              { step: 4, title: 'Report', description: 'Detailed findings and recommendations' },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose ForensicTraceFund?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Advanced Technology',
                description: 'Cutting-edge forensic analysis tools and AI-powered tracking',
              },
              {
                icon: TrendingUp,
                title: 'Proven Track Record',
                description: '$500M+ in assets successfully traced and recovered',
              },
              {
                icon: CheckCircle,
                title: 'Expert Team',
                description: 'Certified blockchain analysts with law enforcement experience',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white p-8 rounded-lg shadow">
                  <Icon className="text-primary-600 mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Blockchain Forensics?</h2>
          <p className="text-xl mb-8 text-primary-100">Our expert team is ready to analyze and trace your assets</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/en/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center gap-2">
              Request Analysis <ArrowRight size={20} />
            </Link>
            <Link href="/en/solutions" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600">
              View All Solutions
            </Link>
          </div>
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

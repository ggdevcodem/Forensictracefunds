'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const values = [
  { title: 'Trust', description: 'We operate with complete transparency and integrity' },
  { title: 'Excellence', description: 'Delivering world-class forensics and recovery services' },
  { title: 'Security', description: 'Protecting your assets and data with military-grade encryption' },
  { title: 'Innovation', description: 'Using cutting-edge blockchain analysis technology' },
]

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/en" className="text-2xl font-bold text-primary-600">ForensicTraceFund</Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/en/about" className="text-primary-600 font-semibold">About</Link>
            <Link href="/en/solutions" className="hover:text-primary-600">Solutions</Link>
            <Link href="/en/contact" className="hover:text-primary-600">Contact</Link>
            <Link href="/en/login" className="hover:text-primary-600">Login</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About ForensicTraceFund</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Leading the industry in blockchain forensics and cryptocurrency recovery since 2020
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                ForensicTraceFund is dedicated to recovering lost and stolen cryptocurrency assets while advancing blockchain security and compliance standards globally.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We combine advanced forensic analysis, legal expertise, and technology to help individuals and organizations recover their digital assets and protect against future threats.
              </p>
              <Link href="/en/contact" className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Get in Touch <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-primary-600">
                <p className="text-6xl font-bold">$500M+</p>
                <p className="text-xl mt-2">Assets Recovered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                <CheckCircle className="text-primary-600 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Blockchain Analysis</h3>
              <p className="text-gray-600 mb-4">
                Advanced forensic analysis of blockchain transactions across Bitcoin, Ethereum, and other major networks.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-600" /> Transaction tracing</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-600" /> Wallet identification</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-600" /> Fund recovery</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Compliance</h3>
              <p className="text-gray-600 mb-4">
                Expert compliance consulting and investigations for DeFi platforms, exchanges, and institutions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-600" /> AML/KYC consulting</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-600" /> Regulatory guidance</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-600" /> Risk assessment</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Law Enforcement</h3>
              <p className="text-gray-600 mb-4">
                Supporting law enforcement agencies with advanced forensic analysis and investigation support.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-600" /> Evidence analysis</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-600" /> Expert testimony</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary-600" /> Crime investigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-primary-100">Let our expert team help you recover your assets</p>
          <div className="flex gap-4 justify-center">
            <Link href="/en/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center gap-2">
              Contact Us <ArrowRight size={20} />
            </Link>
            <Link href="/en/signup" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600">
              Get Started
            </Link>
          </div>
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
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en/about" className="hover:text-white">About</Link></li>
                <li><Link href="/en/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en/login" className="hover:text-white">Login</Link></li>
                <li><Link href="/en/signup" className="hover:text-white">Sign Up</Link></li>
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

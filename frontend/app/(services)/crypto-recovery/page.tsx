'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ServiceTemplate = ({
  title,
  subtitle,
  description,
  capabilities,
}: {
  title: string
  subtitle: string
  description: string
  capabilities: string[]
}) => (
  <div className="w-full">
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/en" className="text-2xl font-bold text-primary-600">ForensicTraceFund</Link>
      </div>
    </header>

    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-primary-100 max-w-2xl">{subtitle}</p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">{description}</p>
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((cap) => (
            <div key={cap} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-700 text-lg">{cap}</p>
            </div>
          ))}
        </div>
        <Link href="/en/contact" className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          Get Started <ArrowRight size={20} />
        </Link>
      </div>
    </section>

    <section className="bg-primary-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <Link href="/en/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center gap-2">
          Contact Us Now <ArrowRight size={20} />
        </Link>
      </div>
    </section>

    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 ForensicTraceFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
)

export default function CryptoRecoveryPage() {
  return (
    <ServiceTemplate
      title="Crypto Recovery"
      subtitle="Expert recovery of lost or stolen cryptocurrency assets"
      description="Our specialized crypto recovery service helps you retrieve lost or stolen digital assets. Using advanced blockchain forensics and legal expertise, we work to recover your cryptocurrency from theft, scams, and other security breaches."
      capabilities={[
        'Theft recovery and asset tracing',
        'Scam and fraud investigation',
        'Exchange recovery coordination',
        'Legal support and documentation',
        'Recovery success rate tracking',
        'Confidential case management',
      ]}
    />
  )
}

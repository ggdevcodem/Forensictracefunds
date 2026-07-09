'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ServicePage = ({
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
        <h2 className="text-3xl font-bold mb-8">Capabilities</h2>
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

export function CryptoAssetIdentificationPage() {
  return (
    <ServicePage
      title="Crypto Asset Identification"
      subtitle="Identify and locate cryptocurrency assets across blockchain networks"
      description="Our asset identification service helps you discover and verify cryptocurrency holdings. Using advanced blockchain scanning and analysis, we can locate assets, verify ownership, and provide comprehensive asset reports."
      capabilities={[
        'Multi-chain asset scanning',
        'Ownership verification',
        'Asset valuation reports',
        'Risk assessment analysis',
        'Compliance verification',
        'Historical tracking and audits',
      ]}
    />
  )
}

export function WalletPage() {
  return (
    <ServicePage
      title="Wallet Services"
      subtitle="Comprehensive wallet management and security solutions"
      description="Our wallet services provide secure management, recovery, and optimization of your cryptocurrency holdings. We offer recovery assistance, security audits, and wallet migration services."
      capabilities={[
        'Wallet security audits',
        'Multi-signature wallet setup',
        'Cold storage implementation',
        'Wallet migration services',
        'Access recovery assistance',
        'Regular security monitoring',
      ]}
    />
  )
}

export function FinancePage() {
  return (
    <ServicePage
      title="Finance Services"
      subtitle="Cryptocurrency-backed lending and financial solutions"
      description="Our finance services provide access to cryptocurrency-backed loans without traditional credit checks. Secure your digital assets while maintaining liquidity."
      capabilities={[
        'Crypto-backed loans',
        'Competitive interest rates',
        'Fast approval process',
        'No credit check required',
        'Flexible repayment terms',
        'Secure asset collateral',
      ]}
    />
  )
}

export function ThreatIntelligencePage() {
  return (
    <ServicePage
      title="Threat Intelligence"
      subtitle="Real-time threat monitoring and security intelligence for crypto platforms"
      description="Our threat intelligence service provides real-time monitoring, risk alerts, and security intelligence for cryptocurrency platforms and institutions."
      capabilities={[
        'Real-time threat monitoring',
        'Anomaly detection systems',
        'Risk alerts and notifications',
        'Vulnerability assessments',
        'Fraud pattern analysis',
        'Custom reporting dashboards',
      ]}
    />
  )
}

export function ComplianceInvestigationsPage() {
  return (
    <ServicePage
      title="Compliance Investigations"
      subtitle="Comprehensive compliance and investigation services for crypto businesses"
      description="Our compliance investigation services help ensure your organization meets all regulatory requirements and AML/KYC standards."
      capabilities={[
        'AML/KYC compliance audits',
        'Transaction monitoring',
        'Sanction screening',
        'Regulatory reporting',
        'Investigation support',
        'Documentation and evidence',
      ]}
    />
  )
}

export function DeFiCompliancePage() {
  return (
    <ServicePage
      title="DeFi Compliance"
      subtitle="Specialized compliance solutions for decentralized finance platforms"
      description="Our DeFi compliance service provides guidance for decentralized finance protocols and platforms navigating complex regulatory landscapes."
      capabilities={[
        'DeFi protocol analysis',
        'Regulatory guidance',
        'Smart contract audits',
        'Risk assessment',
        'Compliance documentation',
        'Ongoing monitoring support',
      ]}
    />
  )
}

export function LawEnforcementPage() {
  return (
    <ServicePage
      title="Law Enforcement Services"
      subtitle="Blockchain forensics and investigation support for law enforcement agencies"
      description="We partner with law enforcement agencies to provide advanced blockchain forensic analysis and investigation support for cryptocurrency-related crimes."
      capabilities={[
        'Criminal investigation support',
        'Evidence analysis and documentation',
        'Expert witness testimony',
        'Training and consultation',
        'Rapid response investigations',
        'Agency coordination support',
      ]}
    />
  )
}

'use client'

import Link from 'next/link'
import { ArrowRight, Zap, Lock, TrendingUp } from 'lucide-react'

export default function AirdropPage() {
  return (
    <div className="w-full">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/en" className="text-2xl font-bold text-primary-600">ForensicTraceFund</Link>
        </div>
      </header>

      <section className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap size={64} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">ForensicTraceFund Airdrop</h1>
          <p className="text-xl text-purple-100">Claim your free tokens today</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <TrendingUp size={40} className="mx-auto mb-4 text-purple-500" />
              <h3 className="text-2xl font-bold mb-2">Total Distribution</h3>
              <p className="text-4xl font-bold text-purple-500">$50,000</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Lock size={40} className="mx-auto mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold mb-2">Security</h3>
              <p className="text-lg font-semibold text-blue-500">Smart Contract Verified</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Zap size={40} className="mx-auto mb-4 text-orange-500" />
              <h3 className="text-2xl font-bold mb-2">Distribution</h3>
              <p className="text-2xl font-bold text-orange-500">50% Bonus</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Claim Your Tokens</h2>
            <ol className="text-lg text-gray-700 space-y-4 max-w-2xl mx-auto mb-8">
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <span>Create a ForensicTraceFund account</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <span>Complete email verification</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <span>Enter your wallet address</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <span>Claim your airdrop tokens</span>
              </li>
            </ol>
            <Link href="/en/signup" className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 inline-flex items-center gap-2">
              Claim Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Airdrop Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Token Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Token Name:</strong> ForensicTraceFund</li>
                <li><strong>Symbol:</strong> FTF</li>
                <li><strong>Network:</strong> Ethereum</li>
                <li><strong>Token Type:</strong> ERC-20</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Distribution Schedule</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Airdrop Period:</strong> 30 days</li>
                <li><strong>Gas Fees:</strong> Covered by platform</li>
                <li><strong>Minimum Claim:</strong> None</li>
                <li><strong>Maximum Claim:</strong> Unlimited</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Is there a minimum wallet balance required?</h3>
              <p className="text-gray-700">No, there is no minimum wallet balance required to claim the airdrop.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">What wallet types are supported?</h3>
              <p className="text-gray-700">We support Ethereum-compatible wallets including MetaMask, Ledger, Trezor, and others.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">When will I receive my tokens?</h3>
              <p className="text-gray-700">Tokens are distributed immediately after claiming within the airdrop period.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">Can I claim multiple times?</h3>
              <p className="text-gray-700">Each account can claim once. Multiple accounts are not allowed.</p>
            </div>
          </div>
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
}

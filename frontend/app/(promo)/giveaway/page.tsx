'use client'

import Link from 'next/link'
import { ArrowRight, Gift, Clock, Users } from 'lucide-react'

export default function GiveawayPage() {
  return (
    <div className="w-full">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/en" className="text-2xl font-bold text-primary-600">ForensicTraceFund</Link>
        </div>
      </header>

      <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift size={64} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Limited Time Giveaway!</h1>
          <p className="text-xl text-green-100">Win cryptocurrency and premium services</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Gift size={40} className="mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-bold mb-2">Total Prize Pool</h3>
              <p className="text-4xl font-bold text-green-500">$100,000</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Users size={40} className="mx-auto mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold mb-2">Winners</h3>
              <p className="text-4xl font-bold text-blue-500">100+</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Clock size={40} className="mx-auto mb-4 text-orange-500" />
              <h3 className="text-2xl font-bold mb-2">Time Left</h3>
              <p className="text-2xl font-bold text-orange-500">LIMITED TIME</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">How to Participate</h2>
            <ol className="text-lg text-gray-700 space-y-4 max-w-2xl mx-auto mb-8">
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <span>Create or sign into your ForensicTraceFund account</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <span>Verify your email address</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <span>Enter the giveaway and follow participation requirements</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <span>Wait for winner announcement</span>
              </li>
            </ol>
            <Link href="/en/signup" className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 inline-flex items-center gap-2">
              Join Giveaway <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Prize Distribution</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-green-500">Grand Prize</h3>
              <p className="text-3xl font-bold mb-2">$10,000</p>
              <p className="text-gray-600">1 winner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-green-500">Second Prize</h3>
              <p className="text-3xl font-bold mb-2">$5,000</p>
              <p className="text-gray-600">3 winners</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-green-500">Third Prize</h3>
              <p className="text-3xl font-bold mb-2">$1,000</p>
              <p className="text-gray-600">10 winners</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-green-500">Participation Rewards</h3>
              <p className="text-3xl font-bold mb-2">$100+</p>
              <p className="text-gray-600">86+ winners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Terms & Eligibility</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-bold mb-2">Eligibility Requirements:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Must be 18 years or older</li>
                <li>Must have a valid ForensicTraceFund account</li>
                <li>Must comply with all local laws and regulations</li>
                <li>Residents of certain jurisdictions may be restricted</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">How Winners Are Selected:</h3>
              <p>Winners are selected randomly from all eligible participants. Winners will be notified via email.</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-blue-700">
                <strong>Disclaimer:</strong> This giveaway is subject to all applicable laws and regulations. See full terms for complete details.
              </p>
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

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: 'recovery',
    amount: '',
    message: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit')
      }

      setSuccess('Message sent! We will contact you within 24 hours.')
      setFormData({ name: '', email: '', phone: '', caseType: 'recovery', amount: '', message: '' })
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/en" className="text-2xl font-bold text-primary-600">ForensicTraceFund</Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/en/about" className="hover:text-primary-600">About</Link>
            <Link href="/en/solutions" className="hover:text-primary-600">Solutions</Link>
            <Link href="/en/contact" className="text-primary-600 font-semibold">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-primary-100">Contact our expert team for assistance</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Email</h3>
              <p className="text-gray-600 mb-2">contact@forensictracefund.com</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Phone</h3>
              <p className="text-gray-600 mb-2">+1 (800) FORENSIC</p>
              <p className="text-sm text-gray-500">Monday - Friday, 9am-6pm EST</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">Response Time</h3>
              <p className="text-gray-600 mb-2">Urgent cases: 4 hours</p>
              <p className="text-sm text-gray-500">Standard cases: 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Send us a Message</h2>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <p className="text-green-700 text-sm">{success}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Case Type</label>
                  <select
                    value={formData.caseType}
                    onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="recovery">Asset Recovery</option>
                    <option value="forensics">Blockchain Forensics</option>
                    <option value="compliance">Compliance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount Involved (USD, optional)</label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  minLength={50}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="Please describe your situation..."
                />
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/200 characters minimum</p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 disabled:bg-gray-400 transition flex items-center justify-center gap-2"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send size={20} />}
              </button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Confidentiality:</strong> All communications are encrypted and treated with complete confidentiality.
              </p>
            </div>
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

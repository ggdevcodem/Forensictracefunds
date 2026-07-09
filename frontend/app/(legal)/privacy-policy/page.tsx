'use client'

import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/en" className="text-2xl font-bold text-primary-600">ForensicTraceFund</Link>
        </div>
      </header>

      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: July 9, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          ForensicTraceFund ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website forensictracefund.com.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
        <p className="text-gray-700 mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Personal Data:</strong> Name, email address, phone number, password</li>
          <li><strong>Financial Information:</strong> Payment methods, wallet addresses, transaction history</li>
          <li><strong>Technical Data:</strong> IP address, browser type, pages visited, time stamps</li>
          <li><strong>Usage Data:</strong> How you interact with our service</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Your Information</h2>
        <p className="text-gray-700 mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Create and manage your account</li>
          <li>Process transactions and send related information</li>
          <li>Email regarding your account or order</li>
          <li>Fulfill and manage purchases, orders, payments, and transactions</li>
          <li>Generate a personal profile to make future visits easier</li>
          <li>Increase the efficiency and operation of the Site</li>
          <li>Monitor and analyze usage and trends to improve your experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure of Your Information</h2>
        <p className="text-gray-700 mb-4">We may share your information with third parties in certain circumstances:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Service Providers:</strong> To assist us in operating our Site and conducting business</li>
          <li><strong>Law Enforcement:</strong> When required by law or to comply with legal processes</li>
          <li><strong>Business Partners:</strong> To offer joint services (with your consent)</li>
          <li><strong>Successors:</strong> In case of merger, acquisition, or asset sale</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Security of Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Email: privacy@forensictracefund.com</li>
          <li>Website: https://forensictracefund.com</li>
          <li>Mailing Address: ForensicTraceFund, [Address]</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Your continued use of the Site following the posting of revised Privacy Policy means that you accept and agree to the changes.
        </p>
      </div>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ForensicTraceFund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

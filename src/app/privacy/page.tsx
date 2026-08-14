import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <span className="badge mb-6">Legal</span>
              <h1 className="font-display text-fluid-5xl font-bold text-brown mb-8">
                Privacy Policy
              </h1>
              
              <div className="prose prose-lg text-gray-500">
                <p className="text-sm text-gray-400 mb-8">
                  Last updated: January 2024
                </p>

                <h2 className="font-display text-2xl font-bold text-brown mt-8 mb-4">
                  1. Introduction
                </h2>
                <p>
                  Contact to Hire ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website contacttohire.in or use our recruitment services.
                </p>

                <h2 className="font-display text-2xl font-bold text-brown mt-8 mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="font-display text-xl font-bold text-brown mt-6 mb-3">
                  Personal Information
                </h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Register as a candidate or employer</li>
                  <li>Submit your resume or CV</li>
                  <li>Fill out contact forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="mt-4">This information may include:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Name, email address, phone number</li>
                  <li>Professional qualifications and work history</li>
                  <li>Employment preferences and career goals</li>
                  <li>Company information (for employers)</li>
                </ul>

                <h2 className="font-display text-2xl font-bold text-brown mt-8 mb-4">
                  3. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Provide recruitment and placement services</li>
                  <li>Match candidates with suitable job opportunities</li>
                  <li>Communicate with you about our services</li>
                  <li>Send relevant job alerts and market insights</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="font-display text-2xl font-bold text-brown mt-8 mb-4">
                  4. Information Sharing
                </h2>
                <p>
                  We may share your personal information with potential employers (for candidates) 
                  or with candidates (for employers) as part of our recruitment services. We may also 
                  share information with:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>

                <h2 className="font-display text-2xl font-bold text-brown mt-8 mb-4">
                  5. GDPR Compliance
                </h2>
                <p>
                  As we operate across India and EMEA regions, we comply with the General Data 
                  Protection Regulation (GDPR) for our European users. You have the right to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                </ul>

                <h2 className="font-display text-2xl font-bold text-brown mt-8 mb-4">
                  6. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="font-display text-2xl font-bold text-brown mt-8 mb-4">
                  7. Cookies
                </h2>
                <p>
                  Our website uses cookies to enhance your browsing experience. You can control 
                  cookie settings through your browser preferences.
                </p>

                <h2 className="font-display text-2xl font-bold text-brown mt-8 mb-4">
                  8. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-cream-dark rounded-xl p-6 mt-4">
                  <p className="font-bold text-brown">Contact to Hire</p>
                  <p>B/105, Gokul Pratham</p>
                  <p>Nr. Tapovan Circle, Chandkheda</p>
                  <p>Ahmedabad – 382424, Gujarat – INDIA</p>
                  <p className="mt-2">Email: info@contacttohire.in</p>
                  <p>Phone: +91-9601570167</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
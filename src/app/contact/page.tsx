'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import {
  MapPin, Phone, Mail, Clock, Send, ArrowRight,
  Briefcase, User, Building2, Check, AlertCircle
} from '@/components/ui/Icon'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

const offices = [
  {
    city: 'Ahmedabad',
    country: 'India',
    type: 'Headquarters',
    address: 'B/105, Gokul Pratham, Nr. Tapovan Circle, Chandkheda, Ahmedabad – 382424, Gujarat',
    phone: '+91-9601570167',
    email: 'info@contacttohire.in',
    timezone: 'IST',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    flag: '🇮🇳',
  },
]

const timeZones = [
  { city: 'Ahmedabad', zone: 'IST', offset: '+5:30', flag: '🇮🇳' },
  { city: 'Dubai', zone: 'GST', offset: '+4:00', flag: '🇦🇪' },
  { city: 'London', zone: 'GMT', offset: '+0:00', flag: '🇬🇧' },
  { city: 'Frankfurt', zone: 'CET', offset: '+1:00', flag: '🇩🇪' },
  { city: 'Riyadh', zone: 'AST', offset: '+3:00', flag: '🇸🇦' },
]

const faqs = [
  {
    question: 'How long does the recruitment process typically take?',
    answer: 'Our average time-to-fill is 21-45 days depending on the role complexity. Executive searches may take longer.',
  },
  {
    question: 'Do you provide relocation support?',
    answer: 'Yes, we offer comprehensive relocation assistance including visa guidance, documentation, and settling-in support.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We specialize in Technology, Finance, Healthcare, Manufacturing, and Energy sectors across EMEA.',
  },
  {
    question: 'Is there a fee for candidates?',
    answer: 'No, our services are completely free for job seekers. We are paid by the hiring companies.',
  },
]

export default function ContactPage() {
  const [formType, setFormType] = useState<'employer' | 'candidate'>('employer')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Honor ?type=candidate|employer links (hero CTAs, ticker, CTA card)
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get('type')
    if (type === 'candidate' || type === 'employer') {
      setFormType(type)
      // Let the page settle, then bring the form into view
      setTimeout(() => {
        document
          .getElementById('contact-form')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    }
  }, [])

  const getTimeInZone = (offset: string) => {
    const [hours, minutes] = offset.split(':').map(Number)
    const sign = offset.startsWith('-') ? -1 : 1
    const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000
    const time = new Date(utc + sign * (hours * 3600000 + minutes * 60000))
    return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitState('idle')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: formType }),
      })
      const data = await res.json()

      if (res.ok && data.ok) {
        setSubmitState('success')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      } else {
        setSubmitState('error')
        setSubmitError(
          data.error ||
            'Could not send your message. Please try again or email us directly at info@contacttohire.in.'
        )
      }
    } catch {
      setSubmitState('error')
      setSubmitError(
        'Network error — please try again, or email us directly at info@contacttohire.in.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Get in Touch
              </span>
              <h1 className="font-display text-fluid-hero font-extrabold text-gray-900 mb-6 leading-tight">
                Let's Find You a Job —<br />
                <span className="relative inline-block">
                  <span className="relative z-10">or Your Next Great Hire</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 bg-brand-lime -z-0" />
                </span>
              </h1>
              <p className="text-fluid-xl text-gray-500 max-w-2xl mx-auto">
                Whether you're seeking top talent or your next career opportunity, 
                we're here to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Global Clock */}
        <section className="py-8 bg-surface-dark text-white">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {timeZones.map((tz) => (
                <div key={tz.city} className="text-center">
                  <span className="text-xl mr-1">{tz.flag}</span>
                  <span className="text-sm text-gray-400">{tz.city}</span>
                  <div className="font-display text-lg font-extrabold text-brand-lime">
                    {getTimeInZone(tz.offset)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Section */}
              <div id="contact-form" className="scroll-mt-24">
                <h2 className="font-display text-fluid-3xl font-extrabold text-gray-900 mb-6">
                  Start the Conversation
                </h2>

                {/* Form Type Toggle */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setFormType('employer')}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                      formType === 'employer'
                        ? 'bg-brand-violet text-white shadow-medium'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <Briefcase className="w-5 h-5 inline mr-2" />
                    I'm Hiring
                  </button>
                  <button
                    onClick={() => setFormType('candidate')}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                      formType === 'candidate'
                        ? 'bg-brand-violet text-white shadow-medium'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <User className="w-5 h-5 inline mr-2" />
                    I'm Job Seeking
                  </button>
                </div>

                {/* Form */}
                {submitState === 'success' ? (
                  <div className="bg-brand-lime/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-brand-lime text-gray-900 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-extrabold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500">
                      Thanks for reaching out — we'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitState === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600">
                          {submitError}{' '}
                          <a href="mailto:info@contacttohire.in" className="underline font-semibold">
                            Email us directly
                          </a>
                        </p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-violet focus:ring-2 focus:ring-brand-violet/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-brown mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      {formType === 'employer' && (
                        <div>
                          <label className="block text-sm font-medium text-brown mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required={formType === 'employer'}
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all"
                            placeholder="Company Inc."
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brown mb-2">
                        {formType === 'employer' ? 'Tell us about your hiring needs' : 'Tell us about your career goals'}
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all resize-none"
                        placeholder={formType === 'employer' 
                          ? 'What roles are you looking to fill? How many positions? Timeline?' 
                          : 'What kind of role are you looking for? Preferred locations? Experience level?'
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={<Send className="w-5 h-5" />}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-fluid-3xl font-bold text-brown mb-6">
                  Contact Information
                </h2>

                {/* Office Card */}
                {offices.map((office) => (
                  <div key={office.city} className="bg-white rounded-2xl p-8 border border-gray-200 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{office.flag}</span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-brown">
                          {office.city}
                        </h3>
                        <span className="text-emerald text-sm font-medium">{office.type}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-emerald flex-shrink-0 mt-1" />
                        <span className="text-gray-500">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-emerald flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="text-brown hover:text-emerald transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-emerald flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-brown hover:text-emerald transition-colors">
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-emerald flex-shrink-0" />
                        <span className="text-gray-500">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Quick Contact */}
                <div className="bg-surface-dark rounded-2xl p-8 text-white">
                  <h3 className="font-display text-xl font-bold mb-4">
                    Prefer a Quick Chat?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Our team is available during business hours for immediate assistance.
                  </p>
                  <div className="space-y-3">
                    {/* Call Now — violet pill */}
                    <a
                      href="tel:+919601570167"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-brand-violet text-white rounded-full font-semibold hover:bg-brand-violet-dark transition-colors"
                    >
                      Call Now
                      <Phone className="w-5 h-5" />
                    </a>
                    {/* WhatsApp Us — green, subtle rounding */}
                    <a
                      href="https://wa.me/919601570167"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1EBE5A] transition-colors"
                    >
                      WhatsApp Us
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-cream-dark">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-emerald text-sm uppercase tracking-widest font-medium">
                  Common Questions
                </span>
                <h2 className="font-display text-fluid-4xl font-bold text-brown mt-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-medium text-brown pr-4">{faq.question}</span>
                      <ArrowRight className="w-5 h-5 text-emerald transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-500">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-violet/10 text-brand-violet text-xs font-bold uppercase tracking-widest rounded-full">
                Find Us
              </span>
              <h2 className="font-display text-fluid-4xl font-extrabold text-gray-900 mt-4">
                Visit Our Office
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                B/105, Gokul Pratham, Nr. Tapovan Circle, Chandkheda,
                Ahmedabad – 382424, Gujarat, India
              </p>
            </div>

            <div className="relative rounded-[28px] overflow-hidden shadow-large border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=B%2F105%2C%20Gokul%20Pratham%2C%20Tapovan%20Circle%2C%20Chandkheda%2C%20Ahmedabad%2C%20Gujarat%20382424&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Contact2Hire office — Gokul Pratham, Chandkheda, Ahmedabad"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[380px] md:h-[480px] border-0"
              />

              {/* Open in Google Maps — clickable overlay button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=B%2F105%2C%20Gokul%20Pratham%2C%20Tapovan%20Circle%2C%20Chandkheda%2C%20Ahmedabad%2C%20Gujarat%20382424"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-6 py-3 bg-brand-lime text-gray-900 rounded-full font-semibold shadow-large hover:bg-brand-lime-bright transition-colors whitespace-nowrap"
              >
                Open in Google Maps
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
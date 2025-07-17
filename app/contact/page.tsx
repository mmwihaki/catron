"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Headphones,
  Globe,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Send to WhatsApp
    const message = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Inquiry Type: ${formData.inquiryType}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const whatsappUrl = `https://wa.me/+254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitStatus("success");
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    });
  };

  const contactMethods = [
    {
      icon: "📱",
      title: "WhatsApp Support",
      description: "Instant support via WhatsApp",
      details: "+254 700 000 000",
      action: "Chat Now",
      link: "https://wa.me/+254700000000",
      available: "24/7 Support",
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak with our technical team",
      details: "+254 700 000 000",
      action: "Call Now",
      link: "tel:+254700000000",
      available: "Mon-Sat: 8AM-6PM",
    },
    {
      icon: "✉️",
      title: "Email Support",
      description: "Send us detailed inquiries",
      details: "info@brator.co.ke",
      action: "Send Email",
      link: "mailto:info@brator.co.ke",
      available: "Response within 2 hours",
    },
    {
      icon: "📍",
      title: "Visit Our Store",
      description: "Physical location in Nairobi",
      details: "Industrial Area, Nairobi",
      action: "Get Directions",
      link: "#map",
      available: "Mon-Sat: 8AM-6PM",
    },
  ];

  const departments = [
    {
      name: "Technical Support",
      description: "Part fitment and compatibility questions",
      email: "tech@brator.co.ke",
      phone: "+254 700 000 001",
    },
    {
      name: "Sales Inquiries",
      description: "Bulk orders and special requests",
      email: "sales@brator.co.ke",
      phone: "+254 700 000 002",
    },
    {
      name: "Customer Service",
      description: "Order status and general support",
      email: "support@brator.co.ke",
      phone: "+254 700 000 003",
    },
    {
      name: "Warranty Claims",
      description: "Product warranty and returns",
      email: "warranty@brator.co.ke",
      phone: "+254 700 000 004",
    },
  ];

  const faqs = [
    {
      question: "What are your operating hours?",
      answer:
        "We're open Monday to Saturday, 8:00 AM to 6:00 PM. WhatsApp support is available 24/7.",
    },
    {
      question: "Do you offer same-day delivery in Nairobi?",
      answer:
        "Yes, for orders placed before 2:00 PM, we offer same-day delivery within Nairobi.",
    },
    {
      question: "Can I visit your physical store?",
      answer:
        "Yes, our showroom and warehouse are located in Industrial Area, Nairobi. You can visit us during business hours.",
    },
    {
      question: "Do you provide installation services?",
      answer:
        "We provide installation guides and can recommend certified mechanics in your area for complex installations.",
    },
  ];

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="header bg-white shadow-md">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <div className="logo">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  B
                </div>
                <div>
                  <div className="text-2xl font-bold text-charcoal">BRATOR</div>
                  <div className="text-xs text-silver">
                    Nissan Parts Specialist
                  </div>
                </div>
              </Link>
            </div>

            <nav className="flex items-center gap-6">
              <Link href="/" className="text-charcoal hover:text-primary">
                Home
              </Link>
              <Link href="/shop" className="text-charcoal hover:text-primary">
                Shop
              </Link>
              <Link href="/about" className="text-charcoal hover:text-primary">
                About
              </Link>
              <Link
                href="/support"
                className="text-charcoal hover:text-primary"
              >
                Support
              </Link>
              <span className="text-primary font-medium">Contact</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-background-gray py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-silver">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>›</span>
            <span className="text-charcoal">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section py-16 bg-gradient-to-r from-charcoal to-charcoal-light text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Have questions about Nissan parts? Need technical support? Our
            expert team is here to help you find the right solutions for your
            vehicle.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/+254700000000"
              className="btn whatsapp-btn btn-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              WhatsApp Us
            </a>
            <a href="tel:+254700000000" className="btn btn-outline btn-lg">
              📞 Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-xl text-silver max-w-2xl mx-auto">
              We offer multiple ways to get in touch. Pick the one that works
              best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="card text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-charcoal-light mb-3">{method.description}</p>
                <div className="font-medium text-charcoal mb-2">
                  {method.details}
                </div>
                <div className="text-sm text-silver mb-4">
                  {method.available}
                </div>
                <div className="btn btn-outline btn-sm group-hover:btn-primary transition-all">
                  {method.action}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-background-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-green-800">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">
                      Message sent successfully!
                    </span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    Your message has been forwarded to WhatsApp. We'll respond
                    shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="form-label">Inquiry Type</label>
                  <select
                    name="inquiryType"
                    className="form-select"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="form-input"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry, including vehicle information if relevant..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-600 font-medium">Closed</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span>WhatsApp Support</span>
                      <span className="text-green-600 font-medium">
                        24/7 Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b pb-3 last:border-b-0">
                      <h4 className="font-medium text-charcoal">{dept.name}</h4>
                      <p className="text-sm text-charcoal-light mb-2">
                        {dept.description}
                      </p>
                      <div className="flex flex-col gap-1 text-sm">
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-primary hover:underline"
                        >
                          {dept.email}
                        </a>
                        <a
                          href={`tel:${dept.phone}`}
                          className="text-charcoal hover:text-primary"
                        >
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-charcoal mb-1">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-charcoal-light">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href="/support" className="btn btn-outline w-full mt-4">
                  View All FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-xl text-silver max-w-2xl mx-auto">
              Located in the heart of Industrial Area, Nairobi. Easy access and
              ample parking available.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location Details */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">📍 Our Location</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-charcoal-light">
                      Brator Auto Parts
                      <br />
                      Industrial Area Road
                      <br />
                      Opposite General Motors
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium">Landmarks</h4>
                    <ul className="text-charcoal-light text-sm space-y-1">
                      <li>• Near Nyayo Stadium</li>
                      <li>• 5 minutes from CBD</li>
                      <li>• Public transport available</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">🚗 Parking & Access</h3>
                <ul className="text-charcoal-light space-y-2">
                  <li>✓ Free customer parking</li>
                  <li>✓ Wheelchair accessible</li>
                  <li>✓ Loading bay for large orders</li>
                  <li>✓ Security guard on duty</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">🛒 What to Expect</h3>
                <ul className="text-charcoal-light space-y-2">
                  <li>• Browse physical parts catalog</li>
                  <li>• Get expert fitment advice</li>
                  <li>• Same-day pickup available</li>
                  <li>• Technical consultation</li>
                  <li>• Bulk order arrangements</li>
                </ul>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="relative h-96 lg:h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden">
                {/* Map placeholder - in real implementation, use Google Maps or similar */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-4">🗺️</div>
                    <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                    <p className="mb-4">Industrial Area, Nairobi</p>
                    <a
                      href="https://maps.google.com/?q=Industrial+Area+Nairobi+Kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Need Urgent Support?</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Breakdown or urgent part requirement? Our emergency support team is
            here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://wa.me/+254700000000"
              className="card bg-white text-charcoal hover:shadow-lg"
            >
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="font-bold mb-2">Emergency WhatsApp</h3>
              <p className="text-sm text-charcoal-light mb-3">
                Available 24/7 for urgent requests
              </p>
              <div className="btn whatsapp-btn w-full">Contact Now</div>
            </a>

            <a
              href="tel:+254700000000"
              className="card bg-white text-charcoal hover:shadow-lg"
            >
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold mb-2">Emergency Hotline</h3>
              <p className="text-sm text-charcoal-light mb-3">
                Direct line to our technical team
              </p>
              <div className="btn btn-primary w-full">Call Now</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div>
                  <div className="text-xl font-bold">BRATOR</div>
                  <div className="text-xs text-gray-400">
                    Nissan Parts Specialist
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Kenya's premier destination for genuine Nissan OEM and
                performance parts.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.756-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z.001" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/shop" className="hover:text-white">
                    Shop All Parts
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white">
                    Fitment Guide
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="https://wa.me/+254700000000"
                    className="hover:text-white"
                  >
                    WhatsApp Support
                  </a>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white">
                    Installation Guides
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white">
                    Warranty Info
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>📞 +254 700 000 000</div>
                <div>✉️ info@brator.co.ke</div>
                <div>📍 Industrial Area, Nairobi</div>
                <div>🕒 Mon-Sat: 8AM-6PM</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            © 2024 Brator Auto Parts. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

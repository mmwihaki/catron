"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Car,
  Wrench,
  Users,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    vehicleInfo: "",
    message: "",
    urgency: "normal",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Talk to our experts directly",
      details: "+254 700 000 000",
      hours: "Mon-Sat: 8AM-6PM",
      color: "bg-blue-600",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick questions & instant quotes",
      details: "+254 700 000 000",
      hours: "Available 24/7",
      color: "bg-green-600",
      action: "Chat Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries & technical questions",
      details: "info@catron.co.ke",
      hours: "Response within 4 hours",
      color: "bg-red-600",
      action: "Send Email",
    },
  ];

  const locationInfo = [
    {
      title: "Main Showroom",
      address: "Industrial Area, Enterprise Road",
      city: "Nairobi, Kenya",
      hours: "Mon-Sat: 8AM-6PM, Sun: 10AM-4PM",
      services: ["Parts Sales", "Technical Consultation", "Fitment Advice"],
    },
    {
      title: "Warehouse & Distribution",
      address: "Mombasa Road, Industrial Area",
      city: "Nairobi, Kenya",
      hours: "Mon-Fri: 7AM-5PM",
      services: ["Bulk Orders", "Wholesale", "Express Shipping"],
    },
  ];

  const reasons = [
    {
      icon: Car,
      title: "Part Inquiries",
      description: "Need help finding the right part for your Nissan?",
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Installation guidance and compatibility questions",
    },
    {
      icon: Users,
      title: "Customer Service",
      description: "Order status, returns, warranty claims",
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          searchQuery=""
          setSearchQuery={() => {}}
          currentPage="contact"
        />

        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-4 text-gray-900">
              Message Sent!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for contacting Catron Auto Parts. We'll get back to you
              within 4 hours.
            </p>
            <div className="space-y-3">
              <Link
                href="/shop"
                className="block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    vehicleInfo: "",
                    message: "",
                    urgency: "normal",
                  });
                }}
                className="block w-full text-gray-600 hover:text-gray-900 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery="" setSearchQuery={() => {}} currentPage="contact" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Catron Auto Parts
          </h1>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Get expert advice, technical support, and find the perfect parts for
            your Nissan
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="font-semibold text-gray-900">
                      {method.details}
                    </p>
                    <p className="text-sm text-gray-500">{method.hours}</p>
                  </div>
                  <button
                    className={`w-full ${method.color} hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-opacity`}
                  >
                    {method.action}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Why Contact Us */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
              How Can We Help?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900">
                      {reason.title}
                    </h4>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="+254 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select a topic</option>
                      <option value="part-inquiry">Part Inquiry</option>
                      <option value="technical-support">
                        Technical Support
                      </option>
                      <option value="order-status">Order Status</option>
                      <option value="warranty-claim">Warranty Claim</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Information
                  </label>
                  <input
                    type="text"
                    name="vehicleInfo"
                    value={formData.vehicleInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="e.g., 2015 Nissan Note 1.2L DIG-S"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Help us provide better assistance by sharing your vehicle
                    details
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Please describe your inquiry in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Location Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Visit Our Locations
              </h2>

              <div className="space-y-8">
                {locationInfo.map((location, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {location.title}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-red-600 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">
                            {location.address}
                          </p>
                          <p className="text-gray-600">{location.city}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-red-600" />
                        <p className="text-gray-700">{location.hours}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Services Available:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Holiday Hours:</strong> Please call ahead during
                    public holidays as hours may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <div>
                  <div className="text-2xl font-bold">CATRON</div>
                  <div className="text-sm text-gray-300">
                    Nissan Parts Specialist
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Kenya's premier destination for genuine Nissan OEM and
                performance parts. We're committed to keeping your Nissan
                running at peak performance with quality parts and expert
                support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-white transition-colors"
                  >
                    Shop All Parts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-white transition-colors"
                  >
                    Fitment Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div>📞 +254 700 000 000</div>
                <div>✉️ info@catron.co.ke</div>
                <div>📍 Nairobi, Kenya</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-300 text-sm">
                © 2024 Catron Auto Parts. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-300">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

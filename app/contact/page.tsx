"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  User,
  MessageSquare,
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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

    // WhatsApp integration
    const phoneNumber = "+254742578910";
    const message = `*Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Inquiry Type:* ${formData.inquiryType}

*Message:*
${formData.message}

---
Sent from Catron website contact form`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Simulate form submission delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 742 578 910",
      description: "Mon-Sat: 8AM-6PM",
      action: "tel:+254742578910",
      actionText: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+254 742 578 910",
      description: "24/7 Available",
      action: "https://wa.me/+254742578910",
      actionText: "Chat Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@catron.co.ke",
      description: "We reply within 24 hours",
      action: "mailto:info@catron.co.ke",
      actionText: "Send Email",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nairobi, Kenya",
      description: "Central Business District",
      action: "#",
      actionText: "Get Directions",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "parts", label: "Parts Compatibility" },
    { value: "technical", label: "Technical Support" },
    { value: "warranty", label: "Warranty Claim" },
    { value: "returns", label: "Returns & Exchanges" },
    { value: "business", label: "Business Partnership" },
  ];

  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header searchQuery="" setSearchQuery={() => {}} currentPage="contact" />

      {/* Hero Section */}
      <section className="section-hero">
        <div className="container text-center">
          <h1 className="mb-4">Contact Our Experts</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our Nissan parts specialists for personalized assistance and expert advice
          </p>
        </div>
      </section>

      <main id="main-content" className="section">
        <div className="container">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="card-premium text-center group">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{info.title}</h3>
                  <p className="font-semibold text-gray-900 mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                  <a
                    href={info.action}
                    className="btn btn-outline btn-small"
                    target={info.action.startsWith("http") ? "_blank" : undefined}
                    rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {info.actionText}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Your message has been forwarded to WhatsApp. We'll respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="+254 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="input"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="input resize-none"
                      placeholder="Please provide details about your inquiry, including your vehicle year, model, and specific part requirements if applicable..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary w-full ${isSubmitting ? 'loading' : ''}`}
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, your message will be sent via WhatsApp for faster response times.
                  </p>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-600">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-red-600 font-medium">Closed</span>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>WhatsApp Support:</strong> Available 24/7 for urgent inquiries
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card-premium">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Catron?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Knowledge</h4>
                      <p className="text-gray-600 text-sm">Nissan specialists with years of experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Guarantee</h4>
                      <p className="text-gray-600 text-sm">100% genuine OEM and certified aftermarket parts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                      <p className="text-gray-600 text-sm">Same-day dispatch across Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                      <p className="text-gray-600 text-sm">Best value for premium automotive parts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="card bg-red-50 border-red-200">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-bold text-red-900">Emergency Parts Support</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  Need urgent parts for your Nissan? Our emergency support line is available for critical situations.
                </p>
                <a href="tel:+254742578910" className="btn btn-primary btn-small">
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

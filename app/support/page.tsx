"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("fitment");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const supportCategories = [
    {
      id: "fitment",
      title: "Fitment Guide",
      icon: "🔧",
      description: "Find the right parts for your Nissan",
    },
    {
      id: "installation",
      title: "Installation Help",
      icon: "⚙️",
      description: "Step-by-step installation guides",
    },
    {
      id: "warranty",
      title: "Warranty Info",
      icon: "🛡️",
      description: "Warranty terms and coverage",
    },
    {
      id: "returns",
      title: "Returns Policy",
      icon: "↩️",
      description: "Return and exchange process",
    },
    {
      id: "faq",
      title: "FAQ",
      icon: "❓",
      description: "Frequently asked questions",
    },
  ];

  const fitmentSteps = [
    {
      step: 1,
      title: "Identify Your Vehicle",
      description:
        "Locate your VIN number (usually on the dashboard or door frame) or know your vehicle's year, model, and engine specifications.",
      tips: [
        "VIN number provides the most accurate fitment",
        "Engine code can usually be found on the engine block",
        "Check your owner's manual for specifications",
      ],
    },
    {
      step: 2,
      title: "Find Compatible Parts",
      description:
        "Use our compatibility checker on product pages or contact our technical team for assistance.",
      tips: [
        "Always verify part numbers match",
        "Consider trim level differences",
        "Check production date ranges",
      ],
    },
    {
      step: 3,
      title: "Verify Fitment",
      description:
        "Double-check compatibility before ordering, especially for electrical and engine components.",
      tips: [
        "Contact our experts if unsure",
        "Provide clear photos of existing parts if needed",
        "Consider professional installation for complex parts",
      ],
    },
  ];

  const installationGuides = [
    {
      category: "Oil Filters",
      difficulty: "Easy",
      time: "15 minutes",
      tools: ["Oil filter wrench", "Drain pan", "Funnel"],
      steps: [
        "Warm up engine for 2-3 minutes to thin the oil",
        "Locate the oil filter (usually near the oil pan)",
        "Place drain pan under the filter",
        "Remove old filter using filter wrench (turn counter-clockwise)",
        "Clean the filter mounting surface",
        "Apply thin layer of new oil to new filter's gasket",
        "Install new filter hand-tight plus 3/4 turn",
        "Check for leaks after starting engine",
      ],
    },
    {
      category: "Air Filters",
      difficulty: "Very Easy",
      time: "10 minutes",
      tools: ["None required"],
      steps: [
        "Locate the air filter housing (usually rectangular box near engine)",
        "Open housing clips or remove screws",
        "Remove old air filter",
        "Clean housing interior with damp cloth",
        "Insert new filter (note airflow direction arrow)",
        "Close housing and secure clips/screws",
        "Ensure all clips are properly fastened",
      ],
    },
    {
      category: "Brake Pads",
      difficulty: "Hard",
      time: "2-3 hours",
      tools: ["Jack", "Jack stands", "Wrenches", "C-clamp", "Brake cleaner"],
      steps: [
        "⚠️ WARNING: Professional installation recommended",
        "Safely raise and secure vehicle",
        "Remove wheel",
        "Remove brake caliper bolts",
        "Remove old brake pads",
        "Compress caliper piston with C-clamp",
        "Install new brake pads",
        "Reinstall caliper and wheel",
        "Test brakes before driving",
      ],
    },
    {
      category: "Spark Plugs",
      difficulty: "Medium",
      time: "30-60 minutes",
      tools: ["Spark plug socket", "Torque wrench", "Gap tool"],
      steps: [
        "Ensure engine is cool",
        "Remove ignition coils or spark plug wires",
        "Clean area around spark plugs",
        "Remove old spark plugs with socket wrench",
        "Check gap on new spark plugs (0.8-1.1mm for most Nissans)",
        "Install new plugs hand-tight plus 1/2 turn",
        "Reinstall ignition coils/wires",
        "Start engine and check for smooth operation",
      ],
    },
  ];

  const faqs = [
    {
      category: "Ordering",
      question: "How do I place an order via WhatsApp?",
      answer:
        "Simply click the 'Order via WhatsApp' button on any product page. This will open WhatsApp with a pre-filled message containing the part details. You can then send it to our team who will confirm availability and guide you through payment.",
    },
    {
      category: "Ordering",
      question: "What payment methods do you accept?",
      answer:
        "We accept M-Pesa, bank transfers, cash on delivery (for Nairobi area), and major credit/debit cards. Payment details will be provided when you place your order via WhatsApp.",
    },
    {
      category: "Shipping",
      question: "How long does delivery take?",
      answer:
        "For Nairobi: Same day or next day delivery. For other major cities: 1-2 business days. For remote areas: 2-4 business days. We'll provide tracking information once your order ships.",
    },
    {
      category: "Shipping",
      question: "Do you deliver countrywide?",
      answer:
        "Yes, we deliver to all counties in Kenya. Delivery charges vary by location and will be communicated when you place your order.",
    },
    {
      category: "Parts",
      question: "Are all parts genuine OEM?",
      answer:
        "Yes, we stock only genuine Nissan OEM parts and certified aftermarket parts from reputable manufacturers. All parts come with proper documentation and warranty.",
    },
    {
      category: "Parts",
      question: "How do I know if a part fits my vehicle?",
      answer:
        "Use our compatibility checker on product pages, provide your VIN number, or contact our technical team. We verify fitment before shipping to ensure you receive the correct part.",
    },
    {
      category: "Technical",
      question: "Do you provide installation support?",
      answer:
        "Yes, we provide installation guides and technical support. For complex installations, we can recommend certified mechanics in your area.",
    },
    {
      category: "Technical",
      question: "What if I receive the wrong part?",
      answer:
        "If you receive an incorrect part due to our error, we'll arrange immediate replacement at no cost. Contact us within 24 hours of delivery with your order details.",
    },
    {
      category: "Warranty",
      question: "What warranty comes with parts?",
      answer:
        "Genuine OEM parts come with manufacturer warranty (typically 12 months/20,000km). Aftermarket parts vary by manufacturer. Warranty details are provided with each part.",
    },
    {
      category: "Warranty",
      question: "How do I claim warranty?",
      answer:
        "Contact us with your order number, photos of the defective part, and description of the issue. We'll guide you through the warranty claim process with the manufacturer.",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const faqCategories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="support" />

      {/* Hero Section */}
      <section className="hero-section py-16 bg-gradient-to-r from-charcoal to-charcoal-light text-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">
            How Can We <span className="text-primary">Help You</span>?
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Find fitment guides, installation help, warranty information, and
            answers to common questions.
          </p>

          {/* Quick Search */}
          <div className="max-w-md mx-auto">
            <div className="flex border-2 border-primary rounded-lg overflow-hidden bg-white">
              <input
                type="text"
                placeholder="Search for help..."
                className="flex-1 px-4 py-3 outline-none text-charcoal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-primary text-white px-6 py-3 hover:bg-red-700 transition-colors">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`card text-center transition-all ${
                  activeTab === category.id
                    ? "bg-primary text-white shadow-lg transform scale-105"
                    : "hover:shadow-md"
                }`}
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-bold mb-2">{category.title}</h3>
                <p
                  className={`text-sm ${activeTab === category.id ? "text-gray-200" : "text-silver"}`}
                >
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <div className="bg-white rounded-xl border shadow-md p-8">
            {activeTab === "fitment" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Vehicle Fitment Guide
                </h2>
                <p className="text-xl text-charcoal-light mb-8">
                  Ensure you get the right parts for your Nissan with our
                  comprehensive fitment guide.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {fitmentSteps.map((step) => (
                    <div key={step.step} className="relative">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>

                      <p className="text-charcoal-light mb-4">
                        {step.description}
                      </p>

                      <div className="bg-background-gray rounded-lg p-4">
                        <h4 className="font-medium mb-2">Pro Tips:</h4>
                        <ul className="text-sm text-charcoal-light space-y-1">
                          {step.tips.map((tip, index) => (
                            <li key={index}>• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-bold text-yellow-800 mb-2">Need Help?</h3>
                  <p className="text-yellow-700 mb-4">
                    Our technical experts are available to help you find the
                    right parts. Contact us via WhatsApp or phone with your
                    vehicle details.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/+254700000000"
                      className="btn whatsapp-btn"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                      WhatsApp Support
                    </a>
                    <a href="tel:+254700000000" className="btn btn-outline">
                      📞 Call Us
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "installation" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Installation Guides</h2>
                <p className="text-xl text-charcoal-light mb-8">
                  Step-by-step guides for common Nissan parts installations.
                </p>

                <div className="space-y-8">
                  {installationGuides.map((guide, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">{guide.category}</h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span
                            className={`px-3 py-1 rounded-full ${
                              guide.difficulty === "Easy"
                                ? "bg-green-100 text-green-800"
                                : guide.difficulty === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : guide.difficulty === "Very Easy"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                          >
                            {guide.difficulty}
                          </span>
                          <span className="text-silver">⏱️ {guide.time}</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-3">Required Tools:</h4>
                          <ul className="space-y-1 text-charcoal-light">
                            {guide.tools.map((tool, toolIndex) => (
                              <li key={toolIndex}>• {tool}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold mb-3">
                            Installation Steps:
                          </h4>
                          <ol className="space-y-2 text-charcoal-light">
                            {guide.steps.map((step, stepIndex) => (
                              <li
                                key={stepIndex}
                                className={
                                  step.startsWith("⚠️")
                                    ? "text-red-600 font-medium"
                                    : ""
                                }
                              >
                                {stepIndex + 1}. {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-bold text-red-800 mb-2">
                    Safety Warning
                  </h3>
                  <p className="text-red-700">
                    These guides are for informational purposes only. For
                    complex installations (especially brake systems, electrical
                    components, or engine parts), we strongly recommend
                    professional installation by a certified technician. Always
                    prioritize safety and follow proper procedures.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "warranty" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Warranty Information
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="card">
                    <h3 className="text-xl font-bold mb-4">
                      🛡️ OEM Parts Warranty
                    </h3>
                    <ul className="space-y-2 text-charcoal-light">
                      <li>
                        • <strong>Duration:</strong> 12 months or 20,000 km
                        (whichever comes first)
                      </li>
                      <li>
                        • <strong>Coverage:</strong> Manufacturing defects and
                        premature failure
                      </li>
                      <li>
                        • <strong>Claim Process:</strong> Contact us with order
                        number and issue description
                      </li>
                      <li>
                        • <strong>Requirements:</strong> Proper installation and
                        normal usage conditions
                      </li>
                    </ul>
                  </div>

                  <div className="card">
                    <h3 className="text-xl font-bold mb-4">
                      ⚙️ Aftermarket Parts Warranty
                    </h3>
                    <ul className="space-y-2 text-charcoal-light">
                      <li>
                        • <strong>Duration:</strong> Varies by manufacturer
                        (6-24 months)
                      </li>
                      <li>
                        • <strong>Coverage:</strong> As per manufacturer
                        specifications
                      </li>
                      <li>
                        • <strong>Documentation:</strong> Warranty card provided
                        with each part
                      </li>
                      <li>
                        • <strong>Support:</strong> We facilitate all warranty
                        claims
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-bold text-blue-800 mb-4">
                    How to Claim Warranty
                  </h3>
                  <ol className="space-y-2 text-blue-700">
                    <li>1. Contact us immediately when you notice an issue</li>
                    <li>2. Provide your order number and purchase date</li>
                    <li>3. Send clear photos of the defective part</li>
                    <li>4. Describe the issue and usage conditions</li>
                    <li>
                      5. We'll assess and guide you through the claim process
                    </li>
                    <li>
                      6. Approved claims result in free replacement or refund
                    </li>
                  </ol>
                </div>
              </div>
            )}

            {activeTab === "returns" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Returns & Exchange Policy
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      ✅ Acceptable Returns
                    </h3>
                    <ul className="space-y-2 text-charcoal-light">
                      <li>• Wrong part sent by our error</li>
                      <li>• Damaged during shipping</li>
                      <li>• Manufacturing defects (within warranty)</li>
                      <li>• Unopened electrical components</li>
                      <li>• Parts in original packaging</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      ❌ Non-Returnable Items
                    </h3>
                    <ul className="space-y-2 text-charcoal-light">
                      <li>• Installed parts (unless defective)</li>
                      <li>• Used fluids and consumables</li>
                      <li>• Custom-ordered parts</li>
                      <li>• Electrical parts once installed</li>
                      <li>• Parts ordered incorrectly by customer</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background-gray rounded-lg p-6 mb-6">
                  <h3 className="font-bold mb-4">Return Process</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                        1
                      </div>
                      <h4 className="font-medium mb-1">Contact Us</h4>
                      <p className="text-sm text-silver">
                        Within 7 days of delivery
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                        2
                      </div>
                      <h4 className="font-medium mb-1">Get Approval</h4>
                      <p className="text-sm text-silver">
                        Receive return authorization
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                        3
                      </div>
                      <h4 className="font-medium mb-1">Ship Back</h4>
                      <p className="text-sm text-silver">
                        We'll arrange pickup/shipping
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                        4
                      </div>
                      <h4 className="font-medium mb-1">Get Refund</h4>
                      <p className="text-sm text-silver">
                        Process within 3-5 days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-bold text-yellow-800 mb-2">
                    Important Notes
                  </h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>
                      • Returns must be initiated within 7 days of delivery
                    </li>
                    <li>
                      • All parts must be in original condition and packaging
                    </li>
                    <li>• Return shipping costs are covered for our errors</li>
                    <li>
                      • Refunds are processed to the original payment method
                    </li>
                    <li>
                      • Custom orders and special-order parts are non-returnable
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "faq" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>

                {/* FAQ Search */}
                <div className="mb-8">
                  <div className="flex border-2 border-gray-200 rounded-lg overflow-hidden max-w-md">
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      className="flex-1 px-4 py-2 outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="bg-gray-100 px-4 py-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* FAQ Categories */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <button
                    onClick={() => setSearchQuery("")}
                    className={`px-4 py-2 rounded-full text-sm ${
                      searchQuery === ""
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-charcoal hover:bg-gray-300"
                    }`}
                  >
                    All
                  </button>
                  {faqCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSearchQuery(category)}
                      className={`px-4 py-2 rounded-full text-sm ${
                        searchQuery === category
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-charcoal hover:bg-gray-300"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <div key={index} className="border rounded-lg">
                      <button
                        onClick={() =>
                          setExpandedFAQ(expandedFAQ === index ? null : index)
                        }
                        className="w-full text-left p-4 hover:bg-gray-50 flex items-center justify-between"
                      >
                        <div>
                          <span className="text-xs text-primary font-medium">
                            {faq.category}
                          </span>
                          <h3 className="font-medium text-charcoal">
                            {faq.question}
                          </h3>
                        </div>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${expandedFAQ === index ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {expandedFAQ === index && (
                        <div className="px-4 pb-4">
                          <p className="text-charcoal-light">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {filteredFAQs.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-silver">
                      No FAQs found matching your search.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section bg-charcoal text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our technical experts are ready to assist you with any questions
            about Nissan parts, fitment, or installation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://wa.me/+254700000000"
              className="card bg-green-600 hover:bg-green-700 text-white"
            >
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold mb-2">WhatsApp Support</h3>
              <p className="text-sm">Instant help via WhatsApp</p>
            </a>

            <a
              href="tel:+254700000000"
              className="card bg-blue-600 hover:bg-blue-700 text-white"
            >
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold mb-2">Phone Support</h3>
              <p className="text-sm">Call our technical team</p>
            </a>

            <Link
              href="/contact"
              className="card bg-primary hover:bg-red-700 text-white"
            >
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold mb-2">Email Support</h3>
              <p className="text-sm">Send us your questions</p>
            </Link>
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
              <p className="text-gray-300 text-sm">
                Kenya's premier destination for genuine Nissan OEM and
                performance parts.
              </p>
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
                    Returns Policy
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
                <div>📍 Nairobi, Kenya</div>
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

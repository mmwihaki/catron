"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Wrench,
  Settings,
  Shield,
  RotateCcw,
  HelpCircle,
  Search,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Truck,
  CheckCircle,
  Download,
  PlayCircle,
  FileText,
} from "lucide-react";

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("fitment");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const supportCategories = [
    {
      id: "fitment",
      title: "Fitment Guide",
      icon: Wrench,
      description: "Find the right parts for your Nissan",
    },
    {
      id: "installation",
      title: "Installation Help",
      icon: Settings,
      description: "Step-by-step installation guides",
    },
    {
      id: "warranty",
      title: "Warranty Info",
      icon: Shield,
      description: "Warranty terms and coverage",
    },
    {
      id: "returns",
      title: "Returns Policy",
      icon: RotateCcw,
      description: "Return and exchange information",
    },
    {
      id: "faq",
      title: "FAQ",
      icon: HelpCircle,
      description: "Frequently asked questions",
    },
  ];

  const installationGuides = [
    {
      title: "Oil Filter Replacement",
      difficulty: "Easy",
      time: "15 minutes",
      tools: ["Oil drain pan", "Socket wrench", "New oil filter"],
      steps: [
        "Warm up engine to operating temperature",
        "Raise vehicle and locate oil drain plug",
        "Drain old oil completely",
        "Remove old oil filter using filter wrench",
        "Apply thin layer of oil to new filter gasket",
        "Install new filter hand-tight plus 3/4 turn",
        "Replace drain plug with new washer",
        "Refill with recommended oil grade",
        "⚠️ Always dispose of old oil and filter properly",
      ],
    },
    {
      title: "Air Filter Replacement",
      difficulty: "Easy",
      time: "10 minutes",
      tools: ["None required"],
      steps: [
        "Locate air filter housing near engine",
        "Unclip or unscrew housing cover",
        "Remove old air filter",
        "Clean housing interior with damp cloth",
        "Install new filter ensuring proper fitment",
        "Replace housing cover securely",
        "⚠️ Check filter orientation matches original",
      ],
    },
    {
      title: "Brake Pad Replacement",
      difficulty: "Advanced",
      time: "45 minutes",
      tools: [
        "Jack and stands",
        "Socket set",
        "C-clamp",
        "Brake cleaner",
        "New brake pads",
      ],
      steps: [
        "⚠️ This is an advanced procedure - seek professional help if unsure",
        "Raise vehicle and remove wheels",
        "Remove brake caliper mounting bolts",
        "Carefully remove caliper without damaging brake line",
        "Remove old brake pads",
        "Compress caliper piston using C-clamp",
        "Install new brake pads",
        "Reinstall caliper and tighten to specification",
        "Pump brake pedal several times before driving",
        "⚠️ Test brakes at low speed before normal driving",
      ],
    },
  ];

  const faqs = [
    {
      question: "How do I know if a part fits my Nissan?",
      answer:
        "Use our compatibility checker on each product page, or contact our fitment specialists. We verify compatibility by year, model, engine size, and specific trim level to ensure perfect fitment.",
    },
    {
      question: "What's the difference between OEM and aftermarket parts?",
      answer:
        "OEM (Original Equipment Manufacturer) parts are made by the same companies that supplied parts for your vehicle's original assembly. Aftermarket parts are made by third-party companies but meet or exceed OEM specifications. Both come with warranties.",
    },
    {
      question: "How long is shipping to Nairobi?",
      answer:
        "Orders placed before 2 PM are processed same day. Nairobi delivery typically takes 1-2 business days. Nationwide shipping takes 2-5 business days depending on location. Express options available.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "While we don't provide direct installation, we partner with certified mechanics across Kenya. We can recommend trusted professionals in your area and provide detailed installation guides for DIY enthusiasts.",
    },
    {
      question: "What if I receive the wrong part?",
      answer:
        "If you receive an incorrect part due to our error, we'll arrange immediate exchange at no cost. Contact us within 24 hours of delivery with your order number and photos of the received item.",
    },
    {
      question: "Can I return opened parts?",
      answer:
        "Unopened parts can be returned within 30 days. Opened parts are accepted for return only if they're defective or if we shipped the wrong item. Electronic components and filters cannot be returned once opened unless defective.",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "fitment":
        return (
          <div className="space-y-8">
            <div className="card-premium">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Part Fitment Guide
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">
                    Before You Order:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Verify your vehicle's year, model, and engine size</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Check your current part number if replacing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Note any specific trim level or options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Contact us if you're unsure about compatibility</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">
                    How to Find Part Numbers:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Check your vehicle's service manual</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Look for numbers stamped on existing parts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Use our online compatibility tool</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Contact our technical support team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "installation":
        return (
          <div className="space-y-8">
            {installationGuides.map((guide, index) => (
              <div key={index} className="card-premium">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{guide.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        guide.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                        guide.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {guide.difficulty}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {guide.time}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">Required Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">Installation Steps:</h4>
                  <ol className="space-y-3">
                    {guide.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">
                          {idx + 1}
                        </span>
                        <span
                          className={step.startsWith("⚠️") ? "text-orange-700 font-medium" : "text-gray-700"}
                        >
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        );

      case "warranty":
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-600" />
                  OEM Parts Warranty
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">12 months / 20,000 km</p>
                      <p className="text-gray-600 text-sm">Manufacturer warranty coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Defects & Materials</p>
                      <p className="text-gray-600 text-sm">Coverage for manufacturing defects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Nationwide Support</p>
                      <p className="text-gray-600 text-sm">Valid at any authorized service center</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <Settings className="w-8 h-8 text-blue-600" />
                  Aftermarket Parts Warranty
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">6-24 months</p>
                      <p className="text-gray-600 text-sm">Varies by manufacturer and part type</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Quality Guarantee</p>
                      <p className="text-gray-600 text-sm">Meet or exceed OEM specifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Easy Claims</p>
                      <p className="text-gray-600 text-sm">Simple warranty claim process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gray-50">
              <h4 className="text-lg font-bold mb-4 text-gray-900">Warranty Exclusions</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Normal wear and tear
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Improper installation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Accident or collision damage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Environmental damage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Modifications or alterations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Commercial or racing use
                </li>
              </ul>
            </div>
          </div>
        );

      case "returns":
        return (
          <div className="space-y-8">
            <div className="card-premium">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Return Policy</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">30 Days</h4>
                  <p className="text-gray-600 text-sm">Return window for most items</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Free Returns</h4>
                  <p className="text-gray-600 text-sm">On orders over KES 5,000</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Easy Process</h4>
                  <p className="text-gray-600 text-sm">Simple online returns</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-gray-900">Return Requirements</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Items must be unused and in original packaging
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Include original receipt or order confirmation
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Return within 30 days of purchase
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Contact us before returning special orders
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-3 text-gray-900">How to Return</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">1</span>
                      <span className="text-gray-700">Contact our support team to initiate return</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">2</span>
                      <span className="text-gray-700">Receive return authorization and shipping label</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">3</span>
                      <span className="text-gray-700">Package item securely and attach return label</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">4</span>
                      <span className="text-gray-700">Drop off at specified courier location</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );

      case "faq":
        return (
          <div className="space-y-6">
            <div className="flex gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search frequently asked questions..."
                    className="input search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {faqs
                .filter((faq) =>
                  faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((faq, index) => (
                  <div
                    key={index}
                    className="card border border-gray-200"
                  >
                    <button
                      onClick={() => {
                        setExpandedFAQ(expandedFAQ === index ? null : index);
                      }}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      aria-expanded={expandedFAQ === index}
                    >
                      <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header searchQuery="" setSearchQuery={() => {}} currentPage="support" />

      {/* Hero Section */}
      <section className="section-hero">
        <div className="container text-center">
          <h1 className="mb-4">Support & Resources</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert help with part selection, installation guides, and technical support for your Nissan
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <main id="main-content" className="section">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {supportCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`p-6 rounded-xl text-center transition-all duration-300 ${
                    activeTab === category.id
                      ? "bg-red-600 text-white shadow-lg transform -translate-y-1"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                  aria-pressed={activeTab === category.id}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">{category.title}</h3>
                  <p className={`text-sm ${activeTab === category.id ? "text-red-100" : "text-gray-600"}`}>
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="card-premium">
            {renderTabContent()}
          </div>
        </div>
      </main>

      {/* Contact Support */}
      <section className="section-premium">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Need More Help?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expert team is here to assist you with any questions or technical support you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="https://wa.me/+254742578910"
              className="card-premium text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">WhatsApp Support</h3>
              <p className="text-gray-600 mb-4">Instant help via WhatsApp</p>
              <span className="btn btn-primary">Chat Now</span>
            </a>

            <a
              href="tel:+254742578910"
              className="card-premium text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Phone Support</h3>
              <p className="text-gray-600 mb-4">Mon-Sat: 8AM-6PM</p>
              <span className="btn btn-primary">Call Now</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

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
      description: "Return and exchange process",
    },
    {
      id: "faq",
      title: "FAQ",
      icon: HelpCircle,
      description: "Frequently asked questions",
    },
  ];

  const fitmentSteps = [
    {
      step: 1,
      title: "Identify Your Vehicle",
      description:
        "Locate your VIN number (usually on the dashboard or door frame) or know your vehicle's year, model, and engine specifications.",
    },
    {
      step: 2,
      title: "Search Our Catalog",
      description:
        "Use our advanced search filters or enter your part number to find compatible components.",
    },
    {
      step: 3,
      title: "Verify Compatibility",
      description:
        "Double-check the part specifications against your vehicle's requirements before ordering.",
    },
    {
      step: 4,
      title: "Get Expert Advice",
      description:
        "Contact our technical team if you need assistance with part selection or compatibility verification.",
    },
  ];

  const installationGuides = [
    {
      title: "Oil Filter Replacement",
      difficulty: "Easy",
      time: "15 minutes",
      tools: ["Oil filter wrench", "Drain pan", "Funnel"],
      steps: [
        "⚠️ WARNING: Professional installation recommended",
        "Safely raise and secure vehicle",
        "Locate and drain engine oil",
        "Remove old oil filter using filter wrench",
        "Apply thin layer of oil to new filter gasket",
        "Install new filter hand-tight plus 3/4 turn",
        "Refill with appropriate oil quantity",
        "Check for leaks and proper oil pressure",
      ],
    },
    {
      title: "Brake Pad Replacement",
      difficulty: "Advanced",
      time: "45 minutes",
      tools: ["Jack", "Lug wrench", "C-clamp", "Brake cleaner"],
      steps: [
        "⚠️ WARNING: Professional installation recommended",
        "Safely lift vehicle and remove wheel",
        "Remove brake caliper bolts",
        "Carefully remove old brake pads",
        "Compress caliper piston with C-clamp",
        "Install new brake pads",
        "Reinstall caliper and tighten bolts to spec",
        "Test brake pedal feel before driving",
      ],
    },
    {
      title: "Air Filter Replacement",
      difficulty: "Easy",
      time: "10 minutes",
      tools: ["None required"],
      steps: [
        "Locate air filter housing",
        "Release housing clips or screws",
        "Remove old filter element",
        "Clean housing interior if needed",
        "Install new filter (note airflow direction)",
        "Secure housing clips or screws",
        "Start engine and check for proper operation",
      ],
    },
  ];

  const faqs = [
    {
      question: "How do I know if a part is compatible with my Nissan?",
      answer:
        "Use our VIN lookup tool or vehicle selector on each product page. You can also contact our technical support team with your vehicle details for expert assistance.",
    },
    {
      question: "What's the difference between OEM and aftermarket parts?",
      answer:
        "OEM parts are made by the original manufacturer to exact specifications. Aftermarket parts are made by third parties but meet or exceed OEM standards. Both come with warranties.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Most orders ship within 24 hours. Delivery times vary: Nairobi (1-2 days), major cities (2-3 days), remote areas (3-5 days). Express shipping available.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "We don't provide installation services directly, but we can recommend certified Nissan mechanics in your area. All parts come with detailed installation guides.",
    },
    {
      question: "What if I receive the wrong part?",
      answer:
        "We'll arrange immediate replacement at no cost to you. Contact us within 24 hours of delivery with your order number and photos of the incorrect part.",
    },
    {
      question: "Can I return a part if it doesn't fit?",
      answer:
        "Yes, unused parts in original packaging can be returned within 30 days. Custom orders and electrical components may have different return policies.",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "fitment":
        return (
          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                🎯 Finding the Right Part
              </h3>
              <p className="text-blue-800 mb-4">
                Getting the correct part is crucial for your Nissan's
                performance and safety. Follow these steps to ensure perfect
                fitment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {fitmentSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-gray-200 p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-900">
                💡 Pro Tips
              </h3>
              <ul className="space-y-2 text-green-800">
                <li>
                  • Always verify part numbers against your vehicle's service
                  manual
                </li>
                <li>
                  • Keep a record of your vehicle's specifications for future
                  reference
                </li>
                <li>• When in doubt, contact our technical support team</li>
                <li>
                  • Consider upgrading to premium parts for enhanced performance
                </li>
              </ul>
            </div>
          </div>
        );

      case "installation":
        return (
          <div className="space-y-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-900">
                ⚠️ Safety First
              </h3>
              <p className="text-yellow-800">
                Professional installation is recommended for most automotive
                parts. These guides are for educational purposes. Always consult
                a qualified mechanic.
              </p>
            </div>

            <div className="grid gap-8">
              {installationGuides.map((guide, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {guide.title}
                    </h3>
                    <div className="flex gap-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          guide.difficulty === "Easy"
                            ? "bg-green-100 text-green-800"
                            : guide.difficulty === "Advanced"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {guide.difficulty}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        {guide.time}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-900">
                      Required Tools:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {guide.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-gray-900">
                      Installation Steps:
                    </h4>
                    <ol className="space-y-3">
                      {guide.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">
                            {idx + 1}
                          </span>
                          <span
                            className={
                              step.startsWith("⚠️")
                                ? "text-red-600 font-medium"
                                : "text-gray-700"
                            }
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
          </div>
        );

      case "warranty":
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-600" />
                  OEM Parts Warranty
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        12 months / 20,000 km
                      </p>
                      <p className="text-gray-600 text-sm">
                        Manufacturer warranty coverage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Defects & Materials
                      </p>
                      <p className="text-gray-600 text-sm">
                        Coverage for manufacturing defects
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Nationwide Support
                      </p>
                      <p className="text-gray-600 text-sm">
                        Valid at any authorized service center
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <Settings className="w-8 h-8 text-blue-600" />
                  Aftermarket Parts Warranty
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">6-24 months</p>
                      <p className="text-gray-600 text-sm">
                        Varies by manufacturer and part type
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Quality Guarantee
                      </p>
                      <p className="text-gray-600 text-sm">
                        Meet or exceed OEM specifications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Easy Claims</p>
                      <p className="text-gray-600 text-sm">
                        Simple warranty claim process
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-4 text-gray-900">
                Warranty Exclusions
              </h4>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                <li>• Normal wear and tear</li>
                <li>• Damage from accidents or misuse</li>
                <li>• Improper installation</li>
                <li>• Environmental damage</li>
                <li>• Racing or competition use</li>
                <li>• Parts over warranty period</li>
              </ul>
            </div>
          </div>
        );

      case "returns":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Return Policy
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">30 Days</h4>
                  <p className="text-gray-600 text-sm">
                    Return window for most items
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Free Returns</h4>
                  <p className="text-gray-600 text-sm">
                    On orders over KES 5,000
                  </p>
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
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    Return Requirements
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      Items must be unused and in original packaging
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      Include original receipt or order confirmation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      Return within 30 days of purchase
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      Contact us before returning special orders
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    How to Return
                  </h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">
                        1
                      </span>
                      <span className="text-gray-700">
                        Contact our support team to initiate return
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">
                        2
                      </span>
                      <span className="text-gray-700">
                        Receive return authorization and shipping label
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">
                        3
                      </span>
                      <span className="text-gray-700">
                        Package item securely and attach return label
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center font-medium">
                        4
                      </span>
                      <span className="text-gray-700">
                        Drop off at specified courier location
                      </span>
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {faqs
                .filter(
                  (faq) =>
                    faq.question
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                    faq.answer
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()),
                )
                .map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md border border-gray-200"
                  >
                    <button
                      onClick={() =>
                        setExpandedFAQ(expandedFAQ === index ? null : index)
                      }
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                    >
                      <h3 className="font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
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
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery="" setSearchQuery={() => {}} currentPage="support" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Support & Resources
          </h1>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Get expert help with part selection, installation guides, and
            technical support for your Nissan
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {supportCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`p-6 rounded-xl text-center transition-all duration-300 ${
                    activeTab === category.id
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:shadow-md border border-gray-200"
                  }`}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">{category.title}</h3>
                  <p
                    className={`text-sm ${activeTab === category.id ? "text-red-100" : "text-gray-600"}`}
                  >
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600">
              Our expert team is here to assist you with any questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="https://wa.me/+254742578910"
              className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-6 text-center transition-colors"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">WhatsApp Support</h3>
              <p className="text-green-100 text-sm">
                Instant help via WhatsApp
              </p>
            </a>

            <a
              href="tel:+254742578910"
              className="bg-red-600 hover:bg-red-700 text-white rounded-xl p-6 text-center transition-colors"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Phone Support</h3>
              <p className="text-red-100 text-sm">Mon-Sat: 8AM-6PM</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

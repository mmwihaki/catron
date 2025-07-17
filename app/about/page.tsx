"use client";

import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Target, Users, Zap, Wrench, Heart, Smartphone } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We source only genuine OEM and certified aftermarket parts to ensure your Nissan performs at its best.",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Building long-term relationships through exceptional service, expert advice, and reliable support.",
      color: "text-green-600",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Same-day processing and Kenya-wide delivery to get you back on the road quickly.",
      color: "text-yellow-600",
    },
    {
      icon: Wrench,
      title: "Expert Support",
      description:
        "Technical expertise and fitment guidance from certified Nissan specialists.",
      color: "text-purple-600",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description:
        "Promoting proper parts recycling and environmental responsibility in automotive maintenance.",
      color: "text-red-600",
    },
    {
      icon: Smartphone,
      title: "Innovation",
      description:
        "Leveraging technology to make parts ordering simple, fast, and accessible.",
      color: "text-blue-600",
    },
  ];

  const reasons = [
    {
      title: "Extensive Inventory",
      description:
        "Over 10,000 genuine Nissan parts in stock, from common service items to rare components.",
    },
    {
      title: "Expert Knowledge",
      description:
        "Our team includes certified Nissan technicians who understand your vehicle inside and out.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Direct sourcing relationships ensure you get the best prices without compromising on quality.",
    },
    {
      title: "Warranty Protection",
      description:
        "All genuine OEM parts come with manufacturer warranty for your peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header searchQuery="" setSearchQuery={() => {}} currentPage="about" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920&h=1080&fit=crop')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-red-500">Catron Auto Parts</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Kenya's premier destination for genuine Nissan OEM and performance
              parts. Since 2018, we've been committed to keeping your Nissan
              running at peak performance with quality parts, expert support,
              and exceptional service.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>6+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>10,000+ Parts in Stock</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Kenya-wide Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide Kenya's Nissan owners with easy access to genuine,
                  high-quality automotive parts backed by expert knowledge and
                  exceptional customer service. We believe every Nissan deserves
                  authentic parts to maintain its reliability, performance, and
                  value.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become East Africa's most trusted and comprehensive Nissan
                  parts supplier, known for our integrity, expertise, and
                  commitment to keeping every Nissan on the road running
                  smoothly.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
                alt="Automotive parts quality"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">6+ Years</div>
                <div className="text-sm">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Catron Auto Parts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6 ${value.color}`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=600&h=400&fit=crop"
                alt="Nissan parts warehouse"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Why Choose Catron?
              </h2>

              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Get in Touch
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Find Your Nissan Parts?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Browse our extensive inventory or get expert advice from our team
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Browse Parts
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

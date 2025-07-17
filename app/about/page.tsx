"use client";

import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Target,
  Users,
  Zap,
  Wrench,
  Heart,
  Smartphone,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We source only genuine OEM and certified aftermarket parts to ensure your Nissan performs at its best.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Building long-term relationships through exceptional service, expert advice, and reliable support.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Same-day processing and Kenya-wide delivery to get you back on the road quickly.",
    },
    {
      icon: Wrench,
      title: "Expert Support",
      description:
        "Technical expertise and fitment guidance from certified Nissan specialists.",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description:
        "Promoting proper parts recycling and environmental responsibility in automotive maintenance.",
    },
    {
      icon: Smartphone,
      title: "Innovation",
      description:
        "Leveraging technology to make parts ordering simple, fast, and accessible.",
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

  const stats = [
    { number: "10,000+", label: "Parts in Stock" },
    { number: "6+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
    { number: "Kenya-wide", label: "Delivery Coverage" },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Header searchQuery="" setSearchQuery={() => {}} currentPage="about" />

      {/* Mission & Vision - One Line */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="card-white">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Our Mission
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                To provide Kenya's Nissan owners with easy access to genuine,
                high-quality automotive parts backed by expert knowledge and
                exceptional customer service.
              </p>
            </div>

            <div className="card-white">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Our Vision
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                To become East Africa's most trusted and comprehensive Nissan
                parts supplier, known for our integrity, expertise, and
                commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers/Stats Section */}
      <section className="py-16 bg-surface-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-secondary">
              Trusted by thousands of Nissan owners across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="card-surface">
                <div className="text-4xl font-bold text-accent-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do at Catron Auto Parts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="card-white hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 mb-6">
                    <IconComponent className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary">
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
              <h2 className="text-4xl font-bold mb-8 text-primary">
                Why Choose Catron?
              </h2>

              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        {reason.title}
                      </h3>
                      <p className="text-secondary leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
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
      <section className="py-20 bg-surface-dark text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Nissan Parts?
          </h2>
          <p className="text-xl mb-8 text-secondary max-w-2xl mx-auto">
            Browse our extensive inventory or get expert advice from our team
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="btn-primary">
              Browse Parts
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

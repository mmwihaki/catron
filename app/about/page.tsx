"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "David Kiprotich",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years experience in automotive parts industry. Former Nissan Kenya service manager.",
    },
    {
      name: "Grace Wanjiku",
      role: "Technical Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b2e28894?w=300&h=300&fit=crop&crop=face",
      bio: "Certified automotive technician specializing in Nissan vehicles and OEM parts compatibility.",
    },
    {
      name: "Samuel Mwangi",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Supply chain expert ensuring authentic parts sourcing and efficient delivery across Kenya.",
    },
    {
      name: "Jennifer Achieng",
      role: "Customer Success Lead",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Dedicated to providing exceptional customer service and technical support to our clients.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Started as a small auto parts shop in Nairobi with focus on Nissan vehicles",
    },
    {
      year: "2019",
      title: "OEM Partnership",
      description: "Became authorized Nissan OEM parts distributor for Kenya",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Launched online platform and WhatsApp ordering system",
    },
    {
      year: "2022",
      title: "Nationwide Expansion",
      description:
        "Extended delivery coverage to all major cities across Kenya",
    },
    {
      year: "2023",
      title: "10,000+ Customers",
      description:
        "Reached milestone of serving over 10,000 satisfied customers",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Opened state-of-the-art warehouse and customer service center",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Quality First",
      description:
        "We source only genuine OEM and certified aftermarket parts to ensure your Nissan performs at its best.",
    },
    {
      icon: "🤝",
      title: "Customer Trust",
      description:
        "Building long-term relationships through transparency, reliability, and exceptional service.",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description:
        "Same-day processing and Kenya-wide delivery to get you back on the road quickly.",
    },
    {
      icon: "🔧",
      title: "Expert Support",
      description:
        "Technical expertise and fitment guidance from certified Nissan specialists.",
    },
    {
      icon: "💚",
      title: "Sustainability",
      description:
        "Promoting proper parts recycling and environmental responsibility in automotive maintenance.",
    },
    {
      icon: "📱",
      title: "Innovation",
      description:
        "Leveraging technology to make parts ordering simple, fast, and accessible.",
    },
  ];

  return (
    <div className="about-page">
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
              <span className="text-primary font-medium">About</span>
              <Link
                href="/support"
                className="text-charcoal hover:text-primary"
              >
                Support
              </Link>
              <Link
                href="/contact"
                className="text-charcoal hover:text-primary"
              >
                Contact
              </Link>
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
            <span className="text-charcoal">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative py-20 bg-gradient-to-r from-charcoal to-charcoal-light text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920&h=800&fit=crop')",
          }}
        ></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Kenya's Premier <span className="text-primary">Nissan Parts</span>{" "}
              Specialist
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Since 2018, we've been dedicated to keeping Kenya's Nissan
              vehicles running smoothly with genuine OEM parts, expert guidance,
              and exceptional service.
            </p>
            <div className="flex gap-4">
              <Link href="/shop" className="btn btn-primary btn-lg">
                Shop Parts
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-charcoal-light mb-8 leading-relaxed">
                To provide Kenya's Nissan owners with genuine, high-quality
                automotive parts backed by expert technical support and
                unmatched customer service. We believe every Nissan deserves
                authentic parts to maintain its performance, reliability, and
                safety standards.
              </p>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    10,000+
                  </div>
                  <div className="text-sm text-silver">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    25,000+
                  </div>
                  <div className="text-sm text-silver">Parts Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    99.8%
                  </div>
                  <div className="text-sm text-silver">
                    Customer Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
                alt="Automotive parts quality"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">6+ Years</div>
                <div className="text-sm">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-background-gray">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-silver max-w-2xl mx-auto">
              The principles that guide everything we do at Brator Auto Parts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-charcoal-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-silver max-w-2xl mx-auto">
              From a small auto parts shop to Kenya's leading Nissan parts
              specialist
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
                  >
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-charcoal-light">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-background-gray">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-silver max-w-2xl mx-auto">
              The automotive experts dedicated to serving Kenya's Nissan
              community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-primary font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-charcoal-light">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=600&h=400&fit=crop"
                alt="Nissan parts warehouse"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Brator?</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
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
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Genuine OEM Parts Only</h3>
                    <p className="text-charcoal-light">
                      We source directly from authorized Nissan distributors to
                      guarantee authenticity and quality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Lightning Fast Delivery</h3>
                    <p className="text-charcoal-light">
                      Same-day dispatch and next-day delivery to major cities
                      across Kenya.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Expert Technical Support</h3>
                    <p className="text-charcoal-light">
                      Certified technicians provide fitment guidance and
                      installation support.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">WhatsApp Ordering</h3>
                    <p className="text-charcoal-light">
                      Simple, convenient ordering through WhatsApp with instant
                      support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-charcoal text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Brator for their
            Nissan parts needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/shop" className="btn btn-primary btn-lg">
              Start Shopping
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Get In Touch
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
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link
                    href="/shop?category=engine"
                    className="hover:text-white"
                  >
                    Engine Parts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=brakes"
                    className="hover:text-white"
                  >
                    Brake System
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=suspension"
                    className="hover:text-white"
                  >
                    Suspension
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=electrical"
                    className="hover:text-white"
                  >
                    Electrical
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

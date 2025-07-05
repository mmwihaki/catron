"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { products, categories } from "./data/products";
import { useCart } from "./context/CartContext";

export default function HomePage() {
  const { state } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");

  // Get featured products (highest rated)
  const featuredProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  // Get best sellers (random selection for demo)
  const bestSellers = products
    .filter((p) => p.badge === "Best Seller" || p.rating >= 4.7)
    .slice(0, 6);

  // Get newest products (highest IDs)
  const newArrivals = products.sort((a, b) => b.id - a.id).slice(0, 6);

  // Filter products by category for the categories section
  const getProductsByCategory = (categorySlug: string) => {
    if (categorySlug === "all") return featuredProducts;

    const categoryName = categories.find((c) => c.slug === categorySlug)?.name;
    if (!categoryName) return [];

    return products.filter((p) => p.category === categoryName).slice(0, 8);
  };

  const displayedProducts = getProductsByCategory(activeCategory);

  return (
    <div
      style={{
        fontFamily:
          "'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
        minHeight: "100vh",
      }}
    >
      <Header />

      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(58, 58, 58, 0.95) 100%), url('https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          padding: "120px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Industrial Pattern Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(176, 176, 176, 0.1) 1px, transparent 0)",
            backgroundSize: "20px 20px",
            opacity: 0.3,
          }}
        ></div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: "900",
                  marginBottom: "24px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ color: "#E5302C" }}>PRECISION</span>
                <br />
                NISSAN AUTO PARTS
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "40px",
                  color: "#B0B0B0",
                  lineHeight: "1.6",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Professional-grade OEM and aftermarket components engineered for
                peak performance. Trusted by mechanics and enthusiasts for
                uncompromising quality and reliability.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/shop"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 32px",
                    background:
                      "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "12px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "700",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 24px rgba(229, 48, 44, 0.4)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Shop Now
                </Link>
                <Link
                  href="/category/oil-filter"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 32px",
                    background: "transparent",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "12px",
                    border: "2px solid #B0B0B0",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                  Browse Parts
                </Link>
              </div>
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src="https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Auto Parts"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  border: "2px solid rgba(176, 176, 176, 0.2)",
                }}
              />
            </div>
          </div>

          {/* Quick Search */}
          <div
            style={{
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(20px)",
              borderRadius: "20px",
              padding: "40px",
              marginTop: "80px",
              border: "1px solid rgba(176, 176, 176, 0.2)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "32px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              PRECISION PART FINDER
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              <select
                style={{
                  padding: "16px 20px",
                  border: "2px solid rgba(176, 176, 176, 0.3)",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontFamily: "'Open Sans', sans-serif",
                  background: "rgba(58, 58, 58, 0.8)",
                  color: "#FFFFFF",
                  outline: "none",
                }}
              >
                <option>Select Year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
              <select
                style={{
                  padding: "16px 20px",
                  border: "2px solid rgba(176, 176, 176, 0.3)",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontFamily: "'Open Sans', sans-serif",
                  background: "rgba(58, 58, 58, 0.8)",
                  color: "#FFFFFF",
                  outline: "none",
                }}
              >
                <option>Select Model</option>
                <option>Note</option>
                <option>March</option>
                <option>X-Trail</option>
                <option>Sentra</option>
                <option>Altima</option>
              </select>
              <select
                style={{
                  padding: "16px 20px",
                  border: "2px solid rgba(176, 176, 176, 0.3)",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontFamily: "'Open Sans', sans-serif",
                  background: "rgba(58, 58, 58, 0.8)",
                  color: "#FFFFFF",
                  outline: "none",
                }}
              >
                <option>Select Engine</option>
                <option>1.2L HR12DE</option>
                <option>1.6L HR16DE</option>
                <option>2.0L MR20DE</option>
                <option>2.5L QR25DE</option>
              </select>
              <button
                style={{
                  background:
                    "linear-gradient(135deg, #007BFF 0%, #0056B3 100%)",
                  color: "white",
                  border: "none",
                  padding: "16px 24px",
                  borderRadius: "10px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "700",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
                }}
              >
                Find Parts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "64px",
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            PRECISION ENGINEERED
            <br />
            <span style={{ color: "#E5302C" }}>COMPONENT CATEGORIES</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {categories.slice(0, 8).map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                style={{
                  background:
                    "linear-gradient(135deg, #3A3A3A 0%, #1E1E1E 100%)",
                  padding: "40px 32px",
                  borderRadius: "20px",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "#FFFFFF",
                  transition: "all 0.3s ease",
                  border: "2px solid rgba(176, 176, 176, 0.2)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.4)";
                  e.currentTarget.style.borderColor = "rgba(229, 48, 44, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.3)";
                  e.currentTarget.style.borderColor =
                    "rgba(176, 176, 176, 0.2)";
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: "0 8px 20px rgba(229, 48, 44, 0.4)",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20m10-10H2" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "12px",
                    color: "#FFFFFF",
                  }}
                >
                  {category.name}
                </h3>
                <p
                  style={{
                    color: "#B0B0B0",
                    fontSize: "14px",
                    fontFamily: "'Open Sans', sans-serif",
                    margin: "0",
                  }}
                >
                  {category.count} precision components
                </p>

                {/* Subtle gradient accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background:
                      "linear-gradient(90deg, #E5302C, #007BFF, #FFC107)",
                    opacity: 0.6,
                  }}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        style={{
          padding: "100px 0",
          background: "linear-gradient(135deg, #3A3A3A 0%, #1E1E1E 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: "800",
                color: "#FFFFFF",
                marginBottom: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              <span style={{ color: "#E5302C" }}>FEATURED</span> PERFORMANCE
              PARTS
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "32px",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  background:
                    activeCategory === "all"
                      ? "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)"
                      : "transparent",
                  color: activeCategory === "all" ? "white" : "#B0B0B0",
                  border:
                    activeCategory === "all"
                      ? "none"
                      : "2px solid rgba(176, 176, 176, 0.3)",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "600",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  transition: "all 0.2s ease",
                }}
                onClick={() => setActiveCategory("all")}
              >
                All
              </button>
              {categories.slice(1, 6).map((category) => (
                <button
                  key={category.slug}
                  style={{
                    background:
                      activeCategory === category.slug
                        ? "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)"
                        : "transparent",
                    color:
                      activeCategory === category.slug ? "white" : "#B0B0B0",
                    border:
                      activeCategory === category.slug
                        ? "none"
                        : "2px solid rgba(176, 176, 176, 0.3)",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() => setActiveCategory(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
              marginBottom: "64px",
            }}
          >
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/shop"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 32px",
                background: "linear-gradient(135deg, #007BFF 0%, #0056B3 100%)",
                color: "white",
                textDecoration: "none",
                borderRadius: "12px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "700",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 24px rgba(0, 123, 255, 0.4)",
              }}
            >
              View All Products
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="best-sellers-section">
        <div className="container">
          <div className="section-header">
            <h2>Best Sellers</h2>
            <p>Our most popular auto parts trusted by customers</p>
          </div>

          <div className="products-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers-section">
        <div className="container">
          <div className="offers-grid">
            <div className="offer-card primary">
              <div className="offer-content">
                <h3>Free Shipping</h3>
                <p>On orders over KES 5,000</p>
                <Link href="/shop" className="offer-btn">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="offer-card secondary">
              <div className="offer-content">
                <h3>Installation Support</h3>
                <p>Professional installation available</p>
                <Link href="/contact" className="offer-btn">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="offer-card tertiary">
              <div className="offer-content">
                <h3>Quality Guarantee</h3>
                <p>Genuine OEM & aftermarket parts</p>
                <Link href="/about" className="offer-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Catron Auto Parts?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Genuine Parts</h3>
              <p>
                Only authentic OEM and high-quality aftermarket parts from
                trusted manufacturers.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Expert Advice</h3>
              <p>
                Our knowledgeable team helps you find the right parts for your
                specific vehicle.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Fast Delivery</h3>
              <p>
                Quick delivery across Kenya with same-day delivery available in
                Nairobi.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                </svg>
              </div>
              <h3>Installation</h3>
              <p>
                Professional installation services available for all parts we
                sell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Updated</h2>
              <p>
                Get the latest updates on new parts, special offers, and
                automotive tips.
              </p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F5d8fbe0d7a4c4e1a9a82d71637d82593"
                alt="Catron Auto Parts"
                className="footer-logo"
              />
              <p>
                Your trusted partner for genuine Nissan OEM and aftermarket
                parts in Kenya.
              </p>
              <div className="contact-info">
                <p>📧 info@catron.co.ke</p>
                <p>📞 +254 700 000 000</p>
                <p>📍 Nairobi, Kenya</p>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Categories</h4>
              <ul>
                <li>
                  <Link href="/category/oil-filter">Oil Filters</Link>
                </li>
                <li>
                  <Link href="/category/air-filter">Air Filters</Link>
                </li>
                <li>
                  <Link href="/category/spark-plugs">Spark Plugs</Link>
                </li>
                <li>
                  <Link href="/category/brake-pads">Brake Pads</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Customer Service</h4>
              <ul>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/shipping">Shipping Info</Link>
                </li>
                <li>
                  <Link href="/returns">Returns</Link>
                </li>
                <li>
                  <Link href="/warranty">Warranty</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Catron Auto Parts. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .homepage {
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #f73312 0%, #e63312 100%);
          color: white;
          padding: 60px 0;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 60px;
        }

        .hero-text h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-text p {
          font-size: 18px;
          margin-bottom: 32px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
        }

        .btn {
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: white;
          color: #f73312;
        }

        .btn-primary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #f73312;
        }

        .hero-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
        }

        .quick-search {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 32px;
        }

        .quick-search h3 {
          font-size: 24px;
          margin-bottom: 24px;
          text-align: center;
        }

        .search-form {
          display: flex;
          gap: 16px;
        }

        .vehicle-select {
          flex: 1;
          padding: 12px 16px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
        }

        .search-parts-btn {
          background: white;
          color: #f73312;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .search-parts-btn:hover {
          background: #f8f9fa;
        }

        /* Categories Section */
        .categories-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .categories-section h2 {
          font-size: 36px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 48px;
          color: #1f2937;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }

        .category-card {
          background: white;
          padding: 32px 24px;
          border-radius: 12px;
          text-align: center;
          text-decoration: none;
          color: #1f2937;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .category-icon {
          color: #f73312;
          margin-bottom: 16px;
        }

        .category-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .category-card p {
          color: #6b7280;
          font-size: 14px;
        }

        /* Featured Section */
        .featured-section {
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-header h2 {
          font-size: 36px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .tab-btn {
          background: transparent;
          border: 1px solid #d1d5db;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tab-btn.active,
        .tab-btn:hover {
          background: #f73312;
          color: white;
          border-color: #f73312;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .section-footer {
          text-align: center;
        }

        .view-all-btn {
          background: #f73312;
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.3s ease;
        }

        .view-all-btn:hover {
          background: #e63312;
        }

        /* Best Sellers */
        .best-sellers-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .best-sellers-section .section-header p {
          color: #6b7280;
          font-size: 16px;
        }

        /* Offers Section */
        .offers-section {
          padding: 80px 0;
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .offer-card {
          padding: 40px 32px;
          border-radius: 12px;
          text-align: center;
          color: white;
        }

        .offer-card.primary {
          background: linear-gradient(135deg, #f73312, #e63312);
        }

        .offer-card.secondary {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
        }

        .offer-card.tertiary {
          background: linear-gradient(135deg, #059669, #047857);
        }

        .offer-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .offer-card p {
          margin-bottom: 24px;
          opacity: 0.9;
        }

        .offer-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s ease;
        }

        .offer-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Features Section */
        .features-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .features-section h2 {
          font-size: 36px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 48px;
          color: #1f2937;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
        }

        .feature-item {
          text-align: center;
          background: white;
          padding: 32px 24px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .feature-icon {
          color: #f73312;
          margin-bottom: 20px;
        }

        .feature-item h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #1f2937;
        }

        .feature-item p {
          color: #6b7280;
          line-height: 1.6;
        }

        /* Newsletter */
        .newsletter-section {
          padding: 80px 0;
          background: #1f2937;
          color: white;
        }

        .newsletter-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .newsletter-text h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .newsletter-text p {
          font-size: 16px;
          opacity: 0.8;
        }

        .newsletter-form {
          display: flex;
          gap: 12px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 14px 16px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
        }

        .newsletter-btn {
          background: #f73312;
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .newsletter-btn:hover {
          background: #e63312;
        }

        /* Footer */
        .footer {
          background: #111827;
          color: white;
          padding: 60px 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 40px;
        }

        .footer-logo {
          height: 40px;
          margin-bottom: 16px;
        }

        .footer-section p {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .contact-info p {
          margin-bottom: 8px;
          font-size: 14px;
        }

        .footer-section h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section li {
          margin-bottom: 8px;
        }

        .footer-section a {
          color: #d1d5db;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: #f73312;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 20px;
          text-align: center;
        }

        .footer-bottom p {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-text h1 {
            font-size: 32px;
          }

          .search-form {
            flex-direction: column;
            gap: 12px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .category-tabs {
            flex-wrap: wrap;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 16px;
          }

          .newsletter-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

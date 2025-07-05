"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [showBulkQuote, setShowBulkQuote] = useState(false);

  if (!product) {
    return (
      <div
        style={{ background: "#1E1E1E", minHeight: "100vh", color: "white" }}
      >
        <Header />
        <div
          style={{
            padding: "40px 20px",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "24px" }}>🔧</div>
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "32px",
              marginBottom: "16px",
            }}
          >
            Product Not Found
          </h1>
          <p style={{ color: "#B0B0B0", marginBottom: "32px" }}>
            The part you're looking for doesn't exist in our catalog.
          </p>
          <Link
            href="/shop"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 32px",
              background: "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
              color: "white",
              textDecoration: "none",
              borderRadius: "12px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "700",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Browse All Parts
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Get frequently bought together (mock data - in real app this would come from analytics)
  const frequentlyBoughtTogether = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0)
      return {
        text: "Out of Stock",
        color: "#DC3545",
        bgColor: "rgba(220, 53, 69, 0.2)",
      };
    if (stock <= 3)
      return {
        text: "Low Stock",
        color: "#FFC107",
        bgColor: "rgba(255, 193, 7, 0.2)",
      };
    if (stock <= 10)
      return {
        text: "Limited Stock",
        color: "#FFC107",
        bgColor: "rgba(255, 193, 7, 0.2)",
      };
    return {
      text: "In Stock",
      color: "#28A745",
      bgColor: "rgba(40, 167, 69, 0.2)",
    };
  };

  const stockStatus = getStockStatus(product.stock);

  // Mock additional images (in real app, these would come from product data)
  const productImages = [
    product.image,
    product.image, // Placeholder for additional angles
    product.image, // Placeholder for additional angles
    product.image, // Placeholder for packaging
  ];

  // Mock technical specifications
  const technicalSpecs = {
    "Part Number": product.sku,
    Brand: product.brand,
    Category: product.category,
    Compatibility: product.carModel,
    Warranty: "12 months",
    Material: "OEM Grade",
    Weight: "0.5 kg",
    Dimensions: "15 x 10 x 5 cm",
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
        minHeight: "100vh",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <Header />

      {/* Breadcrumbs */}
      <div
        style={{
          background: "rgba(58, 58, 58, 0.5)",
          borderBottom: "1px solid rgba(176, 176, 176, 0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            color: "#B0B0B0",
          }}
        >
          <Link href="/" style={{ color: "#B0B0B0", textDecoration: "none" }}>
            Home
          </Link>
          <span>/</span>
          <Link
            href="/shop"
            style={{ color: "#B0B0B0", textDecoration: "none" }}
          >
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
            style={{ color: "#B0B0B0", textDecoration: "none" }}
          >
            {product.category}
          </Link>
          <span>/</span>
          <span style={{ color: "#FFFFFF", fontWeight: "600" }}>
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Hero Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* Product Gallery */}
        <div>
          <div
            style={{
              background: "linear-gradient(135deg, #B0B0B0 0%, #FFFFFF 100%)",
              borderRadius: "20px",
              padding: "40px",
              marginBottom: "24px",
              position: "relative",
            }}
          >
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            {/* 360° View Badge */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(0,0,0,0.8)",
                color: "white",
                padding: "8px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21.5 2l-8 20L10 14l-8-3 19.5-9zM16 8L2 8" />
              </svg>
              360° View
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                style={{
                  background:
                    selectedImage === index
                      ? "#E5302C"
                      : "rgba(58, 58, 58, 0.8)",
                  border: "2px solid",
                  borderColor:
                    selectedImage === index ? "#E5302C" : "transparent",
                  borderRadius: "12px",
                  padding: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div>
          {/* Product Header */}
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "32px",
                fontWeight: "800",
                color: "#FFFFFF",
                marginBottom: "12px",
                lineHeight: "1.2",
              }}
            >
              {product.name}
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "16px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  background: stockStatus.bgColor,
                  color: stockStatus.color,
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "700",
                  fontFamily: "'Titillium Web', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  border: `1px solid ${stockStatus.color}`,
                }}
              >
                {stockStatus.text}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  color: "#B0B0B0",
                }}
              >
                SKU:{" "}
                <span style={{ color: "#FFC107", fontWeight: "600" }}>
                  {product.sku}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", gap: "2px" }}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color:
                          i < Math.floor(product.rating)
                            ? "#FFC107"
                            : "rgba(176, 176, 176, 0.3)",
                        fontSize: "16px",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: "14px", color: "#B0B0B0" }}>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Brand Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "700",
                fontFamily: "'Titillium Web', sans-serif",
                marginBottom: "24px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              {product.brand} CERTIFIED
            </div>
          </div>

          {/* Pricing */}
          <div style={{ marginBottom: "32px" }}>
            {product.originalPrice && (
              <div
                style={{
                  fontSize: "18px",
                  color: "#B0B0B0",
                  textDecoration: "line-through",
                  marginBottom: "8px",
                }}
              >
                KES {product.originalPrice.toLocaleString()}
              </div>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "16px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  fontFamily: "'Titillium Web', sans-serif",
                  color: "#FFC107",
                  letterSpacing: "-1px",
                }}
              >
                KES {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #28A745 0%, #20C997 100%)",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  SAVE{" "}
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100,
                  )}
                  %
                </span>
              )}
            </div>

            {/* Volume Pricing */}
            <div
              style={{
                background: "rgba(0, 123, 255, 0.1)",
                border: "1px solid rgba(0, 123, 255, 0.3)",
                borderRadius: "8px",
                padding: "12px",
                fontSize: "13px",
                color: "#007BFF",
              }}
            >
              💰 <strong>Volume Discounts:</strong> 5+ items: 5% off • 10+
              items: 10% off • 20+ items: 15% off
            </div>
          </div>

          {/* Vehicle Compatibility */}
          <div
            style={{
              background: "rgba(58, 58, 58, 0.8)",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "32px",
              border: "1px solid rgba(176, 176, 176, 0.2)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                color: "#FFFFFF",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFC107"
                strokeWidth="2"
              >
                <path d="M7 17h10l4-7H17l-4-7H7l4 7z" />
              </svg>
              Vehicle Compatibility
            </h3>
            <p style={{ color: "#B0B0B0", marginBottom: "12px" }}>
              🚗 Fits:{" "}
              <span style={{ color: "#FFFFFF", fontWeight: "600" }}>
                {product.carModel}
              </span>
            </p>
            <button
              style={{
                background: "linear-gradient(135deg, #007BFF 0%, #0056B3 100%)",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              Check Vehicle Compatibility
            </button>
          </div>

          {/* Purchase Section */}
          <div
            style={{
              background: "rgba(30, 30, 30, 0.8)",
              borderRadius: "16px",
              padding: "24px",
              border: "2px solid rgba(229, 48, 44, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#B0B0B0",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  Quantity:
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(58, 58, 58, 0.8)",
                    borderRadius: "8px",
                    border: "1px solid rgba(176, 176, 176, 0.3)",
                  }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#FFFFFF",
                      padding: "12px 16px",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    -
                  </button>
                  <span
                    style={{
                      padding: "12px 20px",
                      color: "#FFFFFF",
                      fontWeight: "700",
                      fontSize: "16px",
                      minWidth: "60px",
                      textAlign: "center",
                    }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                      setQuantity(Math.min(product.stock, quantity + 1))
                    }
                    disabled={quantity >= product.stock}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#FFFFFF",
                      padding: "12px 16px",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div
                style={{
                  fontSize: "14px",
                  color: "#B0B0B0",
                }}
              >
                <div>Subtotal:</div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFC107",
                  }}
                >
                  KES {(product.price * quantity).toLocaleString()}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                style={{
                  flex: 1,
                  background:
                    product.stock === 0
                      ? "linear-gradient(135deg, #6C757D 0%, #495057 100%)"
                      : "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
                  color: "white",
                  border: "none",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: product.stock === 0 ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  minWidth: "200px",
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
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>

              <button
                onClick={() => setShowBulkQuote(true)}
                style={{
                  background: "transparent",
                  color: "#007BFF",
                  border: "2px solid #007BFF",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Bulk Quote
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "12px",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#28A745",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Free Shipping
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#28A745",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                12 Month Warranty
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#28A745",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                Easy Returns
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Product Information */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 40px",
        }}
      >
        <div
          style={{
            background: "rgba(58, 58, 58, 0.8)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(176, 176, 176, 0.2)",
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid rgba(176, 176, 176, 0.2)",
            }}
          >
            {[
              { id: "description", label: "Description" },
              { id: "specifications", label: "Specifications" },
              { id: "reviews", label: "Reviews" },
              { id: "fitment", label: "Fitment Guide" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  padding: "20px",
                  background:
                    activeTab === tab.id
                      ? "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)"
                      : "transparent",
                  color: activeTab === tab.id ? "white" : "#B0B0B0",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ padding: "32px" }}>
            {activeTab === "description" && (
              <div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    marginBottom: "16px",
                  }}
                >
                  Product Description
                </h3>
                <p
                  style={{
                    color: "#B0B0B0",
                    lineHeight: "1.6",
                    marginBottom: "24px",
                  }}
                >
                  {product.description}
                </p>

                <div
                  style={{
                    background: "rgba(30, 30, 30, 0.5)",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <h4
                    style={{
                      color: "#FFFFFF",
                      marginBottom: "12px",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Key Features:
                  </h4>
                  <ul
                    style={{
                      color: "#B0B0B0",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>Premium OEM-grade materials</li>
                    <li>Precision engineered for perfect fit</li>
                    <li>Rigorous quality testing standards</li>
                    <li>Professional installation recommended</li>
                    <li>Backed by comprehensive warranty</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    marginBottom: "24px",
                  }}
                >
                  Technical Specifications
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {Object.entries(technicalSpecs).map(([key, value]) => (
                    <div
                      key={key}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "12px 16px",
                        background: "rgba(30, 30, 30, 0.5)",
                        borderRadius: "8px",
                        border: "1px solid rgba(176, 176, 176, 0.1)",
                      }}
                    >
                      <span
                        style={{
                          color: "#B0B0B0",
                          fontWeight: "500",
                        }}
                      >
                        {key}:
                      </span>
                      <span
                        style={{
                          color: "#FFFFFF",
                          fontWeight: "600",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    marginBottom: "24px",
                  }}
                >
                  Customer Reviews ({product.reviews})
                </h3>

                {/* Reviews would be dynamically loaded here */}
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px",
                    color: "#B0B0B0",
                  }}
                >
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                    ⭐
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#FFC107",
                      marginBottom: "8px",
                    }}
                  >
                    {product.rating}/5.0
                  </div>
                  <div>Based on {product.reviews} verified reviews</div>
                </div>
              </div>
            )}

            {activeTab === "fitment" && (
              <div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    marginBottom: "24px",
                  }}
                >
                  Fitment Guide
                </h3>

                <div
                  style={{
                    background: "rgba(30, 30, 30, 0.5)",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#28A745"
                      strokeWidth="2"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      Compatible with: {product.carModel}
                    </span>
                  </div>

                  <p
                    style={{
                      color: "#B0B0B0",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                    }}
                  >
                    This part has been specifically designed and tested for the
                    above vehicle models. Professional installation is
                    recommended to ensure optimal performance and warranty
                    coverage.
                  </p>

                  <button
                    style={{
                      background:
                        "linear-gradient(135deg, #007BFF 0%, #0056B3 100%)",
                      color: "white",
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10,9 9,9 8,9" />
                    </svg>
                    Download Installation Guide
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Bought Together */}
      <section
        style={{
          background: "rgba(58, 58, 58, 0.3)",
          padding: "60px 0",
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
              fontSize: "28px",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "40px",
              color: "#FFFFFF",
            }}
          >
            Frequently Bought Together
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {frequentlyBoughtTogether.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section
          style={{
            padding: "60px 0",
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
                fontSize: "28px",
                fontWeight: "800",
                textAlign: "center",
                marginBottom: "40px",
                color: "#FFFFFF",
              }}
            >
              Related Products
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "24px",
              }}
            >
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bulk Quote Modal */}
      {showBulkQuote && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)",
              borderRadius: "16px",
              padding: "32px",
              maxWidth: "500px",
              width: "100%",
              border: "1px solid rgba(176, 176, 176, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                Request Bulk Quote
              </h3>
              <button
                onClick={() => setShowBulkQuote(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#B0B0B0",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            <form
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <input
                type="number"
                placeholder="Quantity needed"
                min="10"
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(176, 176, 176, 0.3)",
                  background: "rgba(58, 58, 58, 0.8)",
                  color: "#FFFFFF",
                  fontSize: "14px",
                }}
              />
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(176, 176, 176, 0.3)",
                  background: "rgba(58, 58, 58, 0.8)",
                  color: "#FFFFFF",
                  fontSize: "14px",
                }}
              />
              <textarea
                placeholder="Additional requirements or notes"
                rows={3}
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(176, 176, 176, 0.3)",
                  background: "rgba(58, 58, 58, 0.8)",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  resize: "vertical",
                }}
              />
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(135deg, #007BFF 0%, #0056B3 100%)",
                  color: "white",
                  border: "none",
                  padding: "14px 20px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

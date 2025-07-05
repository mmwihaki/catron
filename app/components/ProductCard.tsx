"use client";

import React from "react";
import Link from "next/link";
import { Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: "Out of Stock", color: "#dc3545" };
    if (stock <= 3) return { text: "Low Stock", color: "#fd7e14" };
    if (stock <= 10) return { text: "Limited Stock", color: "#ffc107" };
    return { text: "In Stock", color: "#28a745" };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <Link
      href={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E9ECEF",
          borderRadius: "16px",
          padding: "20px",
          position: "relative",
          transition: "all 0.3s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
          e.currentTarget.style.borderColor = "rgba(229, 48, 44, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
          e.currentTarget.style.borderColor = "#E9ECEF";
        }}
      >
        {/* Product Badge */}
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
              color: "white",
              padding: "6px 12px",
              fontSize: "11px",
              fontWeight: "700",
              fontFamily: "'Titillium Web', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "1px",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(229, 48, 44, 0.4)",
              zIndex: 2,
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Stock Status */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            fontSize: "10px",
            fontWeight: "700",
            fontFamily: "'Titillium Web', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: stockStatus.color,
            background: "rgba(0,0,0,0.7)",
            padding: "4px 8px",
            borderRadius: "4px",
            backdropFilter: "blur(10px)",
          }}
        >
          {stockStatus.text}
        </div>

        {/* Product Image */}
        <div
          style={{
            position: "relative",
            marginBottom: "16px",
            overflow: "hidden",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #B0B0B0 0%, #FFFFFF 100%)",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </div>

        {/* Product Info */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "700",
              fontFamily: "'Montserrat', sans-serif",
              color: "#212529",
              margin: "0 0 12px 0",
              lineHeight: "1.3",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.name}
          </h3>

          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                margin: "4px 0",
                fontSize: "13px",
                color: "#E5302C",
                fontWeight: "700",
                fontFamily: "'Titillium Web', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {product.brand}
            </p>
            <p
              style={{
                margin: "2px 0",
                fontSize: "11px",
                color: "#6C757D",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              SKU: {product.sku}
            </p>
            <p
              style={{
                margin: "2px 0",
                fontSize: "11px",
                color: "#6C757D",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Fits: {product.carModel}
            </p>
          </div>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    color:
                      i < Math.floor(product.rating) ? "#FFC107" : "#E9ECEF",
                    fontSize: "14px",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <span
              style={{
                fontSize: "11px",
                color: "#6C757D",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div style={{ marginBottom: "16px", marginTop: "auto" }}>
            {product.originalPrice && (
              <span
                style={{
                  fontSize: "13px",
                  color: "#6C757D",
                  textDecoration: "line-through",
                  marginRight: "8px",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                KES {product.originalPrice.toLocaleString()}
              </span>
            )}
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                fontFamily: "'Titillium Web', sans-serif",
                color: product.originalPrice ? "#E5302C" : "#212529",
                letterSpacing: "-0.5px",
              }}
            >
              KES {product.price.toLocaleString()}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            style={{
              width: "100%",
              background:
                product.stock === 0
                  ? "linear-gradient(135deg, #6C757D 0%, #495057 100%)"
                  : "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)",
              color: "white",
              border: "none",
              padding: "14px 16px",
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: "700",
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "1px",
              cursor: product.stock === 0 ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow:
                product.stock === 0
                  ? "none"
                  : "0 4px 12px rgba(229, 48, 44, 0.3)",
            }}
            onMouseEnter={(e) => {
              if (product.stock > 0) {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #FF4639 0%, #E5302C 100%)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(229, 48, 44, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (product.stock > 0) {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #E5302C 0%, #C4261E 100%)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(229, 48, 44, 0.3)";
              }
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
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {product.stock === 0 ? "Out of Stock" : "Add to cart"}
          </button>
        </div>
      </div>
    </Link>
  );
}

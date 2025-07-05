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
          border: "1px solid #eee",
          borderRadius: "8px",
          padding: "15px",
          position: "relative",
          backgroundColor: "white",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Product Badge */}
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "#f73312",
              color: "white",
              padding: "4px 8px",
              fontSize: "12px",
              fontWeight: "600",
              borderRadius: "3px",
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Stock Status */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "11px",
            fontWeight: "600",
            color: stockStatus.color,
          }}
        >
          {stockStatus.text}
        </div>

        {/* Product Image */}
        <div
          style={{
            position: "relative",
            marginBottom: "10px",
            overflow: "hidden",
            borderRadius: "4px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "4px",
              marginBottom: "10px",
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
              fontSize: "14px",
              fontWeight: "600",
              color: "#333",
              margin: "0 0 8px 0",
              lineHeight: "1.3",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.name}
          </h3>

          <div style={{ marginBottom: "10px" }}>
            <p
              style={{
                margin: "2px 0",
                fontSize: "12px",
                color: "#666",
                fontWeight: "600",
              }}
            >
              {product.brand}
            </p>
            <p style={{ margin: "2px 0", fontSize: "12px", color: "#666" }}>
              SKU: {product.sku}
            </p>
            <p style={{ margin: "2px 0", fontSize: "12px", color: "#666" }}>
              Fits: {product.carModel}
            </p>
          </div>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", marginRight: "8px" }}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    color: i < Math.floor(product.rating) ? "#ffc107" : "#ddd",
                    fontSize: "12px",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <span style={{ fontSize: "12px", color: "#666" }}>
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div style={{ marginBottom: "10px", marginTop: "auto" }}>
            {product.originalPrice && (
              <span
                style={{
                  fontSize: "12px",
                  color: "#999",
                  textDecoration: "line-through",
                  marginRight: "8px",
                }}
              >
                KES {product.originalPrice.toLocaleString()}
              </span>
            )}
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: product.originalPrice ? "#f73312" : "#333",
              }}
            >
              KES {product.price.toLocaleString()}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            style={{
              width: "100%",
              background: product.stock === 0 ? "#9ca3af" : "#f73312",
              color: "white",
              border: "none",
              padding: "8px",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: product.stock === 0 ? "not-allowed" : "pointer",
              transition: "background 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => {
              if (product.stock > 0) {
                e.currentTarget.style.background = "#dc2f02";
              }
            }}
            onMouseLeave={(e) => {
              if (product.stock > 0) {
                e.currentTarget.style.background = "#f73312";
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

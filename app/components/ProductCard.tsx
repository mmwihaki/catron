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
    <Link href={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        {/* Product Badge */}
        {product.badge && <div className="product-badge">{product.badge}</div>}

        {/* Stock Status */}
        <div className="stock-status" style={{ color: stockStatus.color }}>
          {stockStatus.text}
        </div>

        {/* Product Image */}
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>

          <div className="product-meta">
            <p className="product-brand">{product.brand}</p>
            <p className="product-sku">SKU: {product.sku}</p>
            <p className="product-model">Fits: {product.carModel}</p>
          </div>

          {/* Rating */}
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < Math.floor(product.rating) ? "filled" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="review-count">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="product-price">
            {product.originalPrice && (
              <span className="original-price">
                KES {product.originalPrice.toLocaleString()}
              </span>
            )}
            <span
              className={`current-price ${product.originalPrice ? "sale-price" : ""}`}
            >
              KES {product.price.toLocaleString()}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
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
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>

      <style jsx>{`
        .product-card-link {
          text-decoration: none;
          color: inherit;
        }

        .product-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 16px;
          position: relative;
          background: white;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: #f73312;
        }

        .product-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #f73312;
          color: white;
          padding: 4px 8px;
          font-size: 11px;
          font-weight: 600;
          border-radius: 4px;
          z-index: 2;
        }

        .stock-status {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 11px;
          font-weight: 600;
          z-index: 2;
        }

        .product-image-container {
          position: relative;
          margin-bottom: 12px;
          overflow: hidden;
          border-radius: 8px;
        }

        .product-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .product-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-name {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 8px 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-meta {
          margin-bottom: 10px;
        }

        .product-meta p {
          margin: 2px 0;
          font-size: 12px;
          color: #6b7280;
        }

        .product-brand {
          font-weight: 600;
          color: #374151;
        }

        .product-rating {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          gap: 8px;
        }

        .stars {
          display: flex;
        }

        .star {
          color: #d1d5db;
          font-size: 14px;
        }

        .star.filled {
          color: #fbbf24;
        }

        .review-count {
          font-size: 12px;
          color: #6b7280;
        }

        .product-price {
          margin-bottom: 16px;
          margin-top: auto;
        }

        .original-price {
          font-size: 12px;
          color: #6b7280;
          text-decoration: line-through;
          margin-right: 8px;
        }

        .current-price {
          font-size: 16px;
          font-weight: 700;
          color: #1f2937;
        }

        .current-price.sale-price {
          color: #f73312;
        }

        .add-to-cart-btn {
          width: 100%;
          background: #f73312;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .add-to-cart-btn:hover:not(:disabled) {
          background: #e63312;
          transform: translateY(-1px);
        }

        .add-to-cart-btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 768px) {
          .product-card {
            padding: 12px;
          }

          .product-image {
            height: 150px;
          }

          .product-name {
            font-size: 13px;
          }
        }
      `}</style>
    </Link>
  );
}

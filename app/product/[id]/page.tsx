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

  if (!product) {
    return (
      <div>
        <Header />
        <div style={{ padding: "40px 20px", textAlign: "center" }}>
          <h1>Product not found</h1>
          <Link href="/shop">Return to Shop</Link>
        </div>
      </div>
    );
  }

  // Get related products (same category)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: "Out of Stock", color: "#dc3545" };
    if (stock <= 3) return { text: "Low Stock", color: "#fd7e14" };
    if (stock <= 10) return { text: "Limited Stock", color: "#ffc107" };
    return { text: "In Stock", color: "#28a745" };
  };

  const stockStatus = getStockStatus(product.stock);

  // Mock additional images (in real app, these would come from product data)
  const productImages = [
    product.image,
    product.image, // Placeholder for additional angles
    product.image, // Placeholder for additional angles
  ];

  return (
    <div className="product-detail-page">
      <Header />

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/shop">Shop</Link>
          <span>/</span>
          <Link
            href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {product.category}
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <div className="product-container">
        <div className="product-gallery">
          <div className="main-image">
            <img src={productImages[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {productImages.map((img, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1>{product.name}</h1>
            <div className="product-meta">
              <span className="brand">Brand: {product.brand}</span>
              <span className="sku">SKU: {product.sku}</span>
            </div>
          </div>

          <div className="rating-section">
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
            <span className="rating-text">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="price-section">
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
            {product.originalPrice && (
              <span className="discount">
                Save KES{" "}
                {(product.originalPrice - product.price).toLocaleString()}
              </span>
            )}
          </div>

          <div className="compatibility">
            <h3>Vehicle Compatibility</h3>
            <p>🚗 Fits: {product.carModel}</p>
          </div>

          <div className="stock-info">
            <span className="stock-status" style={{ color: stockStatus.color }}>
              {stockStatus.text}
            </span>
            <span className="stock-count">
              {product.stock > 0 ? `${product.stock} units available` : ""}
            </span>
          </div>

          <div className="purchase-section">
            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
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
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="shipping-info">
            <div className="info-item">
              <span className="icon">🚚</span>
              <div>
                <strong>Free Delivery</strong>
                <p>Free delivery within Nairobi</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">🔧</span>
              <div>
                <strong>Installation Support</strong>
                <p>Professional installation available</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">🛡️</span>
              <div>
                <strong>Quality Guarantee</strong>
                <p>Genuine OEM and aftermarket parts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-products">
          <div className="container">
            <h2>Related Products</h2>
            <div className="products-grid">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        .product-detail-page {
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        .breadcrumbs {
          background: white;
          padding: 16px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .breadcrumbs .container {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .breadcrumbs a {
          color: #6b7280;
          text-decoration: none;
        }

        .breadcrumbs a:hover {
          color: #f73312;
        }

        .breadcrumbs span:last-child {
          color: #1f2937;
          font-weight: 600;
        }

        .product-container {
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .product-gallery {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .main-image {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .main-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 8px;
        }

        .thumbnail-images {
          display: flex;
          gap: 12px;
        }

        .thumbnail {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .thumbnail.active {
          border-color: #f73312;
        }

        .thumbnail img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 4px;
        }

        .product-info {
          background: white;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          height: fit-content;
        }

        .product-header h1 {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .product-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          font-size: 14px;
          color: #6b7280;
        }

        .brand {
          font-weight: 600;
          color: #374151;
        }

        .rating-section {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .stars {
          display: flex;
        }

        .star {
          color: #d1d5db;
          font-size: 18px;
        }

        .star.filled {
          color: #fbbf24;
        }

        .rating-text {
          font-size: 14px;
          color: #6b7280;
        }

        .price-section {
          margin-bottom: 32px;
        }

        .original-price {
          font-size: 18px;
          color: #6b7280;
          text-decoration: line-through;
          margin-right: 12px;
        }

        .current-price {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
        }

        .current-price.sale-price {
          color: #f73312;
        }

        .discount {
          display: block;
          font-size: 14px;
          color: #10b981;
          font-weight: 600;
          margin-top: 4px;
        }

        .compatibility {
          background: #f8f9fa;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 24px;
        }

        .compatibility h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1f2937;
        }

        .compatibility p {
          margin: 0;
          color: #374151;
        }

        .stock-info {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .stock-status {
          font-weight: 600;
          font-size: 14px;
        }

        .stock-count {
          font-size: 14px;
          color: #6b7280;
        }

        .purchase-section {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .quantity-selector label {
          font-weight: 600;
          color: #374151;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          overflow: hidden;
        }

        .quantity-controls button {
          background: #f9fafb;
          border: none;
          padding: 12px 16px;
          cursor: pointer;
          color: #374151;
          transition: background 0.3s ease;
        }

        .quantity-controls button:hover:not(:disabled) {
          background: #e5e7eb;
        }

        .quantity-controls button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quantity-controls span {
          padding: 12px 20px;
          background: white;
          font-weight: 600;
          min-width: 60px;
          text-align: center;
        }

        .add-to-cart-btn {
          background: #f73312;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: center;
          min-width: 200px;
        }

        .add-to-cart-btn:hover:not(:disabled) {
          background: #e63312;
        }

        .add-to-cart-btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .product-description {
          margin-bottom: 32px;
        }

        .product-description h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #1f2937;
        }

        .product-description p {
          color: #6b7280;
          line-height: 1.6;
        }

        .shipping-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .info-item .icon {
          font-size: 20px;
        }

        .info-item strong {
          display: block;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .info-item p {
          margin: 0;
          font-size: 14px;
          color: #6b7280;
        }

        .related-products {
          background: white;
          padding: 60px 0;
          margin-top: 40px;
        }

        .related-products h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 40px;
          text-align: center;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        @media (max-width: 768px) {
          .product-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .purchase-section {
            flex-direction: column;
            align-items: stretch;
          }

          .add-to-cart-btn {
            min-width: unset;
          }

          .thumbnail-images {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

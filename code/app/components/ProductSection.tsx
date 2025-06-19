"use client";

import { useState, useEffect } from "react";
import "./ProductSection.css";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  isOnSale?: boolean;
  badge?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  showCountdown?: boolean;
}

export default function ProductSection({
  title,
  products,
  showCountdown,
}: ProductSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45,
  });

  // Countdown timer effect
  useEffect(() => {
    if (!showCountdown) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showCountdown]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, products.length - 3)) %
        Math.max(1, products.length - 3),
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star ${i < Math.floor(rating) ? "filled" : ""}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="product-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>

          {showCountdown && (
            <div className="countdown-timer">
              <span className="countdown-label">Ends in:</span>
              <div className="countdown-display">
                <div className="time-unit">
                  <span className="time-value">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </span>
                  <span className="time-label">Days</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <span className="time-value">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </span>
                  <span className="time-label">Hours</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <span className="time-value">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </span>
                  <span className="time-label">Min</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <span className="time-value">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </span>
                  <span className="time-label">Sec</span>
                </div>
              </div>
            </div>
          )}

          <a href="#" className="see-all-link">
            See All
          </a>
        </div>

        <div className="product-carousel">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <div className="products-container">
            <div
              className="products-track"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  {product.badge && (
                    <span
                      className={`product-badge ${product.badge.toLowerCase().replace(" ", "-")}`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <div className="product-image">
                    <div className="placeholder-image">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <polyline
                          points="8.5,10 12,14 15.5,10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <button className="wishlist-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-title">{product.title}</h3>

                    <div className="product-rating">
                      <div className="stars">{renderStars(product.rating)}</div>
                      <span className="rating-value">({product.rating})</span>
                    </div>

                    <div className="product-price">
                      <span className="current-price">${product.price}</span>
                      {product.originalPrice && (
                        <span className="original-price">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <button className="btn btn-primary add-to-cart-btn">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

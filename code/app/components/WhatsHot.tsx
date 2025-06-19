"use client";

import { useState } from "react";
import "./WhatsHot.css";

export default function WhatsHot() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promoCards = [
    {
      id: 1,
      background: "linear-gradient(135deg, #ff6b6b, #ff8787)",
      text: "Keep things running smoothly",
      title: "Helix",
      description: "Premium engine oils and lubricants",
    },
    {
      id: 2,
      background: "linear-gradient(135deg, #4ecdc4, #44a08d)",
      text: "Performance unleashed",
      title: "Turbo Kits",
      description: "Boost your engine power",
    },
    {
      id: 3,
      background: "linear-gradient(135deg, #45b7d1, #96c93d)",
      text: "Crystal clear vision",
      title: "LED Lighting",
      description: "Brighten your drive",
    },
    {
      id: 4,
      background: "linear-gradient(135deg, #f39c12, #e67e22)",
      text: "Ultimate protection",
      title: "Brake Systems",
      description: "Safety first, performance second",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + promoCards.length) % promoCards.length,
    );
  };

  return (
    <section className="whats-hot-section">
      <div className="container">
        <h2 className="section-title">What's Hot</h2>
        <div className="promo-slider">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <div className="slider-container">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {promoCards.map((card) => (
                <div
                  key={card.id}
                  className="promo-card"
                  style={{ background: card.background }}
                >
                  <div className="promo-content">
                    <p className="promo-text">{card.text}</p>
                    <h3 className="promo-title">{card.title}</h3>
                    <p className="promo-description">{card.description}</p>
                    <button className="btn btn-secondary shop-now-btn">
                      Shop Now
                    </button>
                  </div>
                  <div className="promo-visual">
                    <div className="promo-shape"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className="slider-dots">
          {promoCards.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

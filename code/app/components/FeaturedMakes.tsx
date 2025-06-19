"use client";

import { useState } from "react";
import "./FeaturedMakes.css";

export default function FeaturedMakes() {
  const [activeTab, setActiveTab] = useState("makes");

  const makes = [
    "Acura",
    "Audi",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Dodge",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jeep",
    "Kia",
    "Lexus",
    "Lincoln",
    "Mazda",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Pontiac",
    "Ram",
    "Subaru",
    "Toyota",
    "Volkswagen",
    "Volvo",
    "Tesla",
  ];

  const models = [
    "Accord",
    "Camry",
    "Civic",
    "Corolla",
    "Cruze",
    "Elantra",
    "Escape",
    "Explorer",
    "F-150",
    "Focus",
    "Fusion",
    "Impala",
    "Jetta",
    "Malibu",
    "Pilot",
    "Prius",
    "RAV4",
    "Sentra",
    "Silverado",
    "Sonata",
    "Tahoe",
    "Tucson",
    "Wrangler",
    "X5",
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === "makes" ? "active" : ""}`}
            onClick={() => setActiveTab("makes")}
          >
            Featured Makes
          </button>
          <button
            className={`tab-btn ${activeTab === "models" ? "active" : ""}`}
            onClick={() => setActiveTab("models")}
          >
            Featured Models
          </button>
        </div>

        <div className="makes-grid">
          {(activeTab === "makes" ? makes : models).map((item, index) => (
            <button key={index} className="make-button">
              <span className="make-name">{item}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="make-arrow"
              >
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          ))}
        </div>

        <div className="view-more-container">
          <button className="btn btn-secondary view-more-btn">
            View More {activeTab === "makes" ? "Makes" : "Models"}
          </button>
        </div>
      </div>
    </section>
  );
}

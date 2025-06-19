"use client";

import { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [searchForm, setSearchForm] = useState({
    year: "",
    brand: "",
    model: "",
    engine: "",
    fuelType: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    console.log("Searching for:", searchForm);
    // Implement search logic here
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-subtitle">#1 Online Marketplace</h2>
              <h1 className="hero-title">Car Spares OEM & Aftermarkets</h1>
              <p className="hero-description">
                Find the perfect parts for your vehicle with our extensive
                catalog of OEM and aftermarket car parts and accessories.
              </p>
            </div>

            <div className="vehicle-search-form">
              <h3 className="form-title">Search by Vehicle</h3>
              <div className="form-grid">
                <select
                  value={searchForm.year}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                  className="form-select"
                >
                  <option value="">Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>

                <select
                  value={searchForm.brand}
                  onChange={(e) => handleInputChange("brand", e.target.value)}
                  className="form-select"
                >
                  <option value="">Brand</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="ford">Ford</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="audi">Audi</option>
                </select>

                <select
                  value={searchForm.model}
                  onChange={(e) => handleInputChange("model", e.target.value)}
                  className="form-select"
                >
                  <option value="">Model</option>
                  <option value="camry">Camry</option>
                  <option value="civic">Civic</option>
                  <option value="f150">F-150</option>
                  <option value="silverado">Silverado</option>
                  <option value="3series">3 Series</option>
                </select>

                <select
                  value={searchForm.engine}
                  onChange={(e) => handleInputChange("engine", e.target.value)}
                  className="form-select"
                >
                  <option value="">Engine</option>
                  <option value="1.4L">1.4L</option>
                  <option value="2.0L">2.0L</option>
                  <option value="2.5L">2.5L</option>
                  <option value="3.5L">3.5L</option>
                  <option value="5.0L">5.0L</option>
                </select>

                <select
                  value={searchForm.fuelType}
                  onChange={(e) =>
                    handleInputChange("fuelType", e.target.value)
                  }
                  className="form-select"
                >
                  <option value="">Fuel Type</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="diesel">Diesel</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Electric</option>
                </select>

                <button
                  onClick={handleSearch}
                  className="btn btn-primary search-button"
                >
                  Search Parts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

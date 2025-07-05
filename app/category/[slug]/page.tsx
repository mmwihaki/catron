"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { products, brands, carModels } from "../../data/products";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.slug as string;

  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("name");

  // Convert slug to readable category name
  const getCategoryName = (slug: string) => {
    const categoryMap: { [key: string]: string } = {
      all: "All Auto Parts",
      "oil-filter": "Oil Filters",
      "air-filter": "Air Filters",
      "cabin-filter": "Cabin Filters",
      "headlight-bulbs": "Headlight Bulbs",
      "spark-plugs": "Spark Plugs",
      "brake-pads": "Brake Pads",
      "fuel-filter": "Fuel Filters",
      suspension: "Suspension",
    };
    return categoryMap[slug] || "Category";
  };

  const categoryName = getCategoryName(categorySlug);

  // Filter products by category
  const getProductsForCategory = (categorySlug: string) => {
    if (categorySlug === "all") {
      return products;
    }

    const categoryFilters: { [key: string]: string[] } = {
      "oil-filter": ["Oil Filter"],
      "air-filter": ["Air Filter"],
      "cabin-filter": ["Cabin Filter"],
      "headlight-bulbs": ["Headlight Bulbs"],
      "spark-plugs": ["Spark Plugs"],
      "brake-pads": ["Brake Pads"],
      "fuel-filter": ["Fuel Filter"],
      suspension: ["Suspension"],
    };

    const allowedCategories = categoryFilters[categorySlug] || [];
    return products.filter((product) =>
      allowedCategories.includes(product.category),
    );
  };

  // Get filtered products
  let filteredProducts = getProductsForCategory(categorySlug);

  // Apply additional filters
  filteredProducts = filteredProducts.filter((product) => {
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesModel =
      selectedModels.length === 0 ||
      selectedModels.some((model) => product.carModel.includes(model));
    const matchesRating =
      selectedRating === null || product.rating >= selectedRating;

    return matchesPrice && matchesBrand && matchesModel && matchesRating;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const toggleModel = (model: string) => {
    setSelectedModels((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model],
    );
  };

  return (
    <div className="category-page">
      <Header />

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/shop">Shop</Link>
          <span>/</span>
          <span>{categoryName}</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="category-header">
        <div className="container">
          <h1>{categoryName}</h1>
          <p>
            Find the best {categoryName.toLowerCase()} for your Nissan vehicle
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <div className="container">
          <div className="category-layout">
            {/* Sidebar Filters */}
            <aside className="filters-sidebar">
              {/* Price Filter */}
              <div className="filter-group">
                <h3>Price Range</h3>
                <div className="price-inputs">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0] || ""}
                    onChange={(e) =>
                      setPriceRange([
                        Number(e.target.value) || 0,
                        priceRange[1],
                      ])
                    }
                    className="price-input"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1] || ""}
                    onChange={(e) =>
                      setPriceRange([
                        priceRange[0],
                        Number(e.target.value) || 20000,
                      ])
                    }
                    className="price-input"
                  />
                </div>
                <div className="price-display">
                  KES {priceRange[0].toLocaleString()} - KES{" "}
                  {priceRange[1].toLocaleString()}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="filter-group">
                <h3>Brand</h3>
                <div className="filter-options">
                  {brands.map((brand) => (
                    <label key={brand} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                      />
                      <span>{brand}</span>
                      <span className="count">
                        ({products.filter((p) => p.brand === brand).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Model Filter */}
              <div className="filter-group">
                <h3>Car Model</h3>
                <div className="filter-options">
                  {carModels.slice(0, 8).map((model) => (
                    <label key={model} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedModels.includes(model)}
                        onChange={() => toggleModel(model)}
                      />
                      <span>{model}</span>
                      <span className="count">
                        (
                        {
                          products.filter((p) => p.carModel.includes(model))
                            .length
                        }
                        )
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="filter-group">
                <h3>Rating</h3>
                <div className="filter-options">
                  {[5, 4, 3, 2].map((rating) => (
                    <label key={rating} className="filter-option">
                      <input
                        type="radio"
                        name="rating"
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                      />
                      <div className="rating-display">
                        {[...Array(rating)].map((_, i) => (
                          <span key={i} className="star filled">
                            ★
                          </span>
                        ))}
                        {[...Array(5 - rating)].map((_, i) => (
                          <span key={i} className="star">
                            ★
                          </span>
                        ))}
                        <span className="rating-text">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Products Area */}
            <main className="products-area">
              {/* Toolbar */}
              <div className="products-toolbar">
                <div className="toolbar-left">
                  <h2>{categoryName}</h2>
                  <span className="results-count">
                    {sortedProducts.length} products found
                  </span>
                </div>
                <div className="toolbar-right">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Best Rating</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <div className="products-grid">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try adjusting your filters to see more results.</p>
                </div>
              )}

              {/* Pagination */}
              {sortedProducts.length > 12 && (
                <div className="pagination">
                  <button className="page-btn">Previous</button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">Next</button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <style jsx>{`
        .category-page {
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .breadcrumbs {
          background: white;
          padding: 16px 0;
          border-bottom: 1px solid #e5e7eb;
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

        .category-header {
          background:
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url("https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F75e36c95f12346afabfeddc16cf3a2a6?format=webp&width=800");
          background-size: cover;
          background-position: center;
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .category-header h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .category-header p {
          font-size: 18px;
          opacity: 0.9;
        }

        .main-content {
          padding: 40px 0;
        }

        .category-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
        }

        .filters-sidebar {
          background: white;
          border-radius: 12px;
          padding: 24px;
          height: fit-content;
          position: sticky;
          top: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .filter-group {
          margin-bottom: 32px;
        }

        .filter-group h3 {
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 16px;
        }

        .price-inputs {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .price-input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
        }

        .price-display {
          font-size: 14px;
          color: #6b7280;
          text-align: center;
        }

        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .filter-option {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
        }

        .filter-option input {
          margin: 0;
        }

        .filter-option .count {
          margin-left: auto;
          color: #6b7280;
          font-size: 12px;
        }

        .rating-display {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .star {
          color: #d1d5db;
          font-size: 14px;
        }

        .star.filled {
          color: #fbbf24;
        }

        .rating-text {
          margin-left: 8px;
          font-size: 14px;
          color: #6b7280;
        }

        .products-area {
          min-height: 500px;
        }

        .products-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .toolbar-left h2 {
          font-size: 24px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 4px 0;
        }

        .results-count {
          font-size: 14px;
          color: #6b7280;
        }

        .sort-select {
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          background: white;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .no-products {
          text-align: center;
          padding: 80px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .no-products h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .no-products p {
          color: #6b7280;
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .page-btn {
          background: white;
          border: 1px solid #d1d5db;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }

        .page-btn.active {
          background: #f73312;
          color: white;
          border-color: #f73312;
        }

        .page-btn:hover:not(.active) {
          background: #f9fafb;
        }

        @media (max-width: 768px) {
          .category-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .filters-sidebar {
            position: relative;
            top: 0;
          }

          .products-toolbar {
            flex-direction: column;
            gap: 15px;
            align-items: stretch;
          }

          .toolbar-left,
          .toolbar-right {
            text-align: center;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 16px;
          }

          .category-header h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}

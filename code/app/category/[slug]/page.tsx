"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.slug as string;

  // Convert slug to readable category name
  const getCategoryName = (slug: string) => {
    const categoryMap: { [key: string]: string } = {
      "auto-parts": "Auto Parts",
      "car-care": "Car Care",
      performance: "Performance",
      "wheels-tires": "Wheels & Tires",
      exteriors: "Exteriors",
      interiors: "Interiors",
      entertainment: "Entertainment",
      "exhaust-system": "Exhaust System",
      "air-filters": "Air Filters",
      "starting-charging": "Starting & Charging",
      "wipers-washers": "Wipers & Washers",
      "fluids-chemicals": "Fluids & Chemicals",
    };
    return categoryMap[slug] || "Category";
  };

  const categoryName = getCategoryName(categorySlug);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "CERAMIC PISTON KIT COMPLETE",
      price: 8399,
      originalPrice: 9999,
      rating: 4.5,
      reviews: 24,
      image:
        "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=300",
      badge: "SALE",
    },
    {
      id: 2,
      name: "BOSCH OXY BOOSTER Spark with OEM Quality",
      price: 1499,
      originalPrice: 1899,
      rating: 4.8,
      reviews: 16,
      image:
        "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=300",
      badge: "SALE",
    },
    {
      id: 3,
      name: "AIR INTAKE Black Carbon Auto Parts Speed",
      price: 3599,
      originalPrice: 4299,
      rating: 4.3,
      reviews: 32,
      image:
        "https://images.pexels.com/photos/244824/pexels-photo-244824.jpeg?auto=compress&cs=tinysrgb&w=300",
      badge: "SALE",
    },
    {
      id: 4,
      name: "LED CAR Xenon HEADLIGHT Steering",
      price: 2099,
      rating: 4.6,
      reviews: 8,
      image:
        "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=300",
      badge: "SALE",
    },
  ];

  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const brands = ["NGK", "OSRAM", "KAVO", "DENSO", "BOSCH", "MANN"];
  const models = [
    "Note E12",
    "X-Trail T31",
    "March K13",
    "Tiida C11",
    "Sylphy B17",
  ];

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
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Top Header */}
      <header
        style={{ background: "#f73312", color: "white", padding: "15px 0" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F5d8fbe0d7a4c4e1a9a82d71637d82593"
              alt="Catron Auto Parts"
              style={{ height: "40px" }}
            />
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>Wishlist</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
              <span>Cart (0)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{ background: "#2c2c2c", color: "white", padding: "15px 0" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <button
            style={{
              background: "#f73312",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
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
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            All Categories
          </button>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Shop
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* Header Banner */}
      <section
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://cdn.builder.io/api/v1/image/assets%2F16c4d8eebb6943b4be5a75c55b5cdffd%2F75e36c95f12346afabfeddc16cf3a2a6?format=webp&width=800")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <h1 style={{ fontSize: "48px", fontWeight: "700", margin: "0" }}>
            {categoryName}
          </h1>
          <div style={{ marginTop: "20px", fontSize: "14px" }}>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>
            <span style={{ margin: "0 10px" }}>/</span>
            <span>{categoryName}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
          gap: "40px",
        }}
      >
        {/* Sidebar Filters */}
        <aside style={{ width: "280px", flexShrink: 0 }}>
          {/* Categories Filter */}
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Categories
            </h3>
            <div style={{ fontSize: "14px" }}>
              {[
                "All Items",
                "Auto Parts",
                "Car Care",
                "Performance",
                "Wheels & Tires",
                "Exteriors",
                "Interiors",
                "Entertainment",
                "Exhaust System",
                "Air Filters",
                "Starting & Charging",
                "Wipers & Washers",
                "Fluids & Chemicals",
              ].map((category, index) => (
                <div
                  key={index}
                  style={{
                    padding: "8px 0",
                    color:
                      category
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-") === categorySlug
                        ? "#f73312"
                        : "#666",
                    cursor: "pointer",
                    borderBottom: index === 0 ? "1px solid #eee" : "none",
                    paddingBottom: index === 0 ? "12px" : "8px",
                    marginBottom: index === 0 ? "12px" : "0",
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Price
            </h3>
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0] || ""}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                style={{
                  flex: 1,
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />
              <span style={{ alignSelf: "center" }}>-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1] || ""}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                style={{
                  flex: 1,
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />
            </div>
            <button
              style={{
                background: "#f73312",
                color: "white",
                border: "none",
                padding: "8px 20px",
                borderRadius: "4px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              GO
            </button>
          </div>

          {/* Brand Filter */}
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Brand
            </h3>
            {brands.map((brand) => (
              <label
                key={brand}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  style={{ marginRight: "8px" }}
                />
                <span style={{ fontSize: "14px", color: "#666" }}>{brand}</span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: "12px",
                    color: "#999",
                  }}
                >
                  ({Math.floor(Math.random() * 20) + 1})
                </span>
              </label>
            ))}
          </div>

          {/* Model Filter */}
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Model
            </h3>
            {models.map((model) => (
              <label
                key={model}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedModels.includes(model)}
                  onChange={() => toggleModel(model)}
                  style={{ marginRight: "8px" }}
                />
                <span style={{ fontSize: "14px", color: "#666" }}>{model}</span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: "12px",
                    color: "#999",
                  }}
                >
                  ({Math.floor(Math.random() * 15) + 1})
                </span>
              </label>
            ))}
          </div>

          {/* Rating Filter */}
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Rating
            </h3>
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="rating"
                  checked={selectedRating === rating}
                  onChange={() => setSelectedRating(rating)}
                  style={{ marginRight: "8px" }}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  {[...Array(rating)].map((_, i) => (
                    <span
                      key={i}
                      style={{ color: "#ffc107", fontSize: "14px" }}
                    >
                      ★
                    </span>
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <span key={i} style={{ color: "#ddd", fontSize: "14px" }}>
                      ★
                    </span>
                  ))}
                  <span
                    style={{
                      marginLeft: "8px",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    & Up
                  </span>
                </div>
              </label>
            ))}
          </div>
        </aside>

        {/* Main Products Area */}
        <main style={{ flex: 1 }}>
          {/* Best Seller Header */}
          <div style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#333",
                margin: "0",
              }}
            >
              Best Seller
            </h2>
          </div>

          {/* Products Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  padding: "15px",
                  position: "relative",
                  backgroundColor: "white",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
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

                {/* Product Image */}
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

                {/* Product Info */}
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

                {/* Rating */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div style={{ display: "flex", marginRight: "8px" }}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color:
                            i < Math.floor(product.rating) ? "#ffc107" : "#ddd",
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
                <div style={{ marginBottom: "10px" }}>
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
                  style={{
                    width: "100%",
                    background: "#f73312",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#dc2f02")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#f73312")
                  }
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid #ddd",
                background: "white",
                borderRadius: "4px",
              }}
            >
              Previous
            </button>
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid #f73312",
                background: "#f73312",
                color: "white",
                borderRadius: "4px",
              }}
            >
              1
            </button>
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid #ddd",
                background: "white",
                borderRadius: "4px",
              }}
            >
              2
            </button>
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid #ddd",
                background: "white",
                borderRadius: "4px",
              }}
            >
              Next
            </button>
          </div>
        </main>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .main-content {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}

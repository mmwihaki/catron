"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Product {
  id: number;
  sku: string;
  name: string;
  category: string;
  subcategory: string;
  brand: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  stockLevel: number;
  compatibility: string[];
}

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Category mapping
  const categoryMap: { [key: string]: { name: string; description: string } } =
    {
      engine: {
        name: "Engine Parts",
        description:
          "Oil filters, air filters, spark plugs, timing components, and engine accessories",
      },
      brakes: {
        name: "Brake System",
        description:
          "Brake pads, discs, calipers, brake fluid, and braking components",
      },
      suspension: {
        name: "Suspension",
        description:
          "Struts, shocks, springs, bushings, and suspension components",
      },
      electrical: {
        name: "Electrical",
        description:
          "Alternators, starters, sensors, lighting, and electrical components",
      },
      "body-trim": {
        name: "Body & Trim",
        description:
          "Body panels, bumpers, mirrors, handles, and exterior trim",
      },
      interior: {
        name: "Interior",
        description:
          "Seats, dashboard components, air conditioning, and interior accessories",
      },
    };

  const currentCategory = categoryMap[slug] || {
    name: "Category",
    description: "Nissan parts and accessories",
  };

  // Sample products for the category
  const categoryProducts: Product[] = [
    {
      id: 1,
      sku: "NIS-OF-001",
      name: "NISSAN OEM Oil Filter 15208-65F0C",
      category: "Engine",
      subcategory: "Oil Filters",
      brand: "Nissan OEM",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      price: 1850,
      originalPrice: 2200,
      rating: 4.8,
      reviews: 156,
      inStock: true,
      stockLevel: 45,
      compatibility: ["Note E12", "March K13", "Micra K13"],
    },
    {
      id: 2,
      sku: "NIS-AF-002",
      name: "NISSAN Cabin Air Filter 27277-1HM0A",
      category: "Engine",
      subcategory: "Air Filters",
      brand: "Nissan OEM",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
      price: 3200,
      originalPrice: 3800,
      rating: 4.7,
      reviews: 89,
      inStock: true,
      stockLevel: 23,
      compatibility: ["X-Trail T32", "Qashqai J11"],
    },
    // Add more products as needed
  ];

  const addToWhatsAppCart = (product: Product) => {
    const phoneNumber = "+254742578910";
    const message = `Hi! I'd like to order this Nissan part:\n\n• ${product.name} (SKU: ${product.sku})\n• Price: KES ${product.price.toLocaleString()}\n\nPlease confirm availability & payment details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="category-page">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-background-gray py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-silver">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>›</span>
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            <span>›</span>
            <span className="text-charcoal">{currentCategory.name}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-12 bg-gradient-to-r from-charcoal to-charcoal-light text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentCategory.name}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              {currentCategory.description}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span>📦 {categoryProducts.length} parts available</span>
              <span>🚚 Same-day delivery in Nairobi</span>
              <span>✅ Genuine OEM & certified parts</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        {/* Results Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="text-lg">
              <span className="font-bold">{categoryProducts.length}</span>
              <span className="text-silver ml-1">parts found</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-primary text-white" : "bg-white text-charcoal"}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-primary text-white" : "bg-white text-charcoal"}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-select"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className={viewMode === "grid" ? "card group" : "card flex gap-4"}
            >
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {product.originalPrice && (
                  <div className="badge badge-primary">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100,
                    )}
                    % OFF
                  </div>
                )}
              </div>

              {/* Product Image */}
              <div
                className={`${viewMode === "grid" ? "aspect-square mb-4" : "w-32 h-32 flex-shrink-0"} overflow-hidden rounded-lg bg-gray-100 relative`}
              >
                <Link href={`/product/${product.sku}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* Product Info */}
              <div className={`${viewMode === "grid" ? "" : "flex-1"}`}>
                <div className="text-xs text-primary font-medium mb-1">
                  {product.category} › {product.subcategory}
                </div>

                <Link href={`/product/${product.sku}`}>
                  <h3 className="font-semibold text-charcoal mb-2 hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>

                <div className="text-xs text-silver mb-2">
                  SKU: {product.sku} | Brand: {product.brand}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="text-yellow-400 text-sm">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-xs text-silver">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="text-xs text-silver mb-3">
                  <strong>Compatible:</strong>{" "}
                  {product.compatibility.slice(0, 2).join(", ")}
                  {product.compatibility.length > 2 &&
                    ` +${product.compatibility.length - 2} more`}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {product.originalPrice && (
                    <span className="text-sm text-silver line-through">
                      KES {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-lg font-bold text-primary">
                    KES {product.price.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`text-xs px-2 py-1 rounded ${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {product.inStock
                      ? product.stockLevel <= 10
                        ? `Low Stock (${product.stockLevel})`
                        : "In Stock"
                      : "Out of Stock"}
                  </div>
                </div>

                <div className={`${viewMode === "grid" ? "" : "flex gap-2"}`}>
                  <button
                    onClick={() => addToWhatsAppCart(product)}
                    disabled={!product.inStock}
                    className="btn whatsapp-btn w-full text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    {product.inStock ? "Order via WhatsApp" : "Out of Stock"}
                  </button>

                  {viewMode === "list" && (
                    <Link
                      href={`/product/${product.sku}`}
                      className="btn btn-outline text-sm"
                    >
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Pagination */}
        <div className="text-center mt-12">
          <button className="btn btn-outline">Load More Products</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

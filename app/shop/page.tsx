"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";

// Types
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
  compatibility: string[];
  year: number[];
  model: string[];
  engine: string[];
  inStock: boolean;
  stockLevel: number;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
}

interface FilterState {
  category: string[];
  brand: string[];
  priceRange: [number, number];
  year: string;
  model: string;
  engine: string;
  availability: string;
}

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 20;

  const [filters, setFilters] = useState<FilterState>({
    category: [],
    brand: [],
    priceRange: [0, 100000],
    year: "",
    model: "",
    engine: "",
    availability: "all",
  });

  // Sample product data - would come from API/database
  const allProducts: Product[] = [
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
      compatibility: ["Note E12", "March K13", "Micra K13"],
      year: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
      model: ["Note", "March", "Micra"],
      engine: ["1.2L DIG-S", "1.0L"],
      inStock: true,
      stockLevel: 45,
      tags: ["OEM", "Genuine", "Economy"],
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
      compatibility: ["X-Trail T32", "Qashqai J11"],
      year: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      model: ["X-Trail", "Qashqai"],
      engine: ["2.0L", "2.5L"],
      inStock: true,
      stockLevel: 23,
      tags: ["OEM", "Cabin Filter"],
    },
    {
      id: 3,
      sku: "NIS-SP-003",
      name: "NGK Spark Plug DILKAR7E11HS for DIG-S",
      category: "Engine",
      subcategory: "Spark Plugs",
      brand: "NGK",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
      price: 2400,
      rating: 4.9,
      reviews: 203,
      compatibility: ["Note DIG-S", "March DIG-S"],
      year: [2012, 2013, 2014, 2015, 2016, 2017],
      model: ["Note", "March"],
      engine: ["1.2L DIG-S"],
      inStock: true,
      stockLevel: 67,
      tags: ["NGK", "Performance", "DIG-S"],
    },
    {
      id: 4,
      sku: "NIS-BP-004",
      name: "NISSAN OEM Brake Pads Front D4060-1HM0A",
      category: "Brakes",
      subcategory: "Brake Pads",
      brand: "Nissan OEM",
      image:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=400&h=300&fit=crop",
      price: 8500,
      originalPrice: 9800,
      rating: 4.6,
      reviews: 134,
      compatibility: ["X-Trail T32", "Qashqai J11"],
      year: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      model: ["X-Trail", "Qashqai"],
      engine: ["2.0L", "2.5L"],
      inStock: true,
      stockLevel: 12,
      tags: ["OEM", "Safety", "Front"],
    },
    {
      id: 5,
      sku: "NIS-HB-005",
      name: "OSRAM Night Breaker 200 H4 Headlight Bulb",
      category: "Electrical",
      subcategory: "Headlight Bulbs",
      brand: "OSRAM",
      image:
        "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=300&fit=crop",
      price: 4500,
      rating: 4.8,
      reviews: 67,
      compatibility: ["Note E11/E12", "March K12/K13"],
      year: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      model: ["Note", "March"],
      engine: ["1.4L", "1.5L", "1.2L"],
      inStock: true,
      stockLevel: 34,
      isNew: true,
      tags: ["OSRAM", "Performance", "Bright"],
    },
    {
      id: 6,
      sku: "NIS-SP-006",
      name: "NISSAN Suspension Strut Front 54303-3TA0A",
      category: "Suspension",
      subcategory: "Struts",
      brand: "Nissan OEM",
      image:
        "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop",
      price: 12500,
      rating: 4.7,
      reviews: 45,
      compatibility: ["Serena C26"],
      year: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
      model: ["Serena"],
      engine: ["2.0L"],
      inStock: true,
      stockLevel: 8,
      isNew: true,
      tags: ["OEM", "Comfort", "Front"],
    },
    {
      id: 7,
      sku: "NIS-EL-007",
      name: "NISSAN Alternator 23100-3TA0B",
      category: "Electrical",
      subcategory: "Alternators",
      brand: "Nissan OEM",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      price: 18500,
      originalPrice: 21000,
      rating: 4.5,
      reviews: 23,
      compatibility: ["Serena C26", "NV200"],
      year: [2009, 2010, 2011, 2012, 2013, 2014, 2015],
      model: ["Serena", "NV200"],
      engine: ["2.0L"],
      inStock: true,
      stockLevel: 5,
      isNew: true,
      tags: ["OEM", "Electrical", "Charging"],
    },
    {
      id: 8,
      sku: "NIS-BT-008",
      name: "NISSAN Door Handle Outer Chrome 80607-1HM0A",
      category: "Body & Trim",
      subcategory: "Door Handles",
      brand: "Nissan OEM",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
      price: 5800,
      rating: 4.4,
      reviews: 12,
      compatibility: ["X-Trail T32"],
      year: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
      model: ["X-Trail"],
      engine: ["2.0L", "2.5L"],
      inStock: true,
      stockLevel: 15,
      isNew: true,
      tags: ["OEM", "Chrome", "Exterior"],
    },
    {
      id: 9,
      sku: "NIS-BP-009",
      name: "BREMBO Performance Brake Discs Front",
      category: "Brakes",
      subcategory: "Brake Discs",
      brand: "Brembo",
      image:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=400&h=300&fit=crop",
      price: 15500,
      originalPrice: 18000,
      rating: 4.9,
      reviews: 78,
      compatibility: ["370Z Z34", "GT-R R35"],
      year: [
        2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
      ],
      model: ["370Z", "GT-R"],
      engine: ["3.7L V6", "3.8L V6 Twin Turbo"],
      inStock: true,
      stockLevel: 6,
      isFeatured: true,
      tags: ["Brembo", "Performance", "Sport"],
    },
    {
      id: 10,
      sku: "NIS-EG-010",
      name: "NISSAN Timing Chain Kit QR25DE",
      category: "Engine",
      subcategory: "Timing Components",
      brand: "Nissan OEM",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop",
      price: 22500,
      rating: 4.6,
      reviews: 34,
      compatibility: ["Altima L33", "X-Trail T32", "Qashqai J11"],
      year: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      model: ["Altima", "X-Trail", "Qashqai"],
      engine: ["2.5L QR25DE"],
      inStock: true,
      stockLevel: 3,
      tags: ["OEM", "Timing", "Engine"],
    },
  ];

  const categories = [
    "Engine",
    "Brakes",
    "Suspension",
    "Electrical",
    "Body & Trim",
  ];
  const brands = ["Nissan OEM", "NGK", "OSRAM", "Brembo", "DENSO", "Bosch"];
  const nissanModels = [
    "Note",
    "March",
    "Micra",
    "X-Trail",
    "Qashqai",
    "Serena",
    "NV200",
    "370Z",
    "GT-R",
    "Altima",
  ];
  const engineOptions = [
    "1.0L",
    "1.2L DIG-S",
    "1.4L",
    "1.5L",
    "2.0L",
    "2.5L QR25DE",
    "3.7L V6",
    "3.8L V6 Twin Turbo",
  ];
  const years = Array.from({ length: 20 }, (_, i) => 2024 - i);

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.sku.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          product.compatibility.some((comp) =>
            comp.toLowerCase().includes(query),
          ),
      );
    }

    // Category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter((product) =>
        filters.category.includes(product.category),
      );
    }

    // Brand filter
    if (filters.brand.length > 0) {
      filtered = filtered.filter((product) =>
        filters.brand.includes(product.brand),
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1],
    );

    // Year filter
    if (filters.year) {
      const year = parseInt(filters.year);
      filtered = filtered.filter((product) => product.year.includes(year));
    }

    // Model filter
    if (filters.model) {
      filtered = filtered.filter((product) =>
        product.model.includes(filters.model),
      );
    }

    // Engine filter
    if (filters.engine) {
      filtered = filtered.filter((product) =>
        product.engine.includes(filters.engine),
      );
    }

    // Availability filter
    if (filters.availability === "in-stock") {
      filtered = filtered.filter((product) => product.inStock);
    } else if (filters.availability === "low-stock") {
      filtered = filtered.filter(
        (product) => product.inStock && product.stockLevel <= 10,
      );
    }

    return filtered;
  }, [searchQuery, filters, allProducts]);

  // Sorting logic
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "reviews":
        return sorted.sort((a, b) => b.reviews - a.reviews);
      case "newest":
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default: // relevance
        return sorted.sort((a, b) => {
          // Prioritize featured, then new, then by rating
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return b.rating - a.rating;
        });
    }
  }, [filteredProducts, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      brand: [],
      priceRange: [0, 100000],
      year: "",
      model: "",
      engine: "",
      availability: "all",
    });
    setSearchQuery("");
    setCurrentPage(1);
  };

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  const addToWhatsAppCart = (product: Product) => {
    const phoneNumber = "+254700000000";
    const message = `Hi! I'd like to order this Nissan part:\n\n• ${product.name} (SKU: ${product.sku})\n• Price: KES ${product.price.toLocaleString()}\n\nPlease confirm availability & payment details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="shop-page bg-secondary">
      {/* Header - Same as homepage */}
      <header className="bg-white shadow-lg">
        <div className="bg-dark text-white">
          <div className="container">
            <div className="flex justify-between items-center text-sm py-2">
              <div className="flex items-center gap-6">
                <span>📞 +254 700 000 000</span>
                <span>✉️ info@brator.co.ke</span>
              </div>
              <div className="flex items-center gap-4">
                <span>🌍 Kenya Wide Delivery</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              <div className="logo">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    B
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "var(--charcoal)" }}
                    >
                      BRATOR
                    </div>
                    <div className="text-xs text-secondary">
                      Nissan Parts Specialist
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex-1 max-w-2xl mx-8">
                <div className="flex border-2 border-primary rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search by part number, model, or keyword..."
                    className="flex-1 px-4 py-3 outline-none form-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="bg-primary text-white px-6 py-3 btn-primary">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Link href="/" className="text-gray-700 hover:text-red-600">
                  Home
                </Link>
                <span className="text-red-600 font-medium">Shop</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="text-secondary hover:text-primary">
              Home
            </Link>
            <span>›</span>
            <span style={{ color: "var(--charcoal)" }}>Shop</span>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`w-80 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="card sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Vehicle Selector */}
              <div className="mb-6 p-4 bg-light rounded-lg">
                <h4 className="font-medium mb-3">Find Parts By Vehicle</h4>
                <div className="space-y-3">
                  <select
                    className="form-select"
                    value={filters.year}
                    onChange={(e) => updateFilter("year", e.target.value)}
                  >
                    <option value="">Any Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select"
                    value={filters.model}
                    onChange={(e) => updateFilter("model", e.target.value)}
                  >
                    <option value="">Any Model</option>
                    {nissanModels.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select"
                    value={filters.engine}
                    onChange={(e) => updateFilter("engine", e.target.value)}
                  >
                    <option value="">Any Engine</option>
                    {engineOptions.map((engine) => (
                      <option key={engine} value={engine}>
                        {engine}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateFilter("category", [
                              ...filters.category,
                              category,
                            ]);
                          } else {
                            updateFilter(
                              "category",
                              filters.category.filter((c) => c !== category),
                            );
                          }
                        }}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="text-sm">{category}</span>
                      <span className="text-xs text-gray-400 ml-auto">
                        (
                        {
                          allProducts.filter((p) => p.category === category)
                            .length
                        }
                        )
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.brand.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateFilter("brand", [...filters.brand, brand]);
                          } else {
                            updateFilter(
                              "brand",
                              filters.brand.filter((b) => b !== brand),
                            );
                          }
                        }}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="text-sm">{brand}</span>
                      <span className="text-xs text-gray-400 ml-auto">
                        ({allProducts.filter((p) => p.brand === brand).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="500"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      updateFilter("priceRange", [0, parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-silver">
                    <span>KES 0</span>
                    <span>KES {filters.priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Availability</h4>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "All Items" },
                    { value: "in-stock", label: "In Stock" },
                    { value: "low-stock", label: "Low Stock" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="radio"
                        name="availability"
                        value={option.value}
                        checked={filters.availability === option.value}
                        onChange={(e) =>
                          updateFilter("availability", e.target.value)
                        }
                        className="border-gray-300"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                    />
                  </svg>
                  Filters
                </button>

                <div className="text-lg">
                  <span className="font-bold">{sortedProducts.length}</span>
                  <span className="text-gray-500 ml-1">parts found</span>
                  {searchQuery && (
                    <span className="text-sm text-gray-500 ml-2">
                      for "{searchQuery}"
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* View Mode Toggle */}
                <div className="flex border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-red-600 text-white" : "bg-white text-gray-700"}`}
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
                    className={`p-2 ${viewMode === "list" ? "bg-red-600 text-white" : "bg-white text-gray-700"}`}
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
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="newest">Newest First</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(filters.category.length > 0 ||
              filters.brand.length > 0 ||
              filters.year ||
              filters.model ||
              filters.engine ||
              searchQuery) && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                      Search: {searchQuery}
                      <button onClick={() => setSearchQuery("")}>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  )}

                  {filters.category.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {cat}
                      <button
                        onClick={() =>
                          updateFilter(
                            "category",
                            filters.category.filter((c) => c !== cat),
                          )
                        }
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}

                  {filters.brand.map((brand) => (
                    <div
                      key={brand}
                      className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {brand}
                      <button
                        onClick={() =>
                          updateFilter(
                            "brand",
                            filters.brand.filter((b) => b !== brand),
                          )
                        }
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Products Grid/List */}
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-4.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 009.586 13H7"
                  />
                </svg>
                <h3 className="text-xl font-medium mb-2">No parts found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                      : "space-y-4"
                  }
                >
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      className={
                        viewMode === "grid"
                          ? "card group relative"
                          : "card flex gap-4 relative"
                      }
                    >
                      {/* Product Badges */}
                      <div className="absolute top-4 left-4 z-10 flex gap-2">
                        {product.isNew && (
                          <div className="badge badge-success">NEW</div>
                        )}
                        {product.isFeatured && (
                          <div className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                            FEATURED
                          </div>
                        )}
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
                        <div className="text-xs text-red-600 font-medium mb-1">
                          {product.category} › {product.subcategory}
                        </div>

                        <Link href={`/product/${product.sku}`}>
                          <h3 className="font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                        </Link>

                        <div className="text-xs text-gray-500 mb-2">
                          SKU: {product.sku} | Brand: {product.brand}
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="text-yellow-400 text-sm">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-xs text-gray-500">
                            ({product.reviews} reviews)
                          </span>
                        </div>

                        <div className="text-xs text-gray-500 mb-3">
                          <strong>Compatible:</strong>{" "}
                          {product.compatibility.slice(0, 2).join(", ")}
                          {product.compatibility.length > 2 &&
                            ` +${product.compatibility.length - 2} more`}
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              KES {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                          <span className="text-lg font-bold text-red-600">
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

                        <div
                          className={`${viewMode === "grid" ? "" : "flex gap-2"}`}
                        >
                          <button
                            onClick={() => addToWhatsAppCart(product)}
                            disabled={!product.inStock}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors w-full text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                            </svg>
                            {product.inStock
                              ? "Order via WhatsApp"
                              : "Out of Stock"}
                          </button>

                          {viewMode === "list" && (
                            <Link
                              href={`/product/${product.sku}`}
                              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm"
                            >
                              View Details
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <button
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                      disabled={currentPage === 1}
                      className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-50 transition-colors text-sm disabled:opacity-50"
                    >
                      Previous
                    </button>

                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const page =
                        Math.max(1, Math.min(totalPages - 4, currentPage - 2)) +
                        i;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-1 rounded-md text-sm transition-colors ${currentPage === page ? "bg-red-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                        >
                          {page}
                        </button>
                      );
                    })}

                    <button
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-50 transition-colors text-sm disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div>
                  <div className="text-xl font-bold">BRATOR</div>
                  <div className="text-xs text-gray-400">
                    Nissan Parts Specialist
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Kenya's premier destination for genuine Nissan OEM and
                performance parts.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/shop" className="hover:text-white">
                    Shop All Parts
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white">
                    Fitment Guide
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>📞 +254 700 000 000</div>
                <div>✉️ info@brator.co.ke</div>
                <div>📍 Nairobi, Kenya</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            © 2024 Brator Auto Parts. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

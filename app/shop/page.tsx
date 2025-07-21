"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";
import OptimizedImage from "../components/OptimizedImage";
import { allProducts, Product } from "../data/products";
import { useCart } from "../context/CartContext";
import {
  Search,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  ChevronUp,
  Star,
  ShoppingCart,
  Eye,
  Heart,
  SlidersHorizontal,
  X,
  ArrowUpDown,
} from "lucide-react";

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
  const [showSortMenu, setShowSortMenu] = useState(false);
  const itemsPerPage = 20;
  const { addToCart } = useCart();

  const [filters, setFilters] = useState<FilterState>({
    category: [],
    brand: [],
    priceRange: [0, 100000],
    year: "",
    model: "",
    engine: "",
    availability: "all",
  });

  // Extract unique categories, brands, models, and engines from the product data
  const categories = [...new Set(allProducts.map((p) => p.category))];
  const brands = [...new Set(allProducts.map((p) => p.brand))];
  const nissanModels = [...new Set(allProducts.flatMap((p) => p.model || []))];
  const engineOptions = [
    ...new Set(allProducts.flatMap((p) => p.engine || [])),
  ];
  const years = [...new Set(allProducts.flatMap((p) => p.year || []))].sort(
    (a, b) => b - a,
  );

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      // Search query filter
      if (searchQuery) {
        const searchTerms = searchQuery.toLowerCase().split(" ");
        const productText = `${product.name} ${product.brand} ${product.category} ${product.sku} ${product.description}`.toLowerCase();
        if (!searchTerms.every((term) => productText.includes(term))) {
          return false;
        }
      }

      // Category filter
      if (filters.category.length > 0) {
        if (!filters.category.includes(product.category)) return false;
      }

      // Brand filter
      if (filters.brand.length > 0) {
        if (!filters.brand.includes(product.brand)) return false;
      }

      // Price range filter
      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      ) {
        return false;
      }

      // Year filter
      if (filters.year && product.year) {
        if (!product.year.includes(parseInt(filters.year))) return false;
      }

      // Model filter
      if (filters.model && product.model) {
        if (!product.model.includes(filters.model)) return false;
      }

      // Engine filter
      if (filters.engine && product.engine) {
        if (!product.engine.includes(filters.engine)) return false;
      }

      // Availability filter
      if (filters.availability === "in-stock" && !product.inStock) {
        return false;
      }
      if (filters.availability === "out-of-stock" && product.inStock) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Relevance sorting (keep original order)
        break;
    }

    return filtered;
  }, [searchQuery, filters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  const ProductCard = ({ product, isListView = false }: { product: Product; isListView?: boolean }) => (
    <div className={`card card-product ${isListView ? 'flex gap-6' : ''}`}>
      <div className={`relative ${isListView ? 'w-48 flex-shrink-0' : ''}`}>
        <Link href={`/product/${product.sku}`}>
          <OptimizedImage
            src={product.image}
            alt={product.name}
            width={isListView ? 192 : 300}
            height={isListView ? 144 : 200}
            className={`w-full ${isListView ? 'h-36' : 'h-48'} object-cover rounded-lg`}
          />
        </Link>
        
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </span>
        )}
        
        {product.isNew && (
          <span className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
            NEW
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            <Heart size={16} className="text-gray-600" />
          </button>
          <Link href={`/product/${product.sku}`} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            <Eye size={16} className="text-gray-600" />
          </Link>
        </div>
      </div>

      <div className={`${isListView ? 'flex-1' : 'p-4'}`}>
        <Link href={`/product/${product.sku}`}>
          <div className="text-sm text-gray mb-1">{product.category}</div>
          <h3 className="font-semibold text-gray-dark mb-2 hover:text-red transition-colors" style={{lineHeight: '1.4'}}>
            {product.name}
          </h3>
          <div className="text-sm text-muted mb-2">SKU: {product.sku}</div>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-muted">({product.reviews})</span>
          </div>

          {!isListView && (
            <div className="text-sm text-muted mb-3">
              Compatible: {product.compatibility.slice(0, 2).join(", ")}
              {product.compatibility.length > 2 && ` +${product.compatibility.length - 2} more`}
            </div>
          )}

          <div className="mb-3">
            <span className={`stock-badge ${product.inStock ? 'stock-in' : 'stock-out'}`}>
              {product.inStock ? `${product.stockLevel} in stock` : "Out of stock"}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            {product.originalPrice && (
              <span className="price-original">KES {product.originalPrice.toLocaleString()}</span>
            )}
            <span className="price">KES {product.price.toLocaleString()}</span>
          </div>
        </Link>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          disabled={!product.inStock}
          className={`btn ${product.inStock ? 'btn-primary' : 'btn-secondary'} w-full`}
        >
          <ShoppingCart size={16} />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );

  const FilterSection = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    return (
      <div className="border-b border-gray-200 pb-4 mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left font-semibold text-gray-dark mb-3"
        >
          {title}
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {isOpen && <div>{children}</div>}
      </div>
    );
  };

  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} currentPage="shop" />
      <CartSidebar />

      {/* Hero Section */}
      <section className="section-hero">
        <div className="container text-center">
          <h1 className="mb-4">Shop Premium Nissan Parts</h1>
          <p className="text-xl mb-6">
            Discover our complete range of genuine OEM and performance parts for your Nissan
          </p>
        </div>
      </section>

      <main id="main-content" className="section">
        <div className="container">
          {/* Search and Controls */}
          <div className="card mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search parts, SKU, brand..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input search-input"
                    aria-label="Search products"
                  />
                  <button className="search-btn" aria-label="Search">
                    <Search size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <button
                    onClick={() => setShowSortMenu(!showSortMenu)}
                    className="btn btn-outline flex items-center gap-2"
                    aria-expanded={showSortMenu}
                    aria-haspopup="true"
                  >
                    <ArrowUpDown size={16} />
                    Sort
                    <ChevronDown size={16} />
                  </button>
                  
                  {showSortMenu && (
                    <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48">
                      {[
                        { value: "relevance", label: "Relevance" },
                        { value: "price-low", label: "Price: Low to High" },
                        { value: "price-high", label: "Price: High to Low" },
                        { value: "name", label: "Name A-Z" },
                        { value: "rating", label: "Highest Rated" },
                        { value: "newest", label: "Newest First" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setShowSortMenu(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-colors ${viewMode === "grid" ? "bg-red-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                    aria-label="Grid view"
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-colors ${viewMode === "list" ? "bg-red-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                    aria-label="List view"
                  >
                    <List size={18} />
                  </button>
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="btn btn-outline lg:hidden flex items-center gap-2"
                  aria-expanded={showFilters}
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
              <div className="card sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-dark">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden p-1 hover:bg-gray-100 rounded"
                    aria-label="Close filters"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Categories */}
                <FilterSection title="Categories" defaultOpen>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(category)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters(prev => ({
                                ...prev,
                                category: [...prev.category, category]
                              }));
                            } else {
                              setFilters(prev => ({
                                ...prev,
                                category: prev.category.filter(c => c !== category)
                              }));
                            }
                          }}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="text-sm">{category}</span>
                        <span className="text-xs text-muted ml-auto">
                          ({allProducts.filter(p => p.category === category).length})
                        </span>
                      </label>
                    ))}
                  </div>
                </FilterSection>

                {/* Brands */}
                <FilterSection title="Brands">
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.brand.includes(brand)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters(prev => ({
                                ...prev,
                                brand: [...prev.brand, brand]
                              }));
                            } else {
                              setFilters(prev => ({
                                ...prev,
                                brand: prev.brand.filter(b => b !== brand)
                              }));
                            }
                          }}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="text-sm">{brand}</span>
                        <span className="text-xs text-muted ml-auto">
                          ({allProducts.filter(p => p.brand === brand).length})
                        </span>
                      </label>
                    ))}
                  </div>
                </FilterSection>

                {/* Availability */}
                <FilterSection title="Availability">
                  <div className="space-y-2">
                    {[
                      { value: "all", label: "All Products" },
                      { value: "in-stock", label: "In Stock" },
                      { value: "out-of-stock", label: "Out of Stock" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="availability"
                          value={option.value}
                          checked={filters.availability === option.value}
                          onChange={(e) => setFilters(prev => ({ ...prev, availability: e.target.value }))}
                          className="border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </FilterSection>

                {/* Clear Filters */}
                <button
                  onClick={() => {
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
                  }}
                  className="btn btn-outline w-full mt-4"
                >
                  Clear All Filters
                </button>
              </div>
            </aside>

            {/* Products */}
            <div className="lg:col-span-3">
              {/* Results Info */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-dark">
                  Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of{" "}
                  {filteredProducts.length} products
                </p>
              </div>

              {/* Products Grid/List */}
              {paginatedProducts.length > 0 ? (
                <div className={viewMode === "grid" ? "grid grid-3 gap-6" : "space-y-6"}>
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} isListView={viewMode === "list"} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl text-gray-300 mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-dark mb-2">No products found</h3>
                  <p className="text-muted mb-4">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setFilters({
                        category: [],
                        brand: [],
                        priceRange: [0, 100000],
                        year: "",
                        model: "",
                        engine: "",
                        availability: "all",
                      });
                    }}
                    className="btn btn-primary"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="btn btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`btn ${currentPage === page ? 'btn-primary' : 'btn-outline'}`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="btn btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

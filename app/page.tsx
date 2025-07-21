"use client";

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import OptimizedImage from "./components/OptimizedImage";
import {
  allProducts,
  getFeaturedProducts,
  Product,
  searchProducts,
  getProductsByCategory,
} from "./data/products";
import { useCart } from "./context/CartContext";
import {
  Filter,
  Wind,
  Disc,
  Zap,
  AirVent,
  Wrench,
  ArrowRight,
  Star,
  TrendingUp,
  Package,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleEngine, setVehicleEngine] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { addToCart } = cart;
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleVehicleSearch = () => {
    const searchTerms = [];
    if (vehicleYear) searchTerms.push(vehicleYear);
    if (vehicleModel) searchTerms.push(vehicleModel);
    if (vehicleEngine) searchTerms.push(vehicleEngine);

    if (searchTerms.length > 0) {
      const searchQuery = searchTerms.join(" ");
      router.push(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const search = searchParams.get("search");
    const category = searchParams.get("category");

    if (search) {
      setSearchQuery(search);
      const results = searchProducts(search);
      setFilteredProducts(results);
      setIsSearchActive(true);
    } else if (category) {
      const categoryName = decodeURIComponent(category);
      const results = getProductsByCategory(categoryName);
      setFilteredProducts(results);
      setIsSearchActive(true);
    } else {
      setFilteredProducts(allProducts);
      setIsSearchActive(false);
    }
  }, [searchParams]);

  const featuredProducts =
    getFeaturedProducts().length > 0
      ? getFeaturedProducts().slice(0, 4)
      : allProducts.slice(0, 4);

  const bestSellers = [...allProducts]
    .sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
    .slice(0, 4);

  const essentials = allProducts
    .filter(
      (product) =>
        product.category === "Oil Filter" ||
        product.category === "Air Filter" ||
        product.category === "Cabin Filter" ||
        product.category === "Spark Plugs",
    )
    .slice(0, 4);

  const newArrivals = allProducts
    .filter((product) => product.isNew)
    .slice(0, 4);

  const categories = [
    {
      name: "Oil Filters",
      description: "Engine oil filtration systems",
      icon: Filter,
      slug: "oil-filter",
      count: allProducts.filter((p) => p.category === "Oil Filter").length,
    },
    {
      name: "Air Filters",
      description: "Air intake filtration",
      icon: Wind,
      slug: "air-filter",
      count: allProducts.filter((p) => p.category === "Air Filter").length,
    },
    {
      name: "Brake Pads",
      description: "Brake system components",
      icon: Disc,
      slug: "brake-pads",
      count: allProducts.filter((p) => p.category === "Brake Pads").length,
    },
    {
      name: "Spark Plugs",
      description: "Ignition system parts",
      icon: Zap,
      slug: "spark-plugs",
      count: allProducts.filter((p) => p.category === "Spark Plugs").length,
    },
    {
      name: "Cabin Filters",
      description: "Interior air quality",
      icon: AirVent,
      slug: "cabin-filter",
      count: allProducts.filter((p) => p.category === "Cabin Filter").length,
    },
    {
      name: "Accessories",
      description: "Various auto accessories",
      icon: Wrench,
      slug: "accessories",
      count: allProducts.filter((p) => p.category === "Accessories").length,
    },
  ];

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="card card-product">
      <Link href={`/product/${product.sku}`}>
        <div style={{position: 'relative'}}>
          <OptimizedImage
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.375rem'}}
          />
          {product.originalPrice && (
            <span className="badge" style={{position: 'absolute', top: '0.5rem', left: '0.5rem', backgroundColor: '#dc2626', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '600'}}>
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100,
              )}
              % OFF
            </span>
          )}
          {product.isNew && (
            <span className="badge" style={{position: 'absolute', top: '0.5rem', right: '0.5rem', backgroundColor: '#059669', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '600'}}>
              NEW
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="text-sm text-gray mb-1">{product.category}</div>
          <h3 className="font-semibold mb-2" style={{lineHeight: '1.4'}}>{product.name}</h3>
          <div className="text-sm text-gray mb-2">SKU: {product.sku}</div>
          <div className="mb-2">
            <span style={{color: '#fbbf24'}}>{renderStars(product.rating)}</span>
            <span className="text-sm text-gray ml-1">({product.reviews})</span>
          </div>
          <div className="text-sm text-gray mb-3">
            Compatible: {product.compatibility.slice(0, 2).join(", ")}
            {product.compatibility.length > 2 &&
              ` +${product.compatibility.length - 2} more`}
          </div>
          <div className="mb-3">
            <span className={`stock-badge ${product.inStock ? 'stock-in' : 'stock-out'}`}>
              {product.inStock
                ? `${product.stockLevel} in stock`
                : "Out of stock"}
            </span>
          </div>
          <div className="flex flex-between mb-3">
            {product.originalPrice && (
              <span className="price-original">KES {product.originalPrice.toLocaleString()}</span>
            )}
            <span className="price">KES {product.price.toLocaleString()}</span>
          </div>
        </div>
      </Link>
      <div className="p-4" style={{paddingTop: 0}}>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
          }}
          disabled={!product.inStock}
          className={`btn ${product.inStock ? 'btn-primary' : 'btn-secondary'}`}
          style={{width: '100%'}}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CartSidebar />

      {!isSearchActive && (
        <>
          {/* Hero Section */}
          <section className="section-hero">
            <div className="container text-center">
              <h1 className="mb-4">Premium Nissan Parts</h1>
              <p className="text-xl mb-6">
                Kenya's #1 marketplace for genuine OEM and performance parts.
                Quality guaranteed, expert fitment support, fast delivery
                nationwide.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/shop" className="btn btn-primary btn-large">
                  Shop Nissan Parts
                </Link>
                <Link href="/support" className="btn btn-outline btn-large">
                  Fitment Guide
                </Link>
              </div>
            </div>
          </section>

          {/* Vehicle Search */}
          <section className="section section-light">
            <div className="container">
              <div className="text-center mb-6">
                <h2>Find Parts for Your Nissan</h2>
              </div>
              <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
                <div className="grid grid-3 gap-4 mb-4">
                  <div>
                    <label className="block mb-2 font-medium">Year</label>
                    <select
                      value={vehicleYear}
                      onChange={(e) => setVehicleYear(e.target.value)}
                      className="input"
                    >
                      <option value="">Select Year</option>
                      {Array.from({ length: 15 }, (_, i) => 2024 - i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Model</label>
                    <select
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      className="input"
                    >
                      <option value="">Select Model</option>
                      <option value="Note">Note</option>
                      <option value="March">March</option>
                      <option value="X-Trail">X-Trail</option>
                      <option value="Qashqai">Qashqai</option>
                      <option value="Serena">Serena</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Engine</label>
                    <select
                      value={vehicleEngine}
                      onChange={(e) => setVehicleEngine(e.target.value)}
                      className="input"
                    >
                      <option value="">Select Engine</option>
                      <option value="1.0L">1.0L</option>
                      <option value="1.2L DIG-S">1.2L DIG-S</option>
                      <option value="1.5L">1.5L</option>
                      <option value="2.0L">2.0L</option>
                      <option value="2.5L">2.5L</option>
                    </select>
                  </div>
                </div>
                <button onClick={handleVehicleSearch} className="btn btn-primary" style={{width: '100%'}}>
                  Find Compatible Parts
                </button>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="section">
            <div className="container">
              <div className="text-center mb-6">
                <h2>Shop by Category</h2>
                <p className="text-lg text-gray">Find the exact parts you need for your Nissan</p>
              </div>
              <div className="grid grid-3 gap-6">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Link key={category.slug} href={`/category/${category.slug}`} className="card text-center">
                      <IconComponent size={48} className="mx-auto mb-4 text-red" />
                      <h3 className="font-semibold mb-2">{category.name}</h3>
                      <p className="text-gray mb-2">{category.description}</p>
                      <p className="text-sm font-medium">{category.count} parts available</p>
                      <div className="mt-4">
                        <span className="btn btn-outline btn-small">Shop Now</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Best Sellers */}
          <section className="section section-light">
            <div className="container">
              <div className="flex flex-between mb-6">
                <div>
                  <h2>Best Sellers</h2>
                  <p className="text-gray">Most popular Nissan parts this month</p>
                </div>
                <Link href="/shop" className="btn btn-outline">
                  View All Best Sellers
                </Link>
              </div>
              <div className="grid grid-4 gap-6">
                {bestSellers.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          {/* Essentials */}
          <section className="section">
            <div className="container">
              <div className="flex flex-between mb-6">
                <div>
                  <h2>Essentials for Your Car</h2>
                  <p className="text-gray">Must-have maintenance parts for every Nissan owner</p>
                </div>
                <Link href="/shop" className="btn btn-outline">
                  View All Essentials
                </Link>
              </div>
              <div className="grid grid-4 gap-6">
                {essentials.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          {/* New Arrivals */}
          <section className="section section-light">
            <div className="container">
              <div className="flex flex-between mb-6">
                <div>
                  <h2>New Arrivals</h2>
                  <p className="text-gray">Latest additions to our Nissan parts catalog</p>
                </div>
                <Link href="/shop" className="btn btn-outline">
                  View All New Arrivals
                </Link>
              </div>
              <div className="grid grid-4 gap-6">
                {(newArrivals.length > 0 ? newArrivals : allProducts)
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="section">
            <div className="container">
              <div className="flex flex-between mb-6">
                <div>
                  <h2>Featured Products</h2>
                  <p className="text-gray">Hand-picked quality parts for your Nissan</p>
                </div>
                <Link href="/shop" className="btn btn-outline">
                  View All Featured
                </Link>
              </div>
              <div className="grid grid-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {isSearchActive && (
        <section className="section">
          <div className="container">
            <div className="mb-6">
              <h2>Search Results</h2>
              <p className="text-gray">
                Found {filteredProducts.length} products{" "}
                {searchParams.get("search") &&
                  `for "${searchParams.get("search")}"`}
              </p>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-4 gap-6">
                {filteredProducts.slice(0, 12).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center p-6">
                <p className="text-gray">No products found. Try adjusting your search terms.</p>
              </div>
            )}

            {filteredProducts.length > 12 && (
              <div className="text-center mt-6">
                <Link href="/shop" className="btn btn-primary">
                  View All {filteredProducts.length} Results
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

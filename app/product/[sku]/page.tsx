"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { allProducts, getProductsBySKU, Product } from "../../data/products";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface VINLookup {
  vin: string;
  isValid: boolean;
  vehicleInfo?: {
    year: number;
    make: string;
    model: string;
    engine: string;
    trim?: string;
  };
}

export default function ProductDetailPage() {
  const params = useParams();
  const sku = params.sku as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");
  const [vinNumber, setVinNumber] = useState("");
  const [vinLookup, setVinLookup] = useState<VINLookup | null>(null);
  const [compatibilityCheck, setCompatibilityCheck] = useState<{
    isCompatible: boolean;
    message: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState("description");
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    // Fetch product by SKU
    const foundProduct = getProductsBySKU(sku);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }
  }, [sku]);

  const performVINLookup = async () => {
    if (vinNumber.length !== 17) {
      setVinLookup({ vin: vinNumber, isValid: false });
      return;
    }

    // Simulate VIN decode API call
    setTimeout(() => {
      // Mock VIN decode result based on product compatibility
      const mockResult: VINLookup = {
        vin: vinNumber,
        isValid: true,
        vehicleInfo: {
          year: product?.year?.[0] || 2015,
          make: "NISSAN",
          model: product?.model?.[0] || "Note",
          engine: product?.engine?.[0] || "1.2L DIG-S",
          trim: product?.carModel || "E12",
        },
      };
      setVinLookup(mockResult);

      // Auto-populate compatibility check
      if (mockResult.vehicleInfo) {
        setSelectedYear(mockResult.vehicleInfo.year.toString());
        setSelectedModel(mockResult.vehicleInfo.model);
        setSelectedEngine(mockResult.vehicleInfo.engine);
        checkCompatibility(
          mockResult.vehicleInfo.year.toString(),
          mockResult.vehicleInfo.model,
          mockResult.vehicleInfo.engine,
        );
      }
    }, 1500);
  };

  const checkCompatibility = (
    year?: string,
    model?: string,
    engine?: string,
  ) => {
    if (!product) return;

    const checkYear = year || selectedYear;
    const checkModel = model || selectedModel;
    const checkEngine = engine || selectedEngine;

    if (!checkYear || !checkModel || !checkEngine) {
      setCompatibilityCheck(null);
      return;
    }

    const yearNum = parseInt(checkYear);
    const isCompatible =
      product.year &&
      product.year.includes(yearNum) &&
      product.model &&
      product.model.some((m) => m.toLowerCase() === checkModel.toLowerCase()) &&
      product.engine &&
      product.engine.some((e) =>
        e.toLowerCase().includes(checkEngine.toLowerCase().split(" ")[0]),
      );

    if (isCompatible) {
      setCompatibilityCheck({
        isCompatible: true,
        message: `✅ This part is compatible with your ${checkYear} NISSAN ${checkModel} ${checkEngine}`,
      });
    } else {
      setCompatibilityCheck({
        isCompatible: false,
        message: `❌ This part may not be compatible with your ${checkYear} NISSAN ${checkModel} ${checkEngine}. Please contact our experts for assistance.`,
      });
    }
  };

  const addToWhatsAppCart = () => {
    if (!product) return;

    const phoneNumber = "+254742578910";
    let message = `Hi! I'd like to order this Nissan part:\n\n`;
    message += `• ${quantity}x ${product.name}\n`;
    message += `• SKU: ${product.sku}\n`;
    message += `• Price: KES ${(product.price * quantity).toLocaleString()}\n\n`;

    if (compatibilityCheck?.isCompatible) {
      message += `Vehicle Compatibility:\n`;
      message += `• ${selectedYear} NISSAN ${selectedModel}\n`;
      message += `• Engine: ${selectedEngine}\n\n`;
    }

    message += `Please confirm availability, compatibility, and payment details.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          searchQuery=""
          setSearchQuery={() => {}}
          currentPage="product"
        />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">
              The product with SKU "{sku}" could not be found.
            </p>
            <Link
              href="/shop"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const availableYears = product.year
    ? [...new Set(product.year)].sort((a, b) => b - a)
    : [];
  const availableModels = product.model ? [...new Set(product.model)] : [];
  const availableEngines = product.engine ? [...new Set(product.engine)] : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery="" setSearchQuery={() => {}} currentPage="product" />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <span>›</span>
            <Link href="/shop" className="hover:text-red-600">
              Shop
            </Link>
            <span>›</span>
            <Link
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="hover:text-red-600"
            >
              {product.category}
            </Link>
            <span>›</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[selectedImageIndex]
                      : product.image
                  }
                  alt={product.name}
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => setShowFullGallery(true)}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <div className="bg-green-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                      NEW
                    </div>
                  )}
                  {product.isFeatured && (
                    <div className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                      FEATURED
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="bg-red-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      % OFF
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index
                          ? "border-red-600"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                <div className="text-sm text-red-600 font-medium mb-2">
                  {product.category}
                  {product.subcategory ? ` › ${product.subcategory}` : ""}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-400 text-lg">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    SKU: {product.sku}
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    Brand: {product.brand}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-4 mb-6">
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      KES {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-red-600">
                    KES {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                      Save KES{" "}
                      {(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.inStock
                        ? product.stockLevel <= 10
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.inStock
                      ? product.stockLevel <= 10
                        ? `Low Stock (${product.stockLevel} left)`
                        : "In Stock"
                      : "Out of Stock"}
                  </div>
                  <div className="text-sm text-gray-500">
                    🛡️ Warranty included
                  </div>
                </div>
              </div>

              {/* Compatibility Checker */}
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Vehicle Compatibility Checker
                </h3>

                {/* VIN Lookup */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    VIN Number (Quick Check)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter 17-character VIN number"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      value={vinNumber}
                      onChange={(e) =>
                        setVinNumber(e.target.value.toUpperCase())
                      }
                      maxLength={17}
                    />
                    <button
                      onClick={performVINLookup}
                      disabled={vinNumber.length !== 17}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Lookup
                    </button>
                  </div>
                  {vinLookup && !vinLookup.isValid && (
                    <p className="text-sm text-red-600 mt-1">
                      Please enter a valid 17-character VIN number
                    </p>
                  )}
                  {vinLookup?.vehicleInfo && (
                    <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        ✅ Vehicle identified: {vinLookup.vehicleInfo.year}{" "}
                        {vinLookup.vehicleInfo.make}{" "}
                        {vinLookup.vehicleInfo.model}{" "}
                        {vinLookup.vehicleInfo.engine}
                      </p>
                    </div>
                  )}
                </div>

                {/* Manual Selection */}
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      value={selectedYear}
                      onChange={(e) => {
                        setSelectedYear(e.target.value);
                        checkCompatibility(
                          e.target.value,
                          selectedModel,
                          selectedEngine,
                        );
                      }}
                    >
                      <option value="">Select Year</option>
                      {availableYears.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Model
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      value={selectedModel}
                      onChange={(e) => {
                        setSelectedModel(e.target.value);
                        checkCompatibility(
                          selectedYear,
                          e.target.value,
                          selectedEngine,
                        );
                      }}
                    >
                      <option value="">Select Model</option>
                      {availableModels.map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Engine
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      value={selectedEngine}
                      onChange={(e) => {
                        setSelectedEngine(e.target.value);
                        checkCompatibility(
                          selectedYear,
                          selectedModel,
                          e.target.value,
                        );
                      }}
                    >
                      <option value="">Select Engine</option>
                      {availableEngines.map((engine) => (
                        <option key={engine} value={engine}>
                          {engine}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Compatibility Result */}
                {compatibilityCheck && (
                  <div
                    className={`p-4 rounded-lg border ${
                      compatibilityCheck.isCompatible
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-red-50 border-red-200 text-red-800"
                    }`}
                  >
                    <p className="font-medium">{compatibilityCheck.message}</p>
                  </div>
                )}

                {!compatibilityCheck &&
                  (selectedYear || selectedModel || selectedEngine) && (
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="text-gray-600">
                        Please select year, model, and engine to check
                        compatibility
                      </p>
                    </div>
                  )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="bg-white border rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity
                    </label>
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-gray-50"
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
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(
                            Math.max(1, parseInt(e.target.value) || 1),
                          )
                        }
                        className="w-16 text-center border-none outline-none"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-gray-50"
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
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-sm text-gray-500">Total Price</div>
                    <div className="text-2xl font-bold text-red-600">
                      KES {(product.price * quantity).toLocaleString()}
                    </div>
                  </div>
                </div>

                <button
                  onClick={addToWhatsAppCart}
                  disabled={!product.inStock}
                  className="bg-green-600 hover:bg-green-700 text-white w-full text-lg py-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  {product.inStock ? "Order via WhatsApp" : "Out of Stock"}
                </button>

                <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Genuine OEM Part
                  </div>
                  <div className="flex items-center gap-1">
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Secure Ordering
                  </div>
                  <div className="flex items-center gap-1">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Fast Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <div className="flex gap-8">
              {[
                { id: "description", label: "Description" },
                { id: "compatibility", label: "Compatibility" },
                { id: "reviews", label: "Reviews" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium ${
                    activeTab === tab.id
                      ? "border-red-600 text-red-600"
                      : "border-transparent text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {product.description}
                </div>
              </div>
            )}

            {activeTab === "compatibility" && (
              <div>
                <h3 className="text-xl font-bold mb-6">Compatible Vehicles</h3>
                <div className="grid gap-6">
                  <div className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          NISSAN {product.carModel}
                        </h4>
                        <p className="text-gray-600">
                          Compatible Models: {product.compatibility.join(", ")}
                        </p>
                        {product.engine && (
                          <p className="text-gray-600">
                            Engines: {product.engine.join(", ")}
                          </p>
                        )}
                      </div>
                      {product.year && (
                        <div className="text-sm text-gray-500">
                          Years: {product.year.join(", ")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Important Notice
                  </h4>
                  <p className="text-sm text-yellow-700">
                    While we strive to provide accurate compatibility
                    information, we recommend confirming part compatibility with
                    your vehicle's VIN or consulting with our technical experts
                    before ordering. Vehicle specifications can vary by market
                    and production date.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-red-600">
                      {product.rating}
                    </div>
                    <div>
                      <div className="text-yellow-400 text-lg mb-1">
                        {renderStars(product.rating)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {product.reviews} reviews
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample reviews */}
                <div className="space-y-6">
                  {[
                    {
                      name: "John M.",
                      rating: 5,
                      date: "2024-01-15",
                      verified: true,
                      review: `Perfect fit for my ${product.carModel}. Installation was straightforward and the quality is excellent. Genuine ${product.brand} part as advertised.`,
                    },
                    {
                      name: "Sarah K.",
                      rating: 4,
                      date: "2024-01-10",
                      verified: true,
                      review:
                        "Good quality part, fast delivery. Only minor issue was the packaging could be better protected.",
                    },
                    {
                      name: "David R.",
                      rating: 5,
                      date: "2024-01-05",
                      verified: true,
                      review: `Excellent service from Brator. Part arrived quickly and fits perfectly on my ${product.compatibility[0]}. Will definitely order again.`,
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{review.name}</span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-yellow-400">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.review}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowFullGallery(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
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

            {/* Navigation for multiple images */}
            {product.images && product.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev === 0 ? product.images!.length - 1 : prev - 1,
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setSelectedImageIndex((prev) =>
                      prev === product.images!.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            <img
              src={
                product.images && product.images.length > 0
                  ? product.images[selectedImageIndex]
                  : product.image
              }
              alt={product.name}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Image counter */}
            {product.images && product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {product.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

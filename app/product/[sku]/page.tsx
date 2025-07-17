"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Types
interface Product {
  id: number;
  sku: string;
  name: string;
  category: string;
  subcategory: string;
  brand: string;
  images: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  compatibility: CompatibilityInfo[];
  description: string;
  specifications: { [key: string]: string };
  warranty: string;
  inStock: boolean;
  stockLevel: number;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
  relatedProducts: number[];
}

interface CompatibilityInfo {
  year: number[];
  model: string;
  engine: string;
  trim?: string;
  notes?: string;
}

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
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");
  const [vinNumber, setVinNumber] = useState("");
  const [vinLookup, setVinLookup] = useState<VINLookup | null>(null);
  const [compatibilityCheck, setCompatibilityCheck] = useState<{
    isCompatible: boolean;
    matchedCompatibility?: CompatibilityInfo;
    message: string;
  } | null>(null);
  const [activeTab, setActiveTab] = useState("description");
  const [showFullGallery, setShowFullGallery] = useState(false);

  // Sample product data - would normally come from API
  const sampleProduct: Product = {
    id: 1,
    sku: "NIS-OF-001",
    name: "NISSAN OEM Oil Filter 15208-65F0C",
    category: "Engine",
    subcategory: "Oil Filters",
    brand: "Nissan OEM",
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=800&h=600&fit=crop",
    ],
    price: 1850,
    originalPrice: 2200,
    rating: 4.8,
    reviews: 156,
    compatibility: [
      {
        year: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        model: "Note",
        engine: "1.2L DIG-S HR12DDR",
        trim: "E12 DIG-S",
        notes: "For supercharged DIG-S engine only",
      },
      {
        year: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
        model: "March",
        engine: "1.2L HR12DE",
        trim: "K13",
        notes: "Standard naturally aspirated engine",
      },
      {
        year: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        model: "Micra",
        engine: "1.2L HR12DE",
        trim: "K13",
        notes: "Global market version",
      },
    ],
    description: `
      Genuine NISSAN OEM oil filter designed specifically for HR12 engines. This high-quality filter ensures optimal 
      engine protection by removing contaminants and maintaining proper oil flow. Manufactured to exact NISSAN 
      specifications for perfect fit and reliable performance.
      
      Key Features:
      • Genuine NISSAN OEM part
      • Advanced filtration technology
      • Perfect fit guaranteed
      • Extended engine life
      • Maintains optimal oil pressure
      • Easy installation
      
      This oil filter is specifically designed for the HR12 series engines found in various NISSAN models including 
      the Note DIG-S, March K13, and Micra K13. The filter features a robust construction with high-quality filter 
      media that captures even the smallest particles while maintaining excellent oil flow characteristics.
    `,
    specifications: {
      "Part Number": "15208-65F0C",
      "Filter Type": "Spin-on Oil Filter",
      "Thread Size": "M20 x 1.5",
      Height: "96mm",
      Diameter: "93mm",
      "Filter Media": "Premium Cellulose",
      "Bypass Valve": "Built-in",
      "Anti-Drainback Valve": "Yes",
      "Operating Temperature": "-40°C to +150°C",
      "Filtration Efficiency": "99% @ 25 microns",
      "Recommended Change Interval": "10,000 km or 6 months",
    },
    warranty: "12 months or 20,000 km manufacturer warranty",
    inStock: true,
    stockLevel: 45,
    tags: ["OEM", "Genuine", "Economy", "HR12"],
    relatedProducts: [2, 3, 4, 5],
  };

  useEffect(() => {
    // Simulate API call to fetch product
    setProduct(sampleProduct);
  }, [sku]);

  const performVINLookup = async () => {
    if (vinNumber.length !== 17) {
      setVinLookup({ vin: vinNumber, isValid: false });
      return;
    }

    // Simulate VIN decode API call
    setTimeout(() => {
      // Mock VIN decode result
      const mockResult: VINLookup = {
        vin: vinNumber,
        isValid: true,
        vehicleInfo: {
          year: 2015,
          make: "NISSAN",
          model: "Note",
          engine: "1.2L DIG-S HR12DDR",
          trim: "E12 DIG-S",
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
    const matchedCompatibility = product.compatibility.find(
      (comp) =>
        comp.year.includes(yearNum) &&
        comp.model.toLowerCase() === checkModel.toLowerCase() &&
        comp.engine
          .toLowerCase()
          .includes(checkEngine.toLowerCase().split(" ")[0]),
    );

    if (matchedCompatibility) {
      setCompatibilityCheck({
        isCompatible: true,
        matchedCompatibility,
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

    const phoneNumber = "+254700000000";
    let message = `Hi! I'd like to order this Nissan part:\n\n`;
    message += `• ${quantity}x ${product.name}\n`;
    message += `• SKU: ${product.sku}\n`;
    message += `• Price: KES ${(product.price * quantity).toLocaleString()}\n\n`;

    if (
      compatibilityCheck?.isCompatible &&
      compatibilityCheck.matchedCompatibility
    ) {
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-silver">Loading product details...</p>
        </div>
      </div>
    );
  }

  const availableYears = [
    ...new Set(product.compatibility.flatMap((c) => c.year)),
  ].sort((a, b) => b - a);
  const availableModels = [
    ...new Set(product.compatibility.map((c) => c.model)),
  ];
  const availableEngines = [
    ...new Set(product.compatibility.map((c) => c.engine)),
  ];

  return (
    <div className="product-detail-page">
      {/* Header */}
      <header className="header bg-white shadow-md">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <div className="logo">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  B
                </div>
                <div>
                  <div className="text-2xl font-bold text-charcoal">BRATOR</div>
                  <div className="text-xs text-silver">
                    Nissan Parts Specialist
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/" className="text-charcoal hover:text-primary">
                Home
              </Link>
              <Link href="/shop" className="text-charcoal hover:text-primary">
                Shop
              </Link>
              <span className="text-primary font-medium">Product Details</span>
            </div>
          </div>
        </div>
      </header>

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
            <Link
              href={`/shop?category=${product.category}`}
              className="hover:text-primary"
            >
              {product.category}
            </Link>
            <span>›</span>
            <span className="text-charcoal">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => setShowFullGallery(true)}
                />

                {/* Image Navigation */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setSelectedImage(Math.max(0, selectedImage - 1))
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      disabled={selectedImage === 0}
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setSelectedImage(
                          Math.min(
                            product.images.length - 1,
                            selectedImage + 1,
                          ),
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      disabled={selectedImage === product.images.length - 1}
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <div className="badge badge-success">NEW</div>
                  )}
                  {product.isFeatured && (
                    <div className="badge badge-warning">FEATURED</div>
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
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
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
                <div className="text-sm text-primary font-medium mb-2">
                  {product.category} › {product.subcategory}
                </div>
                <h1 className="text-3xl font-bold text-charcoal mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-400 text-lg">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-silver">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="text-sm text-silver">SKU: {product.sku}</div>
                  <div className="text-sm font-medium text-charcoal">
                    Brand: {product.brand}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-4 mb-6">
                  {product.originalPrice && (
                    <span className="text-xl text-silver line-through">
                      KES {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-primary">
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
                  {product.warranty && (
                    <div className="text-sm text-silver">
                      🛡️ {product.warranty}
                    </div>
                  )}
                </div>
              </div>

              {/* Compatibility Checker */}
              <div className="bg-background-gray rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Vehicle Compatibility Checker
                </h3>

                {/* VIN Lookup */}
                <div className="mb-6">
                  <label className="form-label">VIN Number (Quick Check)</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter 17-character VIN number"
                      className="form-input flex-1"
                      value={vinNumber}
                      onChange={(e) =>
                        setVinNumber(e.target.value.toUpperCase())
                      }
                      maxLength={17}
                    />
                    <button
                      onClick={performVINLookup}
                      disabled={vinNumber.length !== 17}
                      className="btn btn-primary disabled:opacity-50"
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
                    <label className="form-label">Year</label>
                    <select
                      className="form-select w-full"
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
                    <label className="form-label">Model</label>
                    <select
                      className="form-select w-full"
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
                    <label className="form-label">Engine</label>
                    <select
                      className="form-select w-full"
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
                    {compatibilityCheck.matchedCompatibility?.notes && (
                      <p className="text-sm mt-2">
                        Note: {compatibilityCheck.matchedCompatibility.notes}
                      </p>
                    )}
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
                    <label className="form-label">Quantity</label>
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
                    <div className="text-sm text-silver">Total Price</div>
                    <div className="text-2xl font-bold text-primary">
                      KES {(product.price * quantity).toLocaleString()}
                    </div>
                  </div>
                </div>

                <button
                  onClick={addToWhatsAppCart}
                  disabled={!product.inStock}
                  className="btn whatsapp-btn w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
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

                <div className="flex items-center justify-center gap-6 mt-4 text-sm text-silver">
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
                { id: "specifications", label: "Specifications" },
                { id: "compatibility", label: "Compatibility" },
                { id: "reviews", label: "Reviews" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-silver hover:text-charcoal"
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
                <div className="whitespace-pre-line text-charcoal-light leading-relaxed">
                  {product.description}
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Technical Specifications
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="flex">
                          <span className="font-medium text-charcoal w-48">
                            {key}:
                          </span>
                          <span className="text-charcoal-light">{value}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Installation Notes</h3>
                  <div className="bg-background-gray rounded-lg p-6">
                    <ul className="space-y-2 text-charcoal-light">
                      <li>
                        • Always use a proper oil filter wrench for removal
                      </li>
                      <li>
                        • Apply a thin layer of clean oil to the new filter's
                        rubber gasket
                      </li>
                      <li>
                        • Hand tighten plus 3/4 turn - do not over-tighten
                      </li>
                      <li>
                        • Check for leaks after installation and first startup
                      </li>
                      <li>
                        • Dispose of old filter in an environmentally
                        responsible manner
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "compatibility" && (
              <div>
                <h3 className="text-xl font-bold mb-6">Compatible Vehicles</h3>
                <div className="grid gap-6">
                  {product.compatibility.map((comp, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-charcoal">
                            NISSAN {comp.model} {comp.trim && `(${comp.trim})`}
                          </h4>
                          <p className="text-charcoal-light">
                            Engine: {comp.engine}
                          </p>
                        </div>
                        <div className="text-sm text-silver">
                          Years: {comp.year.join(", ")}
                        </div>
                      </div>
                      {comp.notes && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <p className="text-sm text-blue-800">
                            <strong>Note:</strong> {comp.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
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
                    <div className="text-3xl font-bold text-primary">
                      {product.rating}
                    </div>
                    <div>
                      <div className="text-yellow-400 text-lg mb-1">
                        {renderStars(product.rating)}
                      </div>
                      <div className="text-sm text-silver">
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
                      review:
                        "Perfect fit for my 2015 Note DIG-S. Installation was straightforward and the quality is excellent. Genuine NISSAN part as advertised.",
                    },
                    {
                      name: "Sarah K.",
                      rating: 4,
                      date: "2024-01-10",
                      verified: true,
                      review:
                        "Good quality filter, fast delivery. Only minor issue was the packaging could be better protected.",
                    },
                    {
                      name: "David R.",
                      rating: 5,
                      date: "2024-01-05",
                      verified: true,
                      review:
                        "Excellent service from Brator. Part arrived quickly and fits perfectly on my March K13. Will definitely order again.",
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
                            <span className="text-sm text-silver">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-charcoal-light">{review.review}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-white mt-16">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
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
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="flex justify-center gap-2 mt-4">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    selectedImage === index ? "bg-white" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

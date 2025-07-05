import { Product } from "../context/CartContext";

export const products: Product[] = [
  {
    id: 1,
    name: "RIDEX Oil Filter",
    category: "Oil Filter",
    carModel: "E12/K13/N17",
    sku: "7O0026",
    brand: "RIDEX",
    stock: 30,
    price: 1300,
    description:
      "High-quality oil filter for Nissan models. Ensures clean oil circulation and engine protection for up to 10k kilometers.",
    image:
      "https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 24,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "RIDEX Plus Oil Filter",
    category: "Oil Filter",
    carModel: "E12/K13/N17",
    sku: "7O0026P",
    brand: "Ridex Plus",
    stock: 30,
    price: 1800,
    originalPrice: 2200,
    description:
      "Premium oil filter with extended life. Perfect for heavy-duty use and provides protection for up to 15k kilometers.",
    image:
      "https://images.pexels.com/photos/190570/pexels-photo-190570.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    reviews: 16,
  },
  {
    id: 3,
    name: "STARK Oil Filter",
    category: "Oil Filter",
    carModel: "E12/K13/N17",
    sku: "SKOF-0860025",
    brand: "STARK",
    stock: 3,
    price: 1800,
    description:
      "Professional grade oil filter designed for optimal performance. Tested for durability and reliability.",
    image:
      "https://images.pexels.com/photos/244824/pexels-photo-244824.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    reviews: 32,
    badge: "Low Stock",
  },
  {
    id: 4,
    name: "KAVO Air Filter",
    category: "Air Filter",
    carModel: "Teana L33 QR25de",
    sku: "NA-2650",
    brand: "KAVO",
    stock: 4,
    price: 4500,
    description:
      "Aftermarket OE Quality air filter. Improves engine performance and fuel efficiency for up to 15k kilometers.",
    image:
      "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 8,
    badge: "OE Quality",
  },
  {
    id: 5,
    name: "KAVO Cabin Filter",
    category: "Cabin Filter",
    carModel: "Teana L33 QR25de",
    sku: "NC-2037",
    brand: "KAVO",
    stock: 2,
    price: 4000,
    originalPrice: 4800,
    description:
      "High-quality cabin filter that removes dust, pollen, and pollutants. Ensures clean air inside your vehicle.",
    image:
      "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviews: 12,
    badge: "Limited Stock",
  },
  {
    id: 6,
    name: "KAVO Cabin Filter Carbon",
    category: "Cabin Filter",
    carModel: "Teana L33 QR25de",
    sku: "NC-2037C",
    brand: "KAVO",
    stock: 1,
    price: 6500,
    description:
      "Premium carbon cabin filter with superior filtration. Eliminates odors and provides maximum protection for up to 30k kilometers.",
    image:
      "https://images.pexels.com/photos/9489969/pexels-photo-9489969.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    reviews: 6,
    badge: "Premium",
  },
  {
    id: 7,
    name: "RIDEX HEPA Cabin Filter",
    category: "Cabin Filter",
    carModel: "E12/K13/N17",
    sku: "424I0259",
    brand: "RIDEX",
    stock: 50,
    price: 1200,
    description:
      "High Efficiency Particulate Air filter that captures 99.97% of particles. Perfect for allergy sufferers.",
    image:
      "https://images.pexels.com/photos/3932952/pexels-photo-3932952.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    reviews: 18,
  },
  {
    id: 8,
    name: "OSRAM Night Breaker 200 H4",
    category: "Headlight Bulbs",
    carModel: "H4 models",
    sku: "NB200H4",
    brand: "OSRAM",
    stock: 10,
    price: 7500,
    originalPrice: 9000,
    description:
      "Ultra-bright halogen headlight bulbs with up to 200% more light. Pack of 2 bulbs for enhanced night visibility.",
    image:
      "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    reviews: 35,
    badge: "200% Brighter",
  },
  {
    id: 9,
    name: "OSRAM Cool Blue Intense H4",
    category: "Headlight Bulbs",
    carModel: "H4 models",
    sku: "CBI100H4",
    brand: "OSRAM",
    stock: 10,
    price: 5500,
    description:
      "Stylish xenon-look headlight bulbs with cool blue light. Pack of 2 bulbs that provide excellent visibility and style.",
    image:
      "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 28,
    badge: "Xenon Look",
  },
  {
    id: 10,
    name: "NGK Spark Plug DIG-S",
    category: "Spark Plugs",
    carModel: "Note E12 DIG-S",
    sku: "DILKAR7E11HS (97439)",
    brand: "NGK",
    stock: 33,
    price: 4600,
    description:
      "High-performance iridium spark plug designed specifically for DIG-S engines. Ensures optimal ignition and fuel efficiency.",
    image:
      "https://images.pexels.com/photos/3846527/pexels-photo-3846527.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    reviews: 42,
    badge: "Iridium",
  },
  {
    id: 11,
    name: "NGK Spark Plug Universal",
    category: "Spark Plugs",
    carModel: "Note E12 Puredrive, March K13",
    sku: "DILKAR6A11 (9029)",
    brand: "NGK",
    stock: 18,
    price: 4250,
    description:
      "Universal spark plug compatible with multiple Nissan models. Reliable performance and long-lasting durability.",
    image:
      "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviews: 38,
  },
  {
    id: 12,
    name: "LPR Brake Pads",
    category: "Brake Pads",
    carModel: "E12/K13/N17",
    sku: "LPR 05P1686",
    brand: "LPR",
    stock: 1,
    price: 7500,
    description:
      "Aftermarket OE Quality brake pads with excellent stopping power. Designed to last 15k-30k kilometers under normal driving conditions.",
    image:
      "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 22,
    badge: "OE Quality",
  },
  {
    id: 13,
    name: "BOSCH Brake Pads Premium",
    category: "Brake Pads",
    carModel: "X-Trail T31/T32",
    sku: "BP1024",
    brand: "BOSCH",
    stock: 8,
    price: 9500,
    originalPrice: 11000,
    description:
      "Premium ceramic brake pads with superior stopping power and reduced brake dust. Perfect for SUV applications.",
    image:
      "https://images.pexels.com/photos/4488667/pexels-photo-4488667.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    reviews: 15,
    badge: "Ceramic",
  },
  {
    id: 14,
    name: "MANN Fuel Filter",
    category: "Fuel Filter",
    carModel: "Note E12/March K13",
    sku: "WK12003",
    brand: "MANN",
    stock: 25,
    price: 3200,
    description:
      "High-quality fuel filter that ensures clean fuel delivery to your engine. Improves performance and protects fuel injectors.",
    image:
      "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 20,
  },
  {
    id: 15,
    name: "KYB Shock Absorber",
    category: "Suspension",
    carModel: "X-Trail T31",
    sku: "KYB339138",
    brand: "KYB",
    stock: 5,
    price: 12500,
    description:
      "Premium gas shock absorber for enhanced ride comfort and vehicle stability. OE replacement quality with improved performance.",
    image:
      "https://images.pexels.com/photos/3846527/pexels-photo-3846527.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviews: 12,
    badge: "Gas Shock",
  },
];

export const categories = [
  { slug: "all", name: "All Parts", count: products.length },
  {
    slug: "oil-filter",
    name: "Oil Filters",
    count: products.filter((p) => p.category === "Oil Filter").length,
  },
  {
    slug: "air-filter",
    name: "Air Filters",
    count: products.filter((p) => p.category === "Air Filter").length,
  },
  {
    slug: "cabin-filter",
    name: "Cabin Filters",
    count: products.filter((p) => p.category === "Cabin Filter").length,
  },
  {
    slug: "headlight-bulbs",
    name: "Headlight Bulbs",
    count: products.filter((p) => p.category === "Headlight Bulbs").length,
  },
  {
    slug: "spark-plugs",
    name: "Spark Plugs",
    count: products.filter((p) => p.category === "Spark Plugs").length,
  },
  {
    slug: "brake-pads",
    name: "Brake Pads",
    count: products.filter((p) => p.category === "Brake Pads").length,
  },
  {
    slug: "fuel-filter",
    name: "Fuel Filters",
    count: products.filter((p) => p.category === "Fuel Filter").length,
  },
  {
    slug: "suspension",
    name: "Suspension",
    count: products.filter((p) => p.category === "Suspension").length,
  },
];

export const brands = [
  "RIDEX",
  "STARK",
  "KAVO",
  "OSRAM",
  "NGK",
  "LPR",
  "BOSCH",
  "MANN",
  "KYB",
];

export const carModels = [
  "E12/K13/N17",
  "Teana L33 QR25de",
  "H4 models",
  "Note E12 DIG-S",
  "Note E12 Puredrive",
  "March K13",
  "X-Trail T31/T32",
  "Note E12/March K13",
  "X-Trail T31",
];

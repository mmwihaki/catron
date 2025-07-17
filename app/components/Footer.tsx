import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  Zap,
  Settings,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      {/* Quality Guaranteed Section */}
      <div className="border-b border-divider border-opacity-30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Quality Guaranteed
              </h3>
              <p className="text-secondary">
                100% genuine OEM and certified aftermarket parts
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Fast Delivery
              </h3>
              <p className="text-secondary">
                Same day dispatch, Kenya-wide delivery
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Expert Support
              </h3>
              <p className="text-secondary">
                Professional fitment guidance and technical support
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                WhatsApp Ordering
              </h3>
              <p className="text-secondary">
                Easy ordering via WhatsApp with instant support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent-primary">
              CATRON AUTO PARTS
            </h3>
            <p className="text-secondary">
              Your trusted partner for quality automotive parts and exceptional
              service across Kenya.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-secondary hover:text-accent-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-secondary hover:text-accent-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-secondary hover:text-accent-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-secondary hover:text-accent-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/filters"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  Filters
                </Link>
              </li>
              <li>
                <Link
                  href="/category/brakes"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  Brake Parts
                </Link>
              </li>
              <li>
                <Link
                  href="/category/belts"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  Belts
                </Link>
              </li>
              <li>
                <Link
                  href="/category/lighting"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  Lighting
                </Link>
              </li>
              <li>
                <Link
                  href="/category/suspension"
                  className="text-secondary hover:text-accent-secondary transition-colors"
                >
                  Suspension
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-primary" />
                <span className="text-secondary">+254 712 345 678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-primary" />
                <span className="text-secondary">info@catron.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-primary" />
                <span className="text-secondary">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-divider border-opacity-30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary text-sm">
              &copy; 2024 Catron Auto Parts. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-secondary hover:text-accent-secondary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-secondary hover:text-accent-secondary text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-secondary hover:text-accent-secondary text-sm transition-colors"
              >
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

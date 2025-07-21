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
    <footer className="footer">
      <div className="container">
        {/* Features */}
        <div className="grid grid-4 gap-6 mb-6">
          <div className="text-center">
            <CheckCircle size={32} className="mx-auto mb-3 text-green" />
            <h4 className="font-semibold mb-2 text-white">Quality Guaranteed</h4>
            <p className="text-sm">100% genuine OEM and certified aftermarket parts</p>
          </div>
          <div className="text-center">
            <Zap size={32} className="mx-auto mb-3 text-green" />
            <h4 className="font-semibold mb-2 text-white">Fast Delivery</h4>
            <p className="text-sm">Same day dispatch, Kenya-wide delivery</p>
          </div>
          <div className="text-center">
            <Settings size={32} className="mx-auto mb-3 text-green" />
            <h4 className="font-semibold mb-2 text-white">Expert Support</h4>
            <p className="text-sm">Professional fitment guidance and technical support</p>
          </div>
          <div className="text-center">
            <MessageCircle size={32} className="mx-auto mb-3 text-green" />
            <h4 className="font-semibold mb-2 text-white">WhatsApp Ordering</h4>
            <p className="text-sm">Easy ordering via WhatsApp with instant support</p>
          </div>
        </div>

        <div className="grid grid-4 gap-6">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">CATRON AUTO PARTS</h3>
            <p className="mb-4">
              Your trusted partner for quality automotive parts and exceptional
              service across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div>
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/shop" className="footer-link">Shop</Link>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/support" className="footer-link">Support</Link>
            </div>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3 className="footer-title">Categories</h3>
            <div>
              <Link href="/category/filters" className="footer-link">Filters</Link>
              <Link href="/category/brake-parts" className="footer-link">Brake Parts</Link>
              <Link href="/category/belts" className="footer-link">Belts</Link>
              <Link href="/category/lighting" className="footer-link">Lighting</Link>
              <Link href="/category/suspension" className="footer-link">Suspension</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="flex gap-2 mb-2">
              <Phone size={16} />
              <span>0742578910</span>
            </div>
            <div className="flex gap-2 mb-4">
              <MapPin size={16} />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-4 mt-6">
          <div className="flex flex-between text-sm">
            <p>&copy; 2024 Catron Auto Parts. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <Link href="/terms" className="footer-link">Terms of Service</Link>
              <Link href="/warranty" className="footer-link">Warranty</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

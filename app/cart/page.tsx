"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";

export default function CartPage() {
  const {
    state,
    updateQuantity,
    removeFromCart,
    clearCart,
    generateWhatsAppMessage,
  } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleWhatsAppCheckout = () => {
    const whatsappUrl = generateWhatsAppMessage();
    window.open(whatsappUrl, "_blank");
  };

  if (state.items.length === 0) {
    return (
      <div className="cart-page">
        <Header />

        <div className="empty-cart">
          <div className="empty-cart-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any auto parts to your cart yet.</p>
          <Link href="/shop" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>

        <style jsx>{`
          .cart-page {
            min-height: 100vh;
            background-color: #f8f9fa;
          }

          .empty-cart {
            max-width: 600px;
            margin: 80px auto;
            padding: 60px 40px;
            text-align: center;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .empty-cart-icon {
            color: #d1d5db;
            margin-bottom: 24px;
          }

          .empty-cart h2 {
            font-size: 28px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 12px;
          }

          .empty-cart p {
            font-size: 16px;
            color: #6b7280;
            margin-bottom: 32px;
          }

          .continue-shopping-btn {
            background: #f73312;
            color: white;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.3s ease;
          }

          .continue-shopping-btn:hover {
            background: #e63312;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />

      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>
            {state.itemCount} {state.itemCount === 1 ? "item" : "items"} in your
            cart
          </p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {state.items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-brand">{item.brand}</p>
                  <p className="item-sku">SKU: {item.sku}</p>
                  <p className="item-model">Fits: {item.carModel}</p>
                </div>

                <div className="item-price">
                  <span className="price">
                    KES {item.price.toLocaleString()}
                  </span>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>

                <div className="item-total">
                  <span className="total">
                    KES {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="3,6 5,6 21,6"></polyline>
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>

              <div className="summary-line">
                <span>Subtotal ({state.itemCount} items)</span>
                <span>KES {state.total.toLocaleString()}</span>
              </div>

              <div className="summary-line">
                <span>Shipping</span>
                <span className="free">Free</span>
              </div>

              <div className="summary-line total-line">
                <span>Total</span>
                <span>KES {state.total.toLocaleString()}</span>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="whatsapp-checkout-btn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
                </svg>
                Checkout via WhatsApp
              </button>

              <div className="checkout-info">
                <p>🔒 Secure checkout via WhatsApp</p>
                <p>💬 Direct communication with our team</p>
                <p>🚚 Free delivery within Nairobi</p>
              </div>

              <button onClick={clearCart} className="clear-cart-btn">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cart-page {
          min-height: 100vh;
          background-color: #f8f9fa;
        }

        .cart-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .cart-header {
          margin-bottom: 40px;
        }

        .cart-header h1 {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .cart-header p {
          color: #6b7280;
          font-size: 16px;
        }

        .cart-content {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 40px;
        }

        .cart-items {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .cart-item {
          display: grid;
          grid-template-columns: 80px 1fr auto auto auto auto;
          gap: 20px;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .cart-item:last-child {
          border-bottom: none;
        }

        .item-image img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
        }

        .item-details h3 {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .item-details p {
          font-size: 14px;
          color: #6b7280;
          margin: 2px 0;
        }

        .item-brand {
          font-weight: 600;
          color: #374151;
        }

        .item-price .price {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          overflow: hidden;
        }

        .quantity-btn {
          background: #f9fafb;
          border: none;
          padding: 8px 12px;
          cursor: pointer;
          color: #374151;
          transition: background 0.3s ease;
        }

        .quantity-btn:hover {
          background: #e5e7eb;
        }

        .quantity {
          padding: 8px 16px;
          background: white;
          font-weight: 600;
          min-width: 50px;
          text-align: center;
        }

        .item-total .total {
          font-size: 18px;
          font-weight: 700;
          color: #f73312;
        }

        .remove-btn {
          background: none;
          border: none;
          color: #dc2626;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .remove-btn:hover {
          background: #fef2f2;
        }

        .cart-summary {
          position: sticky;
          top: 20px;
          height: fit-content;
        }

        .summary-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .summary-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 20px;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          font-size: 16px;
        }

        .summary-line.total-line {
          border-top: 1px solid #e5e7eb;
          padding-top: 12px;
          margin-top: 20px;
          font-weight: 700;
          font-size: 18px;
        }

        .free {
          color: #10b981;
          font-weight: 600;
        }

        .whatsapp-checkout-btn {
          width: 100%;
          background: #25d366;
          color: white;
          border: none;
          padding: 16px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 24px 0;
        }

        .whatsapp-checkout-btn:hover {
          background: #22c55e;
        }

        .checkout-info {
          margin: 20px 0;
        }

        .checkout-info p {
          font-size: 14px;
          color: #6b7280;
          margin: 8px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .clear-cart-btn {
          width: 100%;
          background: transparent;
          color: #dc2626;
          border: 1px solid #dc2626;
          padding: 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .clear-cart-btn:hover {
          background: #dc2626;
          color: white;
        }

        @media (max-width: 768px) {
          .cart-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cart-item {
            grid-template-columns: 60px 1fr;
            gap: 12px;
          }

          .item-price,
          .quantity-controls,
          .item-total {
            grid-column: 2;
            justify-self: start;
            margin-top: 8px;
          }

          .remove-btn {
            grid-column: 2;
            justify-self: end;
            grid-row: 1;
          }
        }
      `}</style>
    </div>
  );
}

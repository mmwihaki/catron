"use client";

import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import WhatsAppCheckout from "./WhatsAppCheckout";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="cart-overlay"
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
      />

      {/* Sidebar */}
      <div
        className="cart-sidebar"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "400px",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 1001,
          boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid #e5e5e5",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
            Shopping Cart ({getCartCount()})
          </h3>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              padding: "0",
              color: "#666",
            }}
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
          }}
        >
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "#666",
                fontSize: "16px",
                marginTop: "40px",
              }}
            >
              Your cart is empty
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginBottom: "20px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        margin: "0 0 4px 0",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "1.3",
                      }}
                    >
                      {item.name}
                    </h4>
                    <p
                      style={{
                        margin: "0 0 8px 0",
                        fontSize: "12px",
                        color: "#666",
                      }}
                    >
                      {item.category}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          style={{
                            width: "24px",
                            height: "24px",
                            border: "1px solid #ddd",
                            background: "white",
                            borderRadius: "4px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          -
                        </button>
                        <span
                          style={{
                            fontSize: "14px",
                            minWidth: "20px",
                            textAlign: "center",
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          style={{
                            width: "24px",
                            height: "24px",
                            border: "1px solid #ddd",
                            background: "white",
                            borderRadius: "4px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#ff4444",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                    <div
                      style={{
                        marginTop: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      KES {(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with total and checkout */}
        {cartItems.length > 0 && (
          <div
            style={{
              padding: "20px",
              borderTop: "1px solid #e5e5e5",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              <span>Total:</span>
              <span>KES {getCartTotal().toLocaleString()}</span>
            </div>

            <WhatsAppCheckout
              phoneNumber="+254712345678" // Replace with actual business number
              buttonText="Order via WhatsApp"
            />

            <button
              onClick={clearCart}
              style={{
                marginTop: "12px",
                width: "100%",
                padding: "8px",
                background: "none",
                border: "1px solid #ddd",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                color: "#666",
              }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;

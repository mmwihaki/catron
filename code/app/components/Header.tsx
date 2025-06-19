"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ position: "relative", zIndex: 1000 }}>
      {/* Top promotional banner */}
      <div
        style={{
          backgroundColor: "rgb(30, 30, 31)",
          color: "white",
          padding: "10px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "600", fontSize: "14px" }}>
            BLACK FRIDAY 50% Brator50
          </span>
          <select
            style={{
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "4px",
            }}
          >
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
          </select>
        </div>
      </div>

      {/* Main header */}
      <div
        style={{
          backgroundColor: "rgb(38, 38, 39)",
          color: "white",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {/* Logo */}
          <div>
            <h1
              style={{
                color: "rgb(247, 51, 18)",
                fontSize: "28px",
                fontWeight: "800",
                margin: "0",
              }}
            >
              Brator
            </h1>
          </div>

          {/* Search bar */}
          <div style={{ flex: "1", maxWidth: "500px" }}>
            <div
              style={{
                display: "flex",
                borderRadius: "6px",
                overflow: "hidden",
                background: "white",
              }}
            >
              <input
                type="text"
                placeholder="Search for car parts, accessories..."
                style={{
                  flex: "1",
                  padding: "12px 15px",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                }}
              />
              <button
                style={{
                  background: "rgb(247, 51, 18)",
                  border: "none",
                  padding: "12px 15px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                🔍
              </button>
            </div>
          </div>

          {/* User actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "8px",
                fontSize: "18px",
              }}
            >
              ❤️ 0
            </button>

            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "8px",
                fontSize: "18px",
              }}
            >
              🛒 0
            </button>

            <button
              style={{
                background: "rgb(247, 51, 18)",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "rgb(242, 242, 247)",
          borderBottom: "1px solid rgb(212, 212, 212)",
          padding: "15px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              border: "1px solid rgb(212, 212, 212)",
              padding: "10px 20px",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            ☰ Categories
          </button>

          <div
            style={{
              display: "flex",
              gap: "30px",
              flex: "1",
            }}
          >
            {["Home", "Shop", "Brands", "Deals", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <a
            href="#"
            style={{
              color: "rgb(247, 51, 18)",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Track Your Order
          </a>
        </div>
      </nav>
    </header>
  );
}

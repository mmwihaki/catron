"use client";

import React, { useState } from "react";

const WhatsAppSetup = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Help button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          zIndex: 1002,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        ?
      </button>

      {/* Setup modal */}
      {isVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            left: "20px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            maxWidth: "300px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            zIndex: 1002,
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0", color: "#25D366" }}>
            WhatsApp Checkout Setup
          </h4>
          <p style={{ margin: "0 0 10px 0" }}>
            To configure your business WhatsApp number:
          </p>
          <ol style={{ margin: "0 0 10px 0", paddingLeft: "20px" }}>
            <li>Update the phone number in WhatsAppCheckout.tsx</li>
            <li>Replace "+254712345678" with your business number</li>
            <li>Include country code (e.g., +254 for Kenya)</li>
          </ol>
          <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>
            Currently using demo number: +254712345678
          </p>
          <button
            onClick={() => setIsVisible(false)}
            style={{
              marginTop: "10px",
              backgroundColor: "#f0f0f0",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppSetup;

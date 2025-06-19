export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "60px",
            margin: "0 0 20px 0",
            color: "#F73312",
            fontWeight: "bold",
          }}
        >
          Brator
        </h1>
        <h2
          style={{
            fontSize: "24px",
            margin: "0 0 30px 0",
            fontWeight: "normal",
          }}
        >
          Car Parts & Accessories
        </h2>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto 40px auto",
            lineHeight: "1.6",
            opacity: 0.9,
          }}
        >
          #1 Online Marketplace for Car Spares OEM & Aftermarkets. Find the
          perfect parts for your vehicle with our extensive catalog.
        </p>
        <button
          style={{
            background: "#F73312",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

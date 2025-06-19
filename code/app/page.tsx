import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
        <h1
          style={{ color: "#F73312", fontSize: "48px", marginBottom: "20px" }}
        >
          Brator - Car Parts & Accessories
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          #1 Online Marketplace for Car Spares OEM & Aftermarkets
        </p>
        <div
          style={{
            background: "#F73312",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center" as const,
          }}
        >
          <h2>Website is Working with Header!</h2>
          <p>The Next.js app is successfully running with components.</p>
        </div>
      </div>
    </main>
  );
}

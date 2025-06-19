export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "72px", color: "#F73312", margin: "0" }}>404</h1>
      <h2 style={{ fontSize: "24px", color: "#333", margin: "20px 0" }}>
        Page Not Found
      </h2>
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "30px" }}>
        Sorry, the page you are looking for doesn't exist.
      </p>
      <a
        href="/"
        style={{
          background: "#F73312",
          color: "white",
          padding: "12px 24px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Go Home
      </a>
    </div>
  );
}

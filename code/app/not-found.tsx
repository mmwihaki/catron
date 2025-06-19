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
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "120px",
          color: "#F73312",
          margin: "0",
          fontWeight: "800",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "32px",
          color: "white",
          margin: "20px 0",
          fontWeight: "600",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: "18px",
          color: "rgba(255, 255, 255, 0.8)",
          marginBottom: "40px",
          maxWidth: "500px",
        }}
      >
        Sorry, the page you are looking for doesn't exist. It might have been
        moved, deleted, or you entered the wrong URL.
      </p>
      <a
        href="/"
        style={{
          background: "#F73312",
          color: "white",
          padding: "15px 30px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "16px",
          transition: "background-color 0.3s ease",
        }}
      >
        ← Back to Home
      </a>
    </div>
  );
}

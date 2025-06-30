import React from "react";

export default function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <div className="container">
          <h1>Brator Auto Parts</h1>
          <p>Premium Nissan Parts & Accessories</p>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <div className="container">
            <h2>Quality Auto Parts for Your Vehicle</h2>
            <p>
              Find the perfect parts for your car with our comprehensive
              selection.
            </p>
          </div>
        </section>

        <section className="featured-products">
          <div className="container">
            <h2>Featured Products</h2>
            <div className="products-grid">
              <div className="product-card">
                <h3>Premium Air Filter</h3>
                <p>High-quality air filter for optimal engine performance</p>
                <span className="price">$25.99</span>
              </div>
              <div className="product-card">
                <h3>Brake Pads Set</h3>
                <p>Reliable brake pads for safe driving</p>
                <span className="price">$89.99</span>
              </div>
              <div className="product-card">
                <h3>Oil Filter</h3>
                <p>Professional grade oil filter</p>
                <span className="price">$15.99</span>
              </div>
              <div className="product-card">
                <h3>Spark Plugs</h3>
                <p>High-performance spark plugs set</p>
                <span className="price">$45.99</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .homepage {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header {
          background-color: #f73312;
          color: white;
          padding: 60px 0;
          text-align: center;
        }

        .header h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .header p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .hero {
          padding: 80px 0;
          background-color: #f8f9fa;
          text-align: center;
        }

        .hero h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }

        .hero p {
          font-size: 1.1rem;
          color: #666;
        }

        .featured-products {
          padding: 80px 0;
        }

        .featured-products h2 {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 50px;
          color: #333;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .product-card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-card h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: #333;
        }

        .product-card p {
          color: #666;
          margin-bottom: 20px;
        }

        .price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #f73312;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2rem;
          }

          .hero h2 {
            font-size: 2rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .container {
            padding: 0 15px;
          }
        }
      `}</style>
    </div>
  );
}

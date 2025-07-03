import React from "react";

export default function HomePage() {
  return (
    <div>
      <h1>Catron Auto Parts - Home</h1>
      <p>Welcome to our Nissan parts store!</p>
      <nav>
        <a href="/shop">Shop</a> |
        <a href="/category/oil-filters">Oil Filters</a> |
        <a href="/category/air-filters">Air Filters</a>
      </nav>
    </div>
  );
}

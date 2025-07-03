import React from "react";

export default function ShopPage() {
  return (
    <div>
      <h1>Shop - Nissan Auto Parts</h1>
      <p>Browse our collection of Nissan parts</p>
      <nav>
        <a href="/">Home</a> |<a href="/category/oil-filters">Oil Filters</a> |
        <a href="/category/air-filters">Air Filters</a>
      </nav>
    </div>
  );
}

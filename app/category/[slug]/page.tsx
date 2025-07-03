import React from "react";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Category: {params.slug}</h1>
      <p>Products in the {params.slug} category</p>
      <nav>
        <a href="/">Home</a> |<a href="/shop">Shop</a>
      </nav>
    </div>
  );
}

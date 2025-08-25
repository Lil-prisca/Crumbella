import React from "react";
import "../styles/products.css";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";

export default function Products() {
  const items = [
    { id: 1, title: "Cake", price: "$11 - $99", img: product1 },
    { id: 2, title: "Bread", price: "$11 - $99", img: product2 },
    { id: 3, title: "Cookies", price: "$11 - $99", img: product3 },
  ];

  return (
    <section className="products">
      <div className="products-header">
        <p className="tag">// Bakery Products</p>
        <h1>Explore The Categories Of Our Bakery Products</h1>
      </div>
      <div className="products-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-info">
              <span className="price">{item.price}</span>
              <h3 className="title">{item.title}</h3>
              <p className="title">
                Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                diam et eos
              </p>
            </div>
            <div className="product-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

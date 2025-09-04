import React from "react";
import "../styles/products.css";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";

export default function Products() {
  const items = [
    { 
      id: 1, 
      title: "Chocolate Fudge Cake", 
      price: "₦6,500", 
      img: product1,
      description: "Rich and moist chocolate layers topped with creamy fudge frosting. Perfect for birthdays or celebrations." 
    },
    { 
      id: 2, 
      title: "Freshly Baked Bread", 
      price: "₦1,200", 
      img: product2,
      description: "Golden-crusted loaf baked fresh every morning. Soft inside, perfect for sandwiches or toast." 
    },
    { 
      id: 3, 
      title: "Assorted Cookies", 
      price: "₦3,000 / box", 
      img: product3,
      description: "A delightful mix of chocolate chip, butter, and oatmeal cookies—crunchy outside, chewy inside." 
    },
    { 
      id: 4, 
      title: "Vanilla Cream Cake", 
      price: "₦5,800", 
      img: product4,
      description: "Light vanilla sponge with layers of whipped cream and a touch of fresh fruit topping." 
    },
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
              <p className="description">{item.description}</p>
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

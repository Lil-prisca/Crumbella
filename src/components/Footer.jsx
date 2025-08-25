import React from "react";
import "../styles/footer.css";
import p1 from "../assets/product-1.jpg";
import p2 from "../assets/product-2.jpg";
import p3 from "../assets/product-3.jpg";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h4>Office Address</h4>
        <p>123 Street, New York, USA</p>
        <p>+012 345 67890</p>
        <p>info@example.com</p>
        <div className="socials">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Our Services</a>
        <a href="#">Terms & Condition</a>
        <a href="#">Support</a>
      </div>
      <div className="footer-col">
        <h4>Photo Gallery</h4>
        <div className="gallery">
          <img src={p1} alt="Gallery 1" />
          <img src={p2} alt="Gallery 2" />
          <img src={p3} alt="Gallery 3" />
        </div>
      </div>
    </footer>
  );
}

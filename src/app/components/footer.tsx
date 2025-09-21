import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Mission */}
        <div className="footer-section">
          <h2 className="footer-logo">Handcrafted Haven</h2>
          <p>
            A community-driven marketplace connecting artisans and buyers
            through unique, sustainable, and handcrafted treasures.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/sellers">Sellers</Link></li>
            <li><Link href="/aboutUs">About Us</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Pinterest"><FaPinterest /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Handcrafted Haven. All rights reserved.</p>
      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Unique Handcrafted Treasures</h1>
          <p>
            Support local artisans and explore sustainable, one-of-a-kind
            products made with love and skill.
          </p>
          <Link href="/products" className="cta-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/hero.webp" alt="Product 1" />
            <h3>Handmade Ceramic Vase</h3>
            <p>$40.00</p>
          </div>
          <div className="product-card">
            <img src="/images/images.jpeg" alt="Product 2" />
            <h3>Wooden Jewelry Box</h3>
            <p>$55.00</p>
          </div>
          <div className="product-card">
            <img src="/images/wooden kitchen Utnesil.jpeg" alt="Product 3" />
            <h3>Knitted Scarf</h3>
            <p>$25.00</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Our Mission</h2>
        <p>
          Handcrafted Haven is more than a marketplace—it’s a community. We
          connect artisans with buyers who value creativity, quality, and
          sustainability.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join Our Community</h2>
        <Link href="/login" className="cta-btn">
          Get Started
        </Link>
      </section>
    </main>
  );
}

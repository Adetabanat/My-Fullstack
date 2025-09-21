// src/app/dashboard/product/page.tsx
import ProductCard from "@/app/components/ProductCard";
import { prisma } from "@/lib/prisma";

export default async function ProductsPage() {
  // ✅ Query database directly
  const products = await prisma.product.findMany();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

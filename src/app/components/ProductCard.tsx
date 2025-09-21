"use client";
import React from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string | null;
}

export default function ProductCard({ id, name, price, image }: ProductProps) {
  return (
    <div className="bg-[#FAFAFA] rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      {/* Product Image */}
      <div className="relative w-full h-48">
        <Image
          src={image??"/placeholder.png"}
          alt={name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#4E342E]">{name}</h3>
        <p className="text-[#8D6E63] font-medium">${price.toFixed(2)}</p>

        {/* Actions */}
        <div className="flex justify-between items-center mt-2">
          <button className="flex items-center gap-2 text-[#FFB74D] hover:text-[#4E342E] transition">
            <Heart className="w-5 h-5" /> Favorite
          </button>
          <button className="flex items-center gap-2 bg-[#8D6E63] text-white px-3 py-2 rounded-lg hover:bg-[#4E342E] transition">
            <ShoppingCart className="w-5 h-5" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

"use client"
import React from "react";
import Button from "./ui/Button";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  waLink: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-purple-600 mb-1">
          {product.name}
        </h3>
        <p className="text-pink-500 font-medium mb-4">{product.price}</p>
        <Button
          variant="outline"
          className="w-full text-sm"
          onClick={() => window.open(product.waLink, "_blank")}
        >
          Pesan Sekarang
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

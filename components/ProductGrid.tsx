"use client"
import React from "react";
import ProductCard from "./ProductCard";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  waLink: string;
};

type ProductGridProps = {
  title: string;
  subtitle?: string;
  products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  subtitle,
  products,
}) => {
  return (
    <section id="products" className="py-16 bg-white">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGrid;

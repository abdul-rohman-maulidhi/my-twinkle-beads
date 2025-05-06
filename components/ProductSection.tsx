"use client"
import React, { useEffect } from "react";
import Script from "next/script";
import { Instagram, ExternalLink, ShoppingBag } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

type Product = {
  id: string;
  name: string;
  sale: string;
  price: string;
  waLink: string;
  instagramPostUrl: string; // URL untuk Instagram post
};

type ProductGridProps = {
  title: string;
  subtitle?: string;
  products: Product[];
};

// Komponen untuk Instagram embed
const InstagramEmbed = ({ postUrl }: { postUrl: string }) => {
  useEffect(() => {
    // Proses embed Instagram setelah komponen dimuat
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '12px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.2), 0 5px 20px -5px rgba(0,0,0,0.1)',
          maxWidth: 'auto',
          minWidth: '100%',
          maxHeight: 'auto',
          minHeight: '100%',
          padding: '0',
          width: '100%',
        }}
      >
        <div style={{ padding: '16px' }}>
          {/* Konten akan digantikan oleh Instagram embed */}
        </div>
      </blockquote>
    </>
  );
};

// Komponen Product Card dengan Instagram Embed
const ProductCardWithInstagram = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      {/* Instagram embed */}
      <div className="relative">
        <div className="aspect-square overflow-y-scroll ">
          <InstagramEmbed postUrl={product.instagramPostUrl} />
        </div>
        <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow-md">
          <Instagram size={20} className="text-pink-600" />
        </div>
      </div>

      {/* Product details */}
      <div className="p-5 border-t border-gray-100">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm stroke-1 line-through">{product.sale}</p>
        <div className="flex flex-none md:flex-1 gap-2">
          <p className="text-blue-600">Spesial buat kamu: </p>
          <p className="text-blue-600 font-bold mb-4">{product.price}</p>
        </div>

        <div className="flex gap-2">
          {/* Tombol untuk WhatsApp */}
          <Button
            variant="fill"
            onClick={() => window.open(product.waLink, "_blank")}
            className="text-base px-8 py-3"
          >
            {
              <div className="flex items-center gap-2 flex-none md:flex-1">
                <ShoppingBag size={18} />
                <p>Beli Sekarang</p>
              </div>
            }
          </Button>

          {/* Tombol untuk melihat di Instagram */}
          <Button
            variant="outline"
            onClick={() => window.open(product.instagramPostUrl, "_blank")}
            className="text-base px-8 py-3"
          >
            {<ExternalLink size={18} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Komponen Product Grid utama
const InstagramProductGrid: React.FC<ProductGridProps> = ({
  title,
  subtitle,
  products,
}) => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <Container>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Instagram size={24} className="text-pink-600" />
          <p className="text-gray-500 font-medium">Dari Feed Instagram Kami</p>
        </div>

        <SectionTitle title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCardWithInstagram key={product.id} product={product} />
          ))}
        </div>

        {/* Link ke Instagram */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium"
          >
            <Instagram size={20} />
            <span>Lihat Semua Post Instagram Kami</span>
          </a>
        </div>
      </Container>

      {/* Script untuk Instagram embed */}
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  );
};

export default InstagramProductGrid;
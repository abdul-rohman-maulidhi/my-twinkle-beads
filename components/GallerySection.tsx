"use client";
import React, { useState } from "react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import GalleryImage from "./GalleryImage";
import GalleryModal from "./GalleryModal";

type GallerySectionProps = {
  title: string;
  subtitle?: string;
  images: string[];
};

const GallerySection: React.FC<GallerySectionProps> = ({ title, subtitle, images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-white py-16">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {images.map((src, index) => (
            <div key={index} onClick={() => setSelectedImage(src)} className="cursor-pointer">
              <GalleryImage src={src} />
            </div>
          ))}
        </div>
        {selectedImage && (
          <GalleryModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </Container>
    </section>
  );
};

export default GallerySection;

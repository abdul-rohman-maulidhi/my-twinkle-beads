// components/GalleryImage.tsx
"use client"
import React from "react";

type GalleryImageProps = {
    src: string;
    alt?: string;
};

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
    return (
        <div className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
            <img
                src={src}
                alt={alt || "Gallery image"}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default GalleryImage;
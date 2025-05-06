// components/GalleryModal.tsx
"use client"
import React from "react";

type GalleryModalProps = {
imageSrc: string;
onClose: () => void;
};

const GalleryModal: React.FC<GalleryModalProps> = ({ imageSrc, onClose }) => {
return (
<div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center" onClick={onClose} >
<div
className="max-w-3xl w-full p-4 relative"
onClick={(e) => e.stopPropagation()}
>
<button className="absolute top-2 right-2 text-white text-3xl hover:scale-110 transition" onClick={onClose} >
×
</button>
<img src={imageSrc} alt="Preview" className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl" />
</div>
</div>
);
};

export default GalleryModal;
// components/FeatureItem.tsx
"use client"
import React from "react";

type FeatureItemProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-2xl mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-purple-700">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
    );
};

export default FeatureItem;
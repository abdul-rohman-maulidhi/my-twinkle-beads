"use client"
import React from "react";

type TestimonialCardProps = {
  name: string;
  message: string;
  avatar?: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  message,
  avatar,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-gray-700 hover:shadow-lg transition">
      <p className="text-base mb-4 italic">“{message}”</p>
      <div className="flex items-center gap-4 mt-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-white font-bold text-sm">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-purple-600">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

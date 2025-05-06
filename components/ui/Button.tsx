"use client";
import React from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "fill" | "outline";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean; // Added disabled state
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "fill",
  onClick,
  className,
  type = "button",
  disabled = false, // Default disabled to false
}) => {
  const baseClass =
    "px-6 py-2 rounded-full font-semibold transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"; // Changed rounded-2xl to rounded-full, added focus styles

  const variants = {
    fill: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-purple-500", // Updated gradient colors, added shadow, disabled styles, focus ring
    outline:
      "border border-pink-600 text-pink-600 hover:bg-pink-50 hover:border-pink-700 hover:text-pink-700 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-pink-500", // Updated border/text colors, added hover border/text color, disabled styles, focus ring
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(baseClass, variants[variant], className)}
      disabled={disabled} // Apply disabled prop
    >
      {children}
    </button>
  );
};

export default Button;

// Ungu: from-purple-600, text-purple-600, focus:ring-purple-500
// Pink: to-pink-600, border-pink-600, text-pink-600, hover:border-pink-700, hover:text-pink-700, focus:ring-pink-500

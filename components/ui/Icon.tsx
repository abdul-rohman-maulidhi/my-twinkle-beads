"use client"
import React from "react";

type IconProps = {
  children: React.ReactNode;
  size?: number; // in px
  color?: string;
};

const Icon: React.FC<IconProps> = ({ children, size = 24, color = "#D946EF" }) => {
  return (
    <span
      style={{ width: size, height: size, color }}
      className="inline-flex items-center justify-center"
    >
      {children}
    </span>
  );
};

export default Icon;

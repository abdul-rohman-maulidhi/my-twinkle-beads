"use client"
import React from "react";

type SpacerProps = {
  size?: "sm" | "md" | "lg" | "xl";
};

const Spacer: React.FC<SpacerProps> = ({ size = "md" }) => {
  const heightMap = {
    sm: "h-4",
    md: "h-8",
    lg: "h-16",
    xl: "h-24",
  };

  return <div className={heightMap[size]} />;
};

export default Spacer;

"use client";
import React from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";

type HeroSectionProps = {
  headline: string;
  subheadline: string;
  image: string;
  ctaText: string;
  ctaLink: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  image,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20 md:py-28 lg:py-36 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-600 leading-tight mb-4 md:mb-6">
              {headline}
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                variant="fill"
                onClick={() => window.open(ctaLink, "_blank")}
                className="text-base px-8 py-3"
              >
                {ctaText}
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("steps")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-base px-8 py-3"
              >
                Cara Pesan
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={image}
              alt="Hero illustration"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

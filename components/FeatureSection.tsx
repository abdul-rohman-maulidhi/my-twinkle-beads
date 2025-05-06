"use client";
import React from "react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import FeatureItem from "./FeatureItem";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeatureSectionProps = {
  title: string;
  subtitle?: string;
  features: Feature[];
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, subtitle, features }) => {
  return (
    <section id="features" className="bg-purple-50 py-16">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeatureSection;

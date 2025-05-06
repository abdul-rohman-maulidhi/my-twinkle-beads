"use client";
import React from "react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import StepItem from "./StepItem";

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type StepsSectionProps = {
  title: string;
  subtitle?: string;
  steps: Step[];
};

const StepsSection: React.FC<StepsSectionProps> = ({ title, subtitle, steps }) => {
  return (
    <section id="steps" className="bg-purple-50 py-16">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {steps.map((step, index) => (
            <StepItem key={index} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StepsSection;

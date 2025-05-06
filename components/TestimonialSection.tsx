"use client"
import React from "react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  name: string;
  message: string;
  avatar?: string;
};

type TestimonialSectionProps = {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
};

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <section id="testimonials" className="bg-purple-50 py-16">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;

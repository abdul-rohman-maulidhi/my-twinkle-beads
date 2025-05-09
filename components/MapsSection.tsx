"use client";
import React from "react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const MapSection: React.FC = () => {
  return (
    <section id="location" className="bg-white py-16">
      <Container>
        <SectionTitle
          title="Lokasi Kami"
          subtitle="Silakan kunjungi lokasi kami untuk pengambilan barang atau informasi lebih lanjut"
        />

        <div className="mt-10 rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.9154281330393!2d112.75606007499745!3d-7.019226992982394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDEnMDkuMiJTIDExMsKwNDUnMzEuMSJF!5e0!3m2!1sen!2sid!4v1746779983015!5m2!1sen!2sid"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default MapSection;

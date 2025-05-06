// components/ContactSection.tsx
"use client";
import React from "react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { MessageCircle } from "lucide-react";

type ContactInfo = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

type ContactSectionProps = {
  title: string;
  subtitle?: string;
  contactInfos: ContactInfo[];
  whatsappNumber: string;
  waMessage: string;
  locationText?: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  subtitle,
  contactInfos,
  whatsappNumber,
  waMessage,
  locationText = "Klik tombol di bawah ini untuk langsung ngobrol via WhatsApp dengan admin kami.",
}) => {
  const waURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="py-20 bg-purple-50" id="contact">
      <Container>
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="mt-12 bg-white rounded-2xl shadow-md p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Informasi Kontak */}
          <div className="space-y-6">
            {contactInfos.map((info, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="text-purple-600 w-6 h-6 mt-1">{info.icon}</div>
                <div>
                  <p className="font-medium text-purple-900">{info.label}</p>
                  <p className="text-sm text-gray-700">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-purple-100 rounded-xl p-8 text-center flex flex-col items-center justify-center">
            <MessageCircle className="text-purple-700 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-purple-800">Ada pertanyaan?</h3>
            <p className="text-sm text-gray-700 mt-2 mb-5 max-w-md">{locationText}</p>
            <a
              href={waURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full transition duration-300"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

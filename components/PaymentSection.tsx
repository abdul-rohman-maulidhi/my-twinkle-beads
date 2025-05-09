"use client";
import React from "react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { Banknote, MapPin, Handshake } from "lucide-react";

const payments = [
  {
    icon: <Banknote className="w-10 h-10 text-purple-600" />,
    title: "Transfer Bank",
    description:
      "Pembayaran dapat dilakukan melalui transfer bank ke rekening yang akan kami informasikan setelah pemesanan.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-purple-600" />,
    title: "Cash on Delivery (COD)",
    description:
      "Kami melayani pembayaran di tempat (COD) khusus untuk wilayah Bangkalan Kota. Mohon maaf, wilayah lain belum tersedia.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-purple-600" />,
    title: "Pengambilan Barang",
    description:
      "Barang wajib diambil langsung di tempat kami. Namun jika Anda berkenan untuk diantar, silakan hubungi kami untuk pengaturan lebih lanjut.",
  },
];

const PaymentSection: React.FC = () => {
  return (
    <section id="payment" className="bg-purple-50 py-16">
      <Container>
        <SectionTitle
          title="Pembayaran & Pengambilan"
          subtitle="Kami menyediakan opsi pembayaran yang fleksibel dan aman"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {payments.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PaymentSection;

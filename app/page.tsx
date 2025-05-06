import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from '@/components/ProductSection'
import TestimonialSection from "@/components/TestimonialSection";
import StepsSection from "@/components/StepsSection";
// import GallerySection from "@/components/GallerySection";
import FeatureSection from "@/components/FeatureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar
        logo="My Twinkle Beads"
        links={navLinks}
        ctaText="Chat via WhatsApp"
        ctaLink="https://wa.me/6289652877866?text=Halo%20kak!%20Aku%20tertarik%20dengan%20gelang%20dari%20My%20Twinkle%20Beads%20✨"
      />
      <HeroSection
        headline="Gelang Handmade, Penuh Cerita ✨"
        subheadline="Ciptakan gelang unik dengan warna dan nama pilihanmu. Cocok untuk hadiah atau koleksi pribadi!"
        image="images/hero.jpg"
        ctaText="Pesan Sekarang via WhatsApp"
        ctaLink="https://wa.me/6289652877866?text=Halo%20kak!%20Aku%20tertarik%20dengan%20gelang%20dari%20My%20Twinkle%20Beads%20✨"
      />

      <ProductSection
        title="Produk Terpopuler di Instagram"
        subtitle="Lihat produk-produk kami yang paling banyak disukai di Instagram"
        products={instagramProducts}
      />

      {/* <ProductGrid
        title="Koleksi Gelang Kami"
        subtitle="Semua bisa dikustom sesuai keinginanmu!"
        products={products}
      /> */}

      <TestimonialSection
        title="Apa Kata Mereka?"
        subtitle="Testimoni dari pelanggan My Twinkle Beads"
        testimonials={testimonials}
      />

      <StepsSection
        title="Cara Pemesanan"
        subtitle="Ikuti 4 langkah mudah untuk mendapatkan gelang favoritmu"
        steps={stepsData}
      />

      {/* <GallerySection
        title="Galeri Pelanggan"
        subtitle="Lihat bagaimana gelang My Twinkle Beads menemani harimu"
        images={galleryImages}
      /> */}

      <FeatureSection
        title="Kenapa Memilih Kami?"
        subtitle="My Twinkle Beads hadir untuk memberikan yang terbaik"
        features={featureItems}
      />

      <ContactSection
        title="Hubungi Kami"
        subtitle="Siap bantu kamu buat gelang impian"
        contactInfos={contactInfos}
        whatsappNumber="6289652877866"
        waMessage="Halo kak! Aku tertarik dengan gelang dari My Twinkle Beads ✨"
      />

      <Footer />

    </>
  );
}

// Navbar
const navLinks = [
  { label: "Beranda", href: "#" },
  { label: "Koleksi", href: "#products" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Galeri", href: "https://www.instagram.com/my.twinkle.beads/" },
  { label: "Kontak", href: "#contact" },
];

// Product
// const products = [
//   {
//     id: "1",
//     name: "Gelang Nama Pastel",
//     price: "Rp25.000",
//     image: "/images/gelang1.jpg",
//     waLink: "https://wa.me/6281234567890?text=Halo! Saya mau pesan Gelang Nama Pastel",
//   },
//   {
//     id: "2",
//     name: "Gelang Couple",
//     price: "Rp40.000",
//     image: "/images/gelang2.jpg",
//     waLink: "https://wa.me/6281234567890?text=Halo! Saya mau pesan Gelang Couple",
//   },
//   {
//     id: "3",
//     name: "Gelang Custom Warna",
//     price: "Rp30.000",
//     image: "/images/gelang3.jpg",
//     waLink: "https://wa.me/6281234567890?text=Halo! Saya mau pesan Gelang Custom Warna",
//   },
// ];

//Product embed
const instagramProducts = [
  {
    id: "1",
    name: "Luna Charm Couple",
    sale: "Rp. 40.000/ 2pcs",
    price: "Rp 20.000/ 2pcs",
    waLink: "https://wa.me/6289652877866?text=Halo%20Kak!%20Saya%20tertarik%20dengan%20Gelang%20Luna%20Charm%20Couple",
    instagramPostUrl: "https://www.instagram.com/p/DH7Pi7aT3kr/",
  },
  {
    id: "2",
    name: "Spider Couple",
    sale: "Rp. 40.000/ 2pcs",
    price: "Rp 20.000/ 2pcs",
    waLink: "https://wa.me/6289652877866?text=Halo%20Kak!%20Saya%20tertarik%20dengan%20Gelang%20Spider%20Couple",
    instagramPostUrl: "https://www.instagram.com/p/DH7SBIlT1da/",
  },
  {
    id: "3",
    name: "Shadow Elegance Couple",
    sale: "Rp. 40.000/ 2pcs",
    price: "Rp 20.000/ 2pcs",
    waLink: "https://wa.me/6289652877866?text=Halo%20Kak!%20Saya%20tertarik%20dengan%20Sepatu%20Gelang%20Shadow%20Elegance%20Couple",
    instagramPostUrl: "https://www.instagram.com/p/DIJWH35p6TT/",
  },
];

// Testimoni
const testimonials = [
  {
    name: "Aulia",
    message: "Gelangnya lucu banget! Warnanya bisa aku pilih sendiri 😍",
  },
  {
    name: "Dinda",
    message: "Packingnya rapi dan terjamin bagus deh. Suka banget!",
  },
  {
    name: "Sari",
    message: "Sudah 3x order buat hadiah ulang tahun, selalu puas ✨",
  },
];

// Steps
import {
  ShoppingCart,
  MessageCircle,
  Palette,
  PackageCheck,
} from "lucide-react";

const stepsData = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Pilih Gelang",
    description: "Lihat koleksi gelang dan pilih yang kamu suka.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Hubungi Kami",
    description: "Klik tombol WhatsApp untuk memesan langsung.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Kustom Desain",
    description: "Pilih warna, nama, dan detail desain gelangmu.",
  },
  {
    icon: <PackageCheck className="w-6 h-6" />,
    title: "Kirim & Nikmati",
    description: "Gelang akan kami kirim dengan cepat dan aman.",
  },
];

// Gallery
// const galleryImages = [
//   "/images/gallery1.jpg",
//   "/images/gallery2.jpg",
//   "/images/gallery3.jpg",
//   "/images/gallery4.jpg",
//   "/images/gallery5.jpg",
//   "/images/gallery6.jpg",
// ];

// Feature
import {
  Sparkles,
  Gift,
  HandHeart,
  ShieldCheck,
} from "lucide-react";

const featureItems = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Unik & Custom",
    description: "Setiap gelang dibuat sesuai dengan selera dan keinginanmu.",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Cocok untuk Hadiah",
    description: "Pilihan sempurna untuk ulang tahun, sahabat, atau pasangan.",
  },
  {
    icon: <HandHeart className="w-6 h-6" />,
    title: "Buatan Tangan",
    description: "Dirangkai manual dengan penuh cinta oleh perajin lokal.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Aman & Terpercaya",
    description: "Transaksi mudah melalui WhatsApp dan kualitas terjamin.",
  },
];

// Contact 
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfos = [
  {
    icon: <MapPin />,
    label: "Alamat",
    value: "Bangkalan, Jawa Timur",
  },
  {
    icon: <Phone />,
    label: "WhatsApp",
    value: "+62 896-5287-7866",
  },
  {
    icon: <Mail />,
    label: "Email",
    value: "mytwinklebeads@gmail.com",
  },
];


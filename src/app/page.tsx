"use client";
import HomeHero from "@/components/home/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Features from "@/components/home/features";

export default function HomePage() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-between">
      <HomeHero />
      <Features />
      <div className="h-96"></div>
    </main>
  );
}

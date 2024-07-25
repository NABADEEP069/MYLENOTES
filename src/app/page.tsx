"use client";
import HomeHero from "@/components/home/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Features from "@/components/home/features";
import Notes from "@/components/notes/notes";

export default function HomePage() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-between">
      <HomeHero />

      <Features />
      <div className="h-auto p-5 px-16 ml-3 py-12 flex flex-col">
        <h3 className="font-bold text-xl text-text mb-3">Popular Notes</h3>
        <Notes />

        <div className="h-96"></div>
      </div>

    </main>
  );
}

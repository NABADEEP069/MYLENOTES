"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    src: "/heroImages/hero5.jpg",
    alt: "hero image 1",
  },
  {
    src: "/heroImages/hero2.jpg",
    alt: "hero image 2",
  },
  {
    src: "/heroImages/hero3.jpg",
    alt: "hero image 3",
  },
  {
    src: "/heroImages/hero4.jpg",
    alt: "hero image 4",
  },
];

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center items-center relative h-[80vh] w-full">
        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full text-text">
          <div className="bg-gray-500 bg-opacity-60 text-center p-3 rounded-md w-7/12">
            <h2 className="text-4xl font-semibold mb-1">
              Transform the way you learn
            </h2>
            <h4 className="text-text text-lg font-normal">
              Connect with students, share knowledge, and succeed together
            </h4>
          </div>
          <button className="bg-primary hover:bg-secondary text-text font-semibold p-2 px-11 mt-3 rounded-md">
            Join the Community
          </button>
        </div>
        <div className="relative w-full h-full z-0">
          <Carousel
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            className="w-full h-full overflow-hidden"
          >
            {images.map((image, index) => (
              <div key={index} className="relative w-full h-screen">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                  className="object-cover"
                />
              </div>
            ))}
          </Carousel>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent z-20"></div>
        </div>
      </div>
      <div className="h-96"></div>
    </main>
  );
}

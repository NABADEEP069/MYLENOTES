'use client';
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoDotFill } from "react-icons/go";
import UploadNotes from "./uploadNotes";


const images = [
  {
    src: "/heroImages/hero5.jpg",
    alt: "hero image 1",
  },
  {
    src: "/heroImages/hero1.jpg",
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
  const searchPlaceholder = "Search for a note...";
  const popularNotes = [
    {
      imageSrc: "/notespageImages/nootes.jpeg",
      title: "Introduction to Algorithms",
      author: "Lecture Notes of CITK",
      profilePic: "/dp.jpg",
      authorName: "Monalisha Roy",
      date: "22 July 2024",
    },
    {
      imageSrc: "/notespageImages/hero.jpg",
      title: "Operating Systems",
      author: "Lecture Notes of CITK",
      profilePic: "/dp.jpg",
      authorName: "Monalisha Roy",
      date: "22 July 2024",
    },
    {
      imageSrc: "/heroImages/hero5.jpg",
      title: "Data Structures and Algorithms",
      author: "Lecture Notes of CITK",
      profilePic: "/dp.jpg",
      authorName: "Monalisha Roy",
      date: "22 July 2024",
    },
    {
      imageSrc: "/notespageImages/nootes.jpeg",
      title: "Introduction to Algorithms",
      author: "Lecture Notes of CITK",
      profilePic: "/dp.jpg",
      authorName: "Monalisha Roy",
      date: "22 July 2024",
    },
    {
      imageSrc: "/notespageImages/hero.jpg",
      title: "Operating Systems",
      author: "Lecture Notes of CITK",
      profilePic: "/dp.jpg",
      authorName: "Monalisha Roy",
      date: "22 July 2024",
    },

    // Add more popular notes here
  ];

  return (
    <main className="bg-background flex min-h-screen flex-col justify-between">
      <div className="flex justify-center items-center relative h-[80vh] w-full">
        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full text-text">
          <div className="bg-gray-500 bg-opacity-60 text-center p-3 rounded-md w-7/12">
            <h2 className="text-4xl font-semibold mb-1"> Find the notes you need in an instant </h2>
            <h4 className="text-text text-lg font-normal"> Search, access, and learn from a vast library of notes at your fingertips </h4>
          </div>
          <div className="flex items-start justify-center gap-2 mt-3">
            <input type="search" className="p-2 px-4 pr-6 rounded-lg" placeholder={searchPlaceholder} />
            <button className="bg-primary hover:bg-secondary text-text font-semibold p-2 px-11 rounded-md">
              Search
            </button>
          </div>
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
              <div key={index} className="relative w-full h-[80vh]">
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
      <div className="h-auto p-5 px-16 py-12 flex flex-col">
        <h3 className="font-bold text-xl text-text mb-3">Popular Notes</h3>
        <div className="flex flex-wrap items-start justify-start gap-7">
          {popularNotes.map((note, index) => (
            <div key={index} className="w-80 h-auto rounded-lg hover:bg-primary hover:bg-opacity-20 relative overflow-hidden flex flex-col justify-between">
              <div className="h-full">
                <div className="w-80 h-64 rounded-lg bg-primary bg-opacity-60 relative overflow-hidden">
                  <Image
                    src={note.imageSrc}
                    alt="notes image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-2 px-3 text-text text-xl font-semibold">{note.title}</p>
                <p className="px-3 mt-1 text-text text-xs font-normal">{note.author}</p>
              </div>
              <div className="flex gap-1 mt-1 px-3 mb-3">
                <Image
                  src={note.profilePic}
                  alt="profile pic"
                  width={38}
                  height={38}
                  className="rounded-full hover:cursor-pointer"
                />
                <p className="px-3 pb-1 mt-1 text-text text-sm font-medium flex items-center">{note.authorName} <GoDotFill className="text-text px-1" size={20} />  {note.date}</p>
              </div>
            </div>
          ))}
          <UploadNotes />

        </div>
      </div>
      <div className="h-auto p-5 px-10 flex flex-col">
        <h3 className="font-bold text-xl text-text mb-3">CITK Notes</h3>
        <div className="flex flex-wrap items-start justify-start gap-7">
          {popularNotes.map((note, index) => (
            <div key={index} className="w-80 h-auto rounded-lg hover:bg-primary hover:bg-opacity-20 relative overflow-hidden flex flex-col justify-between">
              <div className="h-full">
                <div className="w-80 h-64 rounded-lg bg-primary bg-opacity-60 relative overflow-hidden">
                  <Image
                    src={note.imageSrc}
                    alt="notes image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-2 px-3 text-text text-xl font-semibold">{note.title}</p>
                <p className="px-3 pt-1 text-text text-xs font-normal">{note.author}</p>
              </div>
              <div className="flex gap-1 mt-1 px-3 mb-3">
                <Image
                  src={note.profilePic}
                  alt="profile pic"
                  width={38}
                  height={38}
                  className="rounded-full hover:cursor-pointer"
                />
                <p className="px-3 pb-1 mt-1 text-text text-sm font-medium flex items-center">{note.authorName} <GoDotFill className="text-text px-1" size={20} />  {note.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-12">
          <UploadNotes />
      </div>
    </main>
  );
}

import Image from "next/image";

const images = [
  {
    src: "/features/noteBuddy.webp",
    alt: "feature1",
  },
  {
    src: "/features/noteshare.jpg",
    alt: "feature2",
  },
  {
    src: "/features/examSaver.png",
    alt: "feature3",
  },
];

const features = [
  {
    title: "Note Buddy",
    description: "Find and share notes instantly, and get the most out of your study sessions, with ease and efficiency!",
  },
  {
    title: "Share Notes",
    description: "Upload your notes and help fellow students, while gaining access to a vast library of notes!",
  },
  {
    title: "Exam Saver",
    description: "Get instant access to all the notes you need, and ace your exams with confidence and ease!",
  },
];

export default function Features() {
  return (
    <div className="w-10/12 h-auto p-3 rounded-lg mt-10 flex flex-col justify-center items-center">
      <h3 className="text-accent font-semibold text-3xl mb-4">The Ultimate Study Buddy</h3>
      <div className="flex gap-8 mt-3 justify-between items-center">
        {features.map((feature, index) => (
          <div key={index} className="border rounded-lg p-5 w-2/6 h-64 flex flex-col items-center justify-center text-text text-center">
            <Image src={images[index].src} alt={images[index].alt} width={75} height={75} className="rounded-full" />
            <h5 className=" text-accent text-xl mt-2">{feature.title}</h5>
            <p className="text-text font-normal text-sm mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

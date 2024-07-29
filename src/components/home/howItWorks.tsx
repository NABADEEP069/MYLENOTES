const points = [
  {
    title: "Upload and Share Notes",
    description1: "Share your notes with the community",
    description2: "Help others and get help in return",
  },
  {
    title: "Search and Discover",
    description1: "Get instant access to the notes you need",
    description2: "Use our search bar to find specific notes",
  },
  {
    title: "Access and Learn",
    description1: "Find notes from various subjects and topics",
    description2: "Learn from a vast library of user-uploaded content",
  },
  {
    title: "Connect with Others",
    description1: "Join a community of students and learners",
    description2: "Collaborate and discuss topics with others",
  },
];

export default function HowItWorks() {
  return (
    <div className="sm:w-10/12 p-3 rounded-lg mt-10 flex flex-col items-center">
      <h2 className="w-full text-center md:text-3xl sm:text-2xl text-2xl text-text font-semibold mb-8">
        Explore our vast library of user-uploaded content
      </h2>
      <div className="bg-secondary bg-opacity-40 p-5 md:p-10 lg:p-20 rounded-lg flex flex-wrap items-start sm:justify-around sm:gap-5 md:gap-10 lg:gap-14">
        {points.map((point, index) => (
          <div key={index} className="md:w-96 flex flex-col items-start mb-6">
            <div className="flex gap-2 items-center justify-center mb-2">
              <div className="p-1 bg-accent rounded-md text-text w-7 md:w-10 h-7 md:h-10 flex items-center justify-center">
                {index + 1}
              </div>
              <h3 className="text-accent font-semibold md:text-2xl text-xl">
                {point.title}
              </h3>
            </div>
            <ul className="list-disc pl-10">
              <li className="text-text md:text-md text-sm mb-2">
                {point.description1}.
              </li>
              <li className="text-text md:text-md text-sm">
                {point.description2}.
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

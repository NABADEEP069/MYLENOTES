const points = [
    {
        title: "Create an account",
        description: "Sign up for a free account and start creating your own quizzes.",
    },
    {
        title: "Add Questions",
        description: "Add multiple choice questions to your quiz.",
    },
    {
        title: "Share your quiz",
        description: "Share your quiz with your friends and see who scores the highest.",
    },
];

export default function HowItWorks() {
    return (
        <div className="w-11/12 h-auto p-3 rounded-lg mt-10 flex flex-col justify-center items-center">

            <div className="w-full flex items-center justify-around">
                <div className="w-2/6flex flex-col items-center justify-center">
                    <h2 className="text-2xl text-text font-semibold">Explore our vast library of user-uploaded content</h2>
                </div>
                <div className="flex flex-wrap items-center justify-evenly gap-8">
                    <div className="w-2/6">
                        <h3 className="text-accent font-semibold text-2xl mb-4">Upload and Share Notes</h3>
                        <li className="text-text text-md">Share your notes with the community</li>
                        <li className="text-text text-md">Help others and get help in return</li>
                    </div>
                    <div className="w-2/6">
                        <h3 className="text-accent font-semibold text-2xl mb-4">Search and Discover</h3>
                        <li className="text-text text-md">Get instant access to the notes you need</li>
                        <li className="text-text text-md">Use our search bar to find specific notes</li>
                    </div>
                    <div className="w-2/6">
                        <h3 className="text-accent font-semibold text-2xl mb-4">Access and Learn</h3>
                        <li className="text-text text-md">Find notes from various subjects and topics</li>
                        <li className="text-text text-md">Learn from a vast library of user-uploaded content</li>
                    </div>
                    <div className="w-2/6">
                        <h3 className="text-accent font-semibold text-2xl mb-4">Connect with Others</h3>
                        <li className="text-text text-md">Join a community of students and learners</li>
                        <li className="text-text text-md">Collaborate and discuss topics with others</li>
                    </div>
                </div>
            </div>
        </div>
    )
}
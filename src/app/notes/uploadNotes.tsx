import { FiPlus } from "react-icons/fi";

export default function UploadNotes() {
    return (
        <div className="w-80 h-96 rounded-lg bg-primary bg-opacity-50 flex flex-col gap-2 justify-center items-center text-text text-xl hover:bg-opacity-40 transition duration-300">
            <div className="text-text bg-secondary bg-opacity-50 rounded-full hover:scale-125 cursor-pointer transition duration-300">
              <FiPlus size={60} />
            </div>
            <span>Upload your notes</span>
          </div>
    )
}
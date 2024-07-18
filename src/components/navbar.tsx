import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { RiSearchLine } from "react-icons/ri";

export default function Navbar() {
  
  return (
    <nav className="h-12 w-full flex items-center justify-between fixed top-0 z-30 px-6">
        <Image src={"/logo.png"} alt="logo" height={70} width={165} className="p-1"/>
        
        
        <div className="flex gap-3">
        <div className="flex gap-10 text-text pr-16">
            <a className="font-semibold hover:text-primary hover:cursor-pointer">Home</a>
            <a className="font-semibold hover:text-primary hover:cursor-pointer">Notes</a>
            <a className="font-semibold hover:text-primary hover:cursor-pointer">About</a>  
        </div>
        <form className="relative" action="/search" method="GET">
                <input 
                    type="text" 
                    name="query" 
                    className="pl-3 pr-10 py-1 border border-text bg-transparent rounded-md font-light text-sm" 
                    placeholder="Search..."
                />
                <button 
                    type="submit" 
                    className="absolute right-2 top-0 bottom-0 flex items-center justify-center"
                >
                    <CiSearch size={20} className="text-text"/>
                </button>
            </form>
            <button className="bg-background text-text px-4 py-1 border border-text rounded-md text-sm">Login</button>
            <button className="bg-background text-text px-4 py-1 border border-text rounded-md text-sm">Signin</button>
        </div>
        
    </nav>
  );
}

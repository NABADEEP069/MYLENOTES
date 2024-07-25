import Image from "next/image";
import { MdPhoneEnabled } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    const contactInfo = [
        { icon: <MdPhoneEnabled  size={13}/>, text: "+91 7859645126" },
        { icon: <FiMail size={13}/>, text: "info@gmail.com" }
    ];

    const quickLinks = [
        { text: "Home", href: "#" },
        { text: "Notes", href: "#" },
        { text: "Features", href: "#" },
        { text: "About us", href: "#" },
        { text: "Upload Notes", href: "#"}
    ];

    const socialMedia = [
        { icon: <FaLinkedin size={13}/>, text: "Linkedin", href: "#" },
        { icon: <FaSquareXTwitter size={13}/>, text: "Twitter", href: "#" },
        { icon: <SiFacebook size={13}/>, text: "Facebook", href: "#" }
    ];

    return (
        <footer className="flex flex-col w-full h-auto p-5 bg-background justify-center items-center">
            <hr className="border text-text w-full" />
            <div className="flex gap-6 justify-between items-start w-full px-5 py-6">
                <div className="w-4/12 p-3">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        height={70}
                        width={165}
                        className="p-1"
                    />
                    <p className="text-text text-xs">
                        MyleNotes is your go-to platform for sharing and accessing lecture notes from various colleges and universities. Easily find and upload high-quality notes to enhance your study resources and succeed academically.
                    </p>
                </div>
                <div className="w-3/12 p-3">
                    <ul className="text-text text-xs">
                        <li className="font-bold text-lg text-accent">Contact Us</li>
                        {contactInfo.map((item, index) => (
                            <li key={index} className="hover:text-primary flex gap-1 items-center">
                                {item.icon}
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-3/12 p-3">
                    <ul className="text-text text-xs">
                        <li className="font-bold text-lg text-accent">Quick Links</li>
                        {quickLinks.map((link, index) => (
                            <li key={index} className="hover:text-primary"><a href={link.href}>{link.text}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="w-3/12 p-3">
                    <ul className="text-text text-xs">
                        <li className="font-bold text-lg text-accent">Social Media</li>
                        {socialMedia.map((link, index) => (
                            <li key={index} className="hover:text-primary flex gap-1 items-center">
                                {link.icon}
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="text-text text-xs p-5">Copyright &copy; 2024 MyleNotes. All Rights Reserved</p>
        </footer>
    );
}

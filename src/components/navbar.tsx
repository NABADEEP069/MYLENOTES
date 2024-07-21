"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "@/components/auth/login";
import { auth } from "../../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { CiSearch } from "react-icons/ci";
import { RiSearchLine } from "react-icons/ri";
import Signup from "@/components/auth/singup";
import ForgotPassword from "@/components/auth/forgotPassword";
import SearchForm from "./search";

export default function Navbar() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSigUp, setShowSignUp] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hover, setHover] = useState(false);

    const openLogin = () => {
        setShowLogin(true);
        setShowSignUp(false);
    };

    const openSignup = () => {
        setShowSignUp(true);
        setShowLogin(false);
    };

    const openForgotPassword = () => {
        setShowForgotPassword(true);
        setShowLogin(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("user signed out successfully");
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <nav
            className={`h-12 w-full flex items-center justify-between fixed top-0 z-30 px-6
            ${isTop ? "bg-transparent" : "bg-background shadow-md"}
        `}
        >

            <div className="flex justify-between w-8/12">
                <Image src={"/logo.png"} alt="logo" height={70} width={165} className="p-1" />
                <div className="flex gap-10 text-text pr-16">
                    <a className="font-semibold hover:text-primary hover:cursor-pointer">Home</a>
                    <a className="font-semibold hover:text-primary hover:cursor-pointer">Notes</a>
                    <a className="font-semibold hover:text-primary hover:cursor-pointer">About</a>
                </div>
            </div>

            <div className="flex justify-end items-center gap-2 w-4/12">
                <SearchForm/>
                {isLoggedIn && (
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className=""
                    >
                        <Image
                            src={"/dp.jpg"}
                            alt="profile pic"
                            width={38}
                            height={38}
                            className="rounded-full hover:cursor-pointer"
                        />

                        {hover && (
                            <div className="flex flex-col text-xs text-gray-800 absolute top-12 right-2 rounded-md bg-white p-1 hover:cursor-pointer">
                                <a className="p-1 px-3 hover:bg-gray-300 rounded-sm ">
                                    Wishlist
                                </a>
                                <a
                                    onClick={logout}
                                    className="p-1 px-3 hover:bg-gray-300 rounded-sm "
                                >
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                )}


                {!isLoggedIn && !showLogin && (
                    <button
                        onClick={() => setShowLogin(true)}
                        className="bg-background text-text px-4 py-1 border border-text rounded-md text-sm hover:bg-text hover:text-background"
                    >
                        Login
                    </button>
                )}
                {!isLoggedIn && !showSigUp && (
                    <button
                        onClick={() => setShowSignUp(true)}
                        className="bg-background text-text px-4 py-1 border border-text rounded-md text-sm hover:bg-text hover:text-background"
                    >
                        Signup
                    </button>
                )}

            </div>
            <Login
                show={showLogin}
                onClose={() => setShowLogin(false)}
                switchToSignUp={openSignup}
                switchToForgotPassword={openForgotPassword}
            />
            <Signup
                show={showSigUp}
                onClose={() => setShowSignUp(false)}
                switchToLogin={openLogin}
            />
            <ForgotPassword
                show={showForgotPassword}
                onClose={() => setShowForgotPassword(false)}
            // switchToLogin={openLogin}
            />
        </nav>
    );
}

import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebase.config";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";

interface LoginProps {
  show: boolean;
  onClose: () => void;
  switchToSignUp: () => void; // Define the prop for switching to signup
  switchToForgotPassword: () => void; // Define the prop for switching to forgot password
}

const Login: React.FC<LoginProps> = ({
  show,
  onClose,
  switchToSignUp,
  switchToForgotPassword,
}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
      router.push("/homepage");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError("An error occurred. Please try again later."); // Fallback message
      }
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      onClose();
      router.push("/homepage");
      console.log("user signed in with Google: ", result.user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background bg-opacity-50 z-50 ">
      <div className="relative w-4/12 h-auto p-7 rounded-lg bg-text flex items-center justify-center">
        <div className="flex justify-center items-center  w-full">
          <div className="flex flex-col">
            <h1 className="text-secondary font-semibold text-2xl mb-3">
              Login
            </h1>
            <div className="flex flex-col justify-center items-center gap-2">
              <form onSubmit={handleLogin} className="flex flex-col">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-secondary text-sm mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-gray-500 text-xs mb-2 px-5 p-2 rounded-md border w-64"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-secondary text-sm mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-gray-500 text-xs px-5 p-2 rounded-md border w-64"
                    required
                  />
                  <div className="flex justify-end">
                    <a
                      onClick={switchToForgotPassword}
                      className="text-accent text-xs right-1 hover:cursor-pointer mb-1"
                    >
                      forgot password
                    </a>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className="bg-secondary hover:bg-primary mt-1 p-1 px-6 rounded-md text-white w-full"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="flex justify-center items-center w-full">
                <hr className="border border-secondary border-t-0 w-1/4 mr-1" />
                <p className="text-xs text-secondary">Or continue with</p>
                <hr className="border border-secondary border-t-0 w-1/4 ml-1" />
              </div>

              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-1 border border-background w-full p-1 rounded-md text-secondary bg-white"
              >
                Sign in with Goodle
                <FcGoogle
                  onClick={handleGoogleLogin}
                  size={20}
                  className="hover:cursor-pointer"
                />
              </button>

              <p className="text-xs text-secondary">
                Don&apos;t have an account?{" "}
                <a
                  onClick={switchToSignUp}
                  className="text-accent underline cursor-pointer"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
          <div className="absolute top-1 right-2 hover:bg-gray-300 rounded-full">
            <button className="p-1 text-black" onClick={onClose} type="button">
              <RiCloseFill size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

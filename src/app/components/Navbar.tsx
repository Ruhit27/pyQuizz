"use client";
import Image from "next/image";
// import profile from "/public/profile.webp";
import Link from "next/link";
import { useState } from "react";

// Import icons from React Icons (FontAwesome)
import {
  FaHome,
  FaShoppingCart,
  FaStore,
  FaSignInAlt,
  FaUserPlus,
  FaBook,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 border border-b-1 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Links with Icons */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-black font-bold hover:text-gray-600 flex items-center space-x-2"
          >
            <FaHome />
            <span>Home</span>
          </Link>

          <Link
            href="#learn"
            className="text-black font-bold hover:text-gray-600 flex items-center space-x-2"
          >
            <FaStore />
            <span>Learn</span>
          </Link>
        </div>

        {/* Center - Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <p className="text-black font-semibold text-2xl ">PyQUIZZ</p>
          </Link>
        </div>

        {/* Right side - Login/Signup and Profile Image */}
        <div className="hidden md:flex items-center space-x-6">
          {!isLoggedIn ? (
            <>
              <Link
                href="/signup"
                className="bg-teal-300 text-gray-900 font-bold px-4 py-2 rounded hover:bg-teal-400 flex items-center space-x-2"
              >
                <FaUserPlus />
                <span>Sign Up</span>
              </Link>
            </>
          ) : (
            <div className="relative">
              <Image
                src={profile} // Replace with user's profile image
                alt="Profile"
                className="h-14 w-14 rounded-full object-cover border-2 border-teal-300"
              />
            </div>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            href="/"
            className="block text-black font-bold hover:text-gray-600 flex items-center space-x-2"
          >
            <FaHome />
            <span>Home</span>
          </Link>

          <Link
            href="#learn"
            className="block text-black font-bold hover:text-gray-600 flex items-center space-x-2"
          >
            <FaStore />
            <span>Learn</span>
          </Link>
          {!isLoggedIn ? (
            <>
              <Link
                href="/signup"
                className="block bg-teal-300 text-gray-900 font-bold px-4 py-2 rounded hover:bg-teal-400 flex items-center space-x-2"
              >
                <FaUserPlus />
                <span>Sign Up</span>
              </Link>
            </>
          ) : (
            <div className="block relative">
              {/* <Image
                src={} // Replace with user's profile image
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border-2 border-teal-300"
              /> */}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

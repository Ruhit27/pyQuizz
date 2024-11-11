import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">PyQuizz</h2>
          <p className="text-gray-400">
            Making Python learning engaging and fun through interactive quizzes
            and resources.
          </p>
          <p className="text-gray-400">
            © 2024 PyQuizz. All rights reserved,Majharul Islam Ruhit
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="#about"
                className="hover:text-white transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-white transition duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-white transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-500 transition duration-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400 transition duration-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-pink-500 transition duration-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        Built with ❤️ by the PyQuizz team
      </div>
    </footer>
  );
};

export default Footer;

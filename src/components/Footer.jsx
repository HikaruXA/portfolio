import { FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#28009E] text-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Column 1: Name & Socials */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
            Rome Francis C. Cabangal
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Feel free to connect or reach out if you'd like to collaborate or
            discuss web development opportunities.
          </p>
          <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 text-2xl sm:text-3xl justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/rome-francis-cabangal-779785348/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/romefrancis.cabangal.58/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Column 2: Availability */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
            Availability
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            I'm available for contact between 8:00 AM – 12:00 PM (PHT / UTC+8).
            Feel free to send me a message anytime — I'll get back to you as
            soon as I can!
          </p>
        </div>

        {/* Column 3: Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
            Quick Links
          </h2>
          <ul className="mt-2 sm:mt-3 md:mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
            <li>
              <Link
                to="/"
                className="hover:underline hover:text-blue-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-blue-300 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:underline hover:text-blue-300 transition-colors duration-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:underline hover:text-blue-300 transition-colors duration-200"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/graduation"
                className="hover:underline hover:text-blue-300 transition-colors duration-200"
              >
                Graduation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-xs sm:text-sm mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8 border-t border-blue-400 border-opacity-30">
        © 2025 Rome Francis C. Cabangal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

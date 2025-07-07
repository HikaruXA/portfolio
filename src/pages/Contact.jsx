import React from "react";
import ContactImage from "../assets/contactv2.jpg";

const Contact = () => {
  return (
    <div className="py-8 md:py-16 flex items-center justify-center mt-8 md:mt-16 px-4">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h2 className="text-black text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-0">
                Want to chat with
              </h2>
              <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mt-1">
                Rome Francis C. Cabangal?
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 max-w-none md:max-w-lg">
              You can contact me at rfcwprupose@gmail.com, or through any of the
              platforms listed below.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/rome-francis-cabangal-779785348/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200 hover:shadow-lg transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/romefrancis.cabangal.58/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 hover:shadow-lg transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 ml-0 md:ml-8 mt-4 md:mt-0 transform scale-100 sm:scale-125 md:scale-150">
            <img
              src={ContactImage}
              alt="Contact illustration"
              className="w-60 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

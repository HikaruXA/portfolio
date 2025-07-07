import React from "react";
import IntroductionImage from "../assets/introduction.jpg"; // Adjust the path as necessary
import InternshipImage from "../assets/internship.jpg"; // Adjust the path as necessary
import CertificateImage from "../assets/certificate.jpg"; // Adjust the path as necessary
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="py-8 md:py-16 flex items-center justify-center mt-8 md:mt-16 px-4">
        <div className="max-w-6xl w-full">
          <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4">
                <h2 className="text-black text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-0">
                  Introducing
                </h2>
                <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mt-1">
                  Rome Francis C. Cabangal
                </h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 max-w-none md:max-w-lg">
                Explore my journey in software development, from backend logic
                to frontend finesse — all driven by curiosity and purpose.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#28009E] text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base hover:bg-[#1e007a] transition-colors duration-200 hover:shadow-lg transform hover:scale-105"
              >
                Contact Me
              </Link>
            </div>
            <div className="flex-shrink-0 ml-0 md:ml-8 mt-4 md:mt-0 transform scale-100 sm:scale-125 md:scale-150">
              <img
                src={IntroductionImage}
                alt="Contact illustration"
                className="w-60 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Internship Section */}
      <div className="py-8 md:py-16 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0 mr-0 md:mr-8 mb-4 md:mb-0 order-2 md:order-1">
              <img
                src={InternshipImage}
                alt="Internship illustration"
                className="w-60 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 object-contain mx-auto"
              />
            </div>
            <div className="flex-1 order-1 md:order-2 text-center md:text-left">
              <div className="mb-4 md:mb-6">
                <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-2 md:mb-4">
                  Internship
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                  Gained hands-on experience at Advanced Infinit Technology
                  Solutions Inc. in Davao City by working on actual web
                  applications.
                </p>
              </div>

              <div className="mb-4 md:mb-6">
                <h3 className="text-gray-800 font-semibold text-lg sm:text-xl mb-3 md:mb-4">
                  Tools & Technologies Used:
                </h3>
                <div className="space-y-2 md:space-y-3 text-gray-700 text-sm sm:text-base">
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      1.
                    </span>
                    <span>
                      <strong>Laravel</strong> - for backend development and
                      routing
                    </span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      2.
                    </span>
                    <span>
                      <strong>PHP</strong> - for server-side scripting and logic
                    </span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      3.
                    </span>
                    <span>
                      <strong>Navicat</strong> - for managing and querying MySQL
                      databases
                    </span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      4.
                    </span>
                    <span>
                      <strong>MySQL</strong> - as the primary database for
                      storing and organizing data
                    </span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      5.
                    </span>
                    <span>
                      <strong>GitHub</strong> - for version control and team
                      collaboration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="py-8 md:py-16 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-2 md:mb-4">
              Tech Stack
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              These are the tools and skills I use to build websites and
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* ReactJS */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                ReactJS
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                A JavaScript library for building interactive and dynamic user
                interfaces.
              </p>
            </div>

            {/* Bootstrap */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Bootstrap
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                A toolkit that helps style websites quickly using pre-built
                components.
              </p>
            </div>

            {/* Tailwind CSS */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Tailwind CSS
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                A utility-first CSS framework that lets me design directly in
                the HTML using ready-made classes.
              </p>
            </div>

            {/* Laravel */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Laravel
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                A PHP framework that makes backend development easier and more
                secure.
              </p>
            </div>

            {/* Node.js + Express */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Node.js + Express
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                A JavaScript-based backend setup used to build fast and scalable
                web servers.
              </p>
            </div>

            {/* MySQL */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                MySQL
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                A database system used to store and manage data for websites and
                apps.
              </p>
            </div>

            {/* GitHub */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                GitHub
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                A tool for managing code, tracking updates, and working with a
                development team.
              </p>
            </div>

            {/* Figma */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Figma
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                A design tool for creating website layouts, user interfaces, and
                prototypes collaboratively.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Certificate Section */}
      <div className="py-8 md:py-16 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4 md:mb-6">
                <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-2 md:mb-4">
                  Certificates
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                  A collection of certifications that show my dedication to
                  learning and expanding my capabilities.
                </p>
              </div>

              <div className="mb-4 md:mb-6">
                <h3 className="text-gray-800 font-semibold text-lg sm:text-xl mb-3 md:mb-4">
                  Certifications Earned:
                </h3>
                <div className="space-y-2 md:space-y-3 text-gray-700 text-sm sm:text-base">
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      1.
                    </span>
                    <span>
                      <strong>IT Specialist: HTML and CSS</strong> - Certiport
                    </span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      2.
                    </span>
                    <span>
                      <strong>IT Specialist: Databases</strong> - Certiport
                    </span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      3.
                    </span>
                    <span>
                      <strong>IT Specialist: Network Security</strong> -
                      Certiport
                    </span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      4.
                    </span>
                    <span>
                      <strong>IT Specialist: Cybersecurity</strong> - Certiport
                    </span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      5.
                    </span>
                    <span>
                      <strong>
                        Certificate of Completion, Computer Ethics
                      </strong>{" "}
                      - University of Mindanao
                    </span>
                  </div>
                  <div className="flex items-start text-left">
                    <span className="text-[#28009E] font-bold mr-2 flex-shrink-0">
                      6.
                    </span>
                    <span>
                      <strong>
                        Certificate of Completion, ReactJS Workshop
                      </strong>{" "}
                      - University of Mindanao
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 ml-0 md:ml-8 mt-4 md:mt-0">
              <img
                src={CertificateImage}
                alt="Certificate illustration"
                className="w-60 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Soft Skills */}
      <div className="py-8 md:py-16 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-2 md:mb-4">
              Soft Skills
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              A few key traits that help me succeed in team environments and
              real-world projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Communication */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Communication
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                I clearly share ideas and actively listen to teammates during
                discussions and project planning.
              </p>
            </div>

            {/* Problem-Solving */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Problem-Solving
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                I approach challenges with logic, patience, and a solution-first
                mindset.
              </p>
            </div>

            {/* Teamwork */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Teamwork
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                I collaborate well with others, share feedback, and contribute
                to achieving goals and outcomes.
              </p>
            </div>

            {/* Adaptability */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Adaptability
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                I quickly adapt to new tasks, tools, or project changes without
                losing focus or momentum.
              </p>
            </div>

            {/* Time Management */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Time Management
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                I organize tasks efficiently and consistently meet deadlines,
                even in fast or changing environments.
              </p>
            </div>

            {/* Attention to Detail */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Attention to Detail
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                I review work carefully to catch small errors and ensure
                high-quality, polished results.
              </p>
            </div>

            {/* Responsibility */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Responsibility
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                I stay accountable for my work and deliver results that meet
                expectations and deadlines.
              </p>
            </div>

            {/* Continuous Learning */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-2 sm:mb-3">
                Continuous Learning
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                I'm always looking to improve my skills and stay up-to-date with
                new tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

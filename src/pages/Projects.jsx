import React from "react";
import ProjectImage from "../assets/projects.jpg";
import PrototypeAficionadoImage from "../assets/aficionado.png";
import PrototypeExpensesTrackerImage from "../assets/expenses.png";
import PrototypeMusicPlaylistImage from "../assets/music.png";
import WebsiteBeeHonestImage from "../assets/beehonest.png";
import WebsiteExpensesTrackerImage from "../assets/expenses-web.png";
import WebsiteValentineProjectImage from "../assets/valentine.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="py-8 md:py-16 flex flex-col items-center justify-center mt-8 md:mt-16 px-4">
      <div className="max-w-6xl w-full">
        {/* Intro */}
        <div className="flex items-center justify-between mb-12 flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h2 className="text-black text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-0">
                Projects of
              </h2>
              <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mt-1">
                Rome Francis C. Cabangal
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 max-w-none md:max-w-lg">
              A collection of projects I've built using Laravel, Bootstrap,
              MySQL, and other technologies—focused on practical, real-world
              solutions.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-block bg-[#28009E] text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-sm sm:text-base hover:bg-[#1e007a] transition-colors duration-200 hover:shadow-lg transform hover:scale-105"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 ml-0 md:ml-8 mt-4 md:mt-0 transform scale-100 sm:scale-125 md:scale-150">
            <img
              src={ProjectImage}
              alt="Project illustration"
              className="w-60 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 object-contain mx-auto"
            />
          </div>
        </div>

        {/* Project Sections */}
        <div className="space-y-12">
          {/* UI-UX Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#28009E] mb-6">
              UI-UX
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Aficionado",
                  desc: "Redesigned the landing page of Aficionado website.",
                  img: PrototypeAficionadoImage,
                },
                {
                  title: "Music Playlist",
                  desc: "Designed a musical playlist based on personal preference.",
                  img: PrototypeMusicPlaylistImage,
                },
                {
                  title: "Expenses Tracker",
                  desc: "Designed a low fidelity prototype for the website.",
                  img: PrototypeExpensesTrackerImage,
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Website Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#28009E] mb-6">
              Website
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "BeeHonest",
                  desc: "Develop the front-end and the back-end of the website.",
                  img: WebsiteBeeHonestImage,
                },
                {
                  title: "Expenses Tracker",
                  desc: "Develop the landing page of the expenses tracker.",
                  img: WebsiteExpensesTrackerImage,
                },
                {
                  title: "Valentine Project",
                  desc: "Develop a fun website that invites someone to be their valentine.",
                  img: WebsiteValentineProjectImage,
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

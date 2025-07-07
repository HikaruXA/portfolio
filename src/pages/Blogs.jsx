import React from "react";
import MaintenanceImage from "../assets/maintenance.jpg"; // Adjust the path as necessary

const Blogs = () => {
  return (
    <div className="py-8 md:py-16 flex items-center justify-center mt-8 md:mt-16 px-4">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h2 className="text-black text-2xl sm:text-3xl md:text-[39.81px] leading-tight mb-0">
                Blogs by
              </h2>
              <h2 className="text-[#28009E] font-bold text-2xl sm:text-3xl md:text-[39.81px] leading-tight mt-1">
                Rome Francis C. Cabangal
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 max-w-none md:max-w-lg">
              The blog section is currently a work in progress. Stay tuned for
              updates!
            </p>
          </div>
          <div className="flex-shrink-0 ml-0 md:ml-8 mt-4 md:mt-0 transform scale-100 sm:scale-125 md:scale-150">
            <img
              src={MaintenanceImage}
              alt="Maintenance illustration"
              className="w-60 h-48 sm:w-72 sm:h-56 md:w-80 md:h-64 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

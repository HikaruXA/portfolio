import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";
import Notification from "../components/Notification"; // Optional
import Graduation from "../pages/Graduation";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
          </>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/graduation" element={<Graduation />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;

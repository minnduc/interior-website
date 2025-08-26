import React from "react";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

const Navlink = [
  {
    id: 1,
    title: "About",
    link: "#",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "Project",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-10" />
          <span className="text-2xl font-bold ">Interior</span>
        </div>
        {/* Link section */}
        <div className="hidden md:block !space-x-12">
          {Navlink.map((link) => {
            return (
              <a
                href={link.link}
                className="inline-block mx-4 text-base font-semibold"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Buton section */}
        <div>
          <button className="primary-btn">Try For Free</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

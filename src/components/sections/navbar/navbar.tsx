import Logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [sidebar, setSidebar] = useState({ open: false });
  const closeSidebar = () => setSidebar({ open: false });
  const openSidebar = () => setSidebar({ open: true });

  return (
    <nav className="mt-12 inner-ctn flex items-center justify-between">
      <Link to="/" aria-label="Homepage" className="w-[8rem]">
        <img src={Logo} alt="" />
      </Link>
      <button aria-label="open menu" onClick={openSidebar}>
        <GiHamburgerMenu className="scale-125" />
      </button>
      <div
        onClick={closeSidebar}
        className={`fixed z-[98] w-full top-0 left-0 ${sidebar.open ? "h-screen" : "h-0"}`}
      ></div>
      <motion.div
        layout
        style={{ right: sidebar.open ? "0" : "-16rem" }}
        className={`fixed z-[99] w-[15.9375rem] h-screen bg-primary-500 top-0 pt-14 pl-12 pr-6 `}
      >
        <div className="flex justify-end">
          <button onClick={closeSidebar}>
            <MdClose className="scale-125" />
          </button>
        </div>
        <div className="navbar-pattern"></div>
        <ul className="flex flex-col text-[1.125rem]">
          <li className="mt-10">
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li className="mt-6">
            <Link to="/about" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li className="mt-8">
            <Link
              to="/contact"
              onClick={closeSidebar}
              className="border-2 border-neutral-50 rounded-full w-[10rem] h-[3rem] grid place-items-center"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

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
    <nav className="mt-12 inner-ctn flex items-center justify-between md:mt-16 xl:mt-[4.5625rem]">
      <Link to="/" aria-label="Homepage" className="w-[8rem] xl:w-[10rem]">
        <img src={Logo} alt="" />
      </Link>
      <button aria-label="open menu" onClick={openSidebar} className="md:hidden">
        <GiHamburgerMenu className="scale-125" />
      </button>
      <div
        onClick={closeSidebar}
        className={`fixed z-[98] w-full top-0 left-0 md:hidden ${
          sidebar.open ? "h-screen" : "h-0"
        }`}
      ></div>
      <motion.div
        layout
        style={{ right: sidebar.open ? "0" : "-16rem" }}
        className={`fixed z-[99] w-[15.9375rem] h-screen bg-primary-500 top-0 pt-14 pl-12 pr-6 
          md:contents
        `}
      >
        <div className="flex justify-end md:hidden">
          <button onClick={closeSidebar}>
            <MdClose className="scale-125" />
          </button>
        </div>
        <div className="navbar-pattern md:hidden"></div>
        <ul className="mt-10 flex flex-col text-[1.125rem] gap-6 md:flex-grow md:flex-row md:mt-0 md:ml-12">
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidebar}>
              About
            </Link>
          </li>
        </ul>
        <Link
          to="/contact"
          onClick={closeSidebar}
          className="mt-8 border-2 border-neutral-50 text-[1.125rem] rounded-full w-[10rem] h-[3rem] grid place-items-center md:mt-0 xl:w-[9.5625rem]"
        >
          Contact Us
        </Link>
      </motion.div>
    </nav>
  );
}

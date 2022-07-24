import { useState } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { BiPlus } from "react-icons/bi";
import { MdClose } from "react-icons/md";

interface TeamCardProps {
  name: string;
  role: string;
  avatar: string;
  twitter: string;
  linkedin: string;
  children: React.ReactNode;
}

export const TeamCard: React.FC<TeamCardProps> = (props) => {
  const [display, setDisplay] = useState<"quotation" | "picture">("picture");
  return (
    <article>
      <motion.div
        className="relative [transform-style:preserve-3d]"
        animate={{
          rotateY: display === "picture" ? "0deg" : "180deg",
        }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{ transform: "rotateY(0deg)" }}
          className="backface-hidden px-6 pt-8 pb-14 bg-neutral-800 flex flex-col items-center"
        >
          <img
            src={props.avatar}
            alt={props.name}
            className="mt-4 w-24 h-24 rounded-full border-2 border-[#C4FFFE;]"
          />
          <h3 className="title-sm text-primary-300">{props.name}</h3>
          <p className="text-[0.9375rem] leading-[1.5625rem] italic">{props.role}</p>
        </div>
        <div
          style={{ transform: "rotateY(180deg)" }}
          className="backface-hidden px-11 pt-8 bg-neutral-800 absolute inset-0 "
        >
          <figure>
            <figcaption className="title-sm text-primary-300 text-center">
              {props.name}
            </figcaption>
            <blockquote className="mt-2 text-center text-[0.9375rem] leading-[1.5625rem]">
              {props.children}
            </blockquote>
          </figure>
          <ul className="mt-6 flex w-[3.75rem] items-center justify-between mx-auto">
            <li>
              <a
                href={props.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${props.name}' profile on Twitter`}
              >
                <FaTwitter className="w-5 h-5 hover:text-secondary" />
              </a>
            </li>
            <li>
              <a
                href={props.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${props.name}' profile on Linkedin`}
              >
                <FaLinkedin className="w-5 h-5 hover:text-secondary" />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
      <button
        className={`relative mt-[-1.75rem] mx-auto w-14 h-14 rounded-full grid place-items-center text-neutral-800
        ${
          display === "picture"
            ? "bg-secondary hover:bg-primary-300"
            : "hover:bg-secondary bg-primary-300"
        }
        `}
        onClick={() => setDisplay((prev) => (prev === "picture" ? "quotation" : "picture"))}
      >
        {display === "picture" ? (
          <BiPlus className="w-5 h-5" />
        ) : (
          <MdClose className="w-5 h-5" />
        )}
      </button>
    </article>
  );
};

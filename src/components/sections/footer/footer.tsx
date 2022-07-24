import Logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaPinterestSquare, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-neutral-850 text-neutral-50 text-[0.9375rem] leading-[1.5625rem] py-16 xl:py-12">
      <div
        className={`inner-container grid grid-cols-1 justify-items-center
        md:grid-cols-2 md:justify-items-start md:justify-between
        xl:grid-cols-[10rem,27.8125rem,1fr] xl:gap-x-[7.8125rem]
      `}
      >
        <div>
          <Link to="/" aria-label="homepage" className="flex w-24 h-6">
            <img src={Logo} alt="" />
          </Link>
          <ul className="mt-6 flex gap-6 md:mt-12">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>

        <address className="mt-6 text-center md:text-left md:justify-self-end md:mt-0 xl:justify-self-start">
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
          <br />
        </address>
        <div
          className={`md:mt-8 md:col-start-1 md:col-span-2 md:w-full md:flex md:justify-between
          xl:col-start-auto xl:col-auto xl:flex-col xl:mt-0
        `}
        >
          <ul className="mt-10 flex items-center w-[7.75rem] justify-between md:mt-0 xl:self-end">
            <li>
              <a
                href="http://www.facebook.com"
                aria-label="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="w-6 h-6 hover:text-secondary" />
              </a>
            </li>
            <li>
              <a
                href="http://www.pinterest.com"
                aria-label="pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestSquare className="w-6 h-6 hover:text-secondary" />
              </a>
            </li>
            <li>
              <a
                href="http://www.twitter.com"
                aria-label="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6 hover:text-secondary" />
              </a>
            </li>
          </ul>
          <p className="mt-4 opacity-60 md:mt-0">Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

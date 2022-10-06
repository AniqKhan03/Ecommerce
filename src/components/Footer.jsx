import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="flex space-x-2 p-10 justify-center bg-gray-100 sm:space-x-16 md:space-x-20">
      <div className="flex text-[#68707d]">
        <div className="flex flex-col space-y-2">
          <Link to="/" className="">
            <p className="text-2xl text-black">footlocker.</p>
          </Link>
          <p className="text-md">Canada's leading sneaker store.</p>
          <p className="text-md">
            Copyright <span>&#169;</span> [...] 2022
          </p>

          <div className="space-x-2 text-sm">
            <Link to="/">
              <InstagramIcon />
              <CallIcon />
              <EmailIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex text-sm space-x-4 md:space-x-8 lg:space-x-12">
        <div className=" text-start items-start">
          <h1 className="py-2 text-xl">Collection</h1>
          <div className="flex flex-col text-[#68707d] space-y-2">
            <Link to="/shop" state={{ brandLink: null }}>
              <p className="cursor-pointer hover:underline">Shop All</p>
            </Link>

            <Link to="/shop" state={{ brandLink: "Jordan" }}>
              <p className="cursor-pointer hover:underline">Jordans</p>
            </Link>

            <Link to="/shop" state={{ brandLink: "Nike" }}>
              <p className="cursor-pointer hover:underline">Nike</p>
            </Link>
          </div>
        </div>

        <div className="text-start">
          <h1 className="py-2 text-xl">Contact Us</h1>
          <div className="flex flex-col text-[#68707d] space-y-2">
            <Link to="/contact">
              <p className="cursor-pointer hover:underline">Contact</p>
            </Link>
            <Link to="/">
              <p className="cursor-pointer hover:underline">Info</p>
            </Link>

            <Link>
              <p className="cursor-pointer hover:underline">Email</p>
            </Link>
          </div>
        </div>

        <div className=" text-start">
          <h1 className="py-2 text-xl">About Us</h1>
          <div className="flex flex-col text-[#68707d] space-y-2">
            <Link>
              <p className="cursor-pointer hover:underline">Terms of Service</p>
            </Link>
            <Link to="/">
              <p className="cursor-pointer hover:underline">Privacy Policy</p>
            </Link>

            <Link>
              <p className="cursor-pointer hover:underline">Return Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

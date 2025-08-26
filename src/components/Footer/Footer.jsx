import React from "react";
import Logo from "../../assets/Logo.png";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";

const Footer = () => {
  return (
    <footer>
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-6" />
              <p className="text-xl font-semibold">Interior</p>
            </div>
            <p>UIT, Ho Chi Minh, Vietnam</p>
            <p>@ 2025 minnduc All rights reserved</p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-sm font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+84 123456789</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope />
                <a href="#">minnduc.nguyen@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom section */}
        <p className="text-center text-sm font-semibold mt-5 border-t-2 pt-5 mt-5">
          &copy; 2025 minnduc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

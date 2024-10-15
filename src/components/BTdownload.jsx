import React from "react";
import { pdf } from "../assets";

const BTdownload = ({ styles, pdfUrl, isAnimatingIn, isAnimatingOut }) => (
  <div className={`mt-8 ${isAnimatingOut ? 'mask-slide-out' : ''} ${isAnimatingIn ? 'mask-slide-in' : ''}`}>
    <a
      href={pdf}
      download
      className="relative inline-block py-3 px-6 font-bold text-[#272727] bg-white border-none transition-all duration-300 overflow-hidden group"
    >
      <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
      <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-black group-hover:w-[20px] transition-all duration-300"></span>
      <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] transition-all duration-300">Download Article</span>
    </a>
  </div>
);

export default BTdownload;
import React from "react";
import { pdf } from "../assets";

const BTdownload = ({ styles, pdfUrl }) => (
  <a href={pdf} download>
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Download Article
    </button>
  </a>
);

export default BTdownload;
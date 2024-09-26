import React from "react";
import { Link } from "react-router-dom";

const Button2 = ({ styles }) => (
  <Link to="/services">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Saiba mais
    </button>
  </Link>
);

export default Button2;
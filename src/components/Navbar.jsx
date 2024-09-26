import { useState } from 'react';
import { close, menu, newlogo } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
<nav className="w-full flex py-4 justify-between items-center navbar bg-transparent">
  <img src={newlogo} alt="azemora" className="w-[124px] h-[60px] object-contain" />

{/* Menu para telas maiores (desktop) */}
<ul className="list-none sm:flex hidden justify-end items-center flex-1 max-w-[1200px] mx-auto px-4 pr-10">
  {navLinks.map((nav, index) => (
    <li
      key={nav.id || index}
      className={`nav-item font-poppins font-normal cursor-pointer text-[12px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'} text-white`}
    >
      <Link to={`/${nav.id}`}>
        {nav.title}
      </Link>
    </li>
  ))}
</ul>

{/* Menu para telas menores (mobile) */}
<div className="sm:hidden flex flex-1 justify-end items-center">
  <img
    src={toggle ? close : menu}
    alt="menu"
    className="w-[20px] h-[20px] object-contain mr-10"
    onClick={() => setToggle((prev) => !prev)}
  />

  <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black bg-opacity-60 backdrop-blur-lg absolute top-20 right-4 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
    <ul className="list-none flex flex-col justify-center items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id || index}
          className={`relative font-poppins font-normal cursor-pointer text-[12px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white hover:after:w-full after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD700] after:transition-all after:duration-400`}
        >
          <Link to={`/${nav.id}`} onClick={() => setToggle(false)}>
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>
</nav>
  );
};

export default Navbar;

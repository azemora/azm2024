import styles from "../style";
import { logo, newlogo, newlogo_black } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col pb-10`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10 text-[#272727]">
        <img
          src={newlogo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className="font-poppins font-normal text-[18px] text-white  leading-[30.8px] mt-4 max-w-[310px]">
          So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living.
        </p>
        <img
          src="/path/to/placeholder-image.png"
          alt="placeholder"
          className="w-full h-auto object-contain mt-6"
        />
      </div>
      
      <div className="flex-[1.5] w-full flex flex-row justify-start md:mt-0 mt-10">
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[20px] leading-[27px] text-white">
            Quick Links
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4 cursor-pointer">
              link1
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4 cursor-pointer">
              link2
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4 cursor-pointer">
              link3
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer">
              link4
            </li>
          </ul>
        </div>

        <div className="flex flex-col ss:my-0 my-4 min-w-[150px] ml-10 md:ml-20">
          <h4 className="font-poppins font-medium text-[20px] leading-[27px] text-white">
            LinkedIn Profiles
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
              <a href="https://linkedin.com/in/example1" target="_blank" rel="noopener noreferrer" className="relative inline-block py-3 px-6 font-bold text-white bg-black border-none transition-all duration-300 overflow-hidden group">
                <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-white group-hover:bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
                <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-white group-hover:bg-black group-hover:w-[20px] transition-all duration-300"></span>
                <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] group-hover:text-black transition-all duration-300">Director</span>
              </a>
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
              <a href="https://linkedin.com/in/example2" target="_blank" rel="noopener noreferrer" className="relative inline-block py-3 px-6 font-bold text-white bg-black border-none transition-all duration-300 overflow-hidden group">
                <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-white group-hover:bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
                <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-white group-hover:bg-black group-hover:w-[20px] transition-all duration-300"></span>
                <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] group-hover:text-black transition-all duration-300">Dev/Artist</span>
              </a>
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              <a href="https://linkedin.com/in/example3" target="_blank" rel="noopener noreferrer" className="relative inline-block py-3 px-6 font-bold text-white bg-black border-none transition-all duration-300 overflow-hidden group">
                <span className="absolute left-0 top-0 bottom-0 w-[5px] bg-white group-hover:bg-[#e9d790] group-hover:w-full transition-all duration-300"></span>
                <span className="absolute left-[20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-white group-hover:bg-black group-hover:w-[20px] transition-all duration-300"></span>
                <span className="relative z-10 pl-6 group-hover:pl-8 group-hover:translate-x-[-10px] group-hover:text-black transition-all duration-300">Full dev</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col ss:my-0 my-4 min-w-[150px] ml-10 md:ml-20">
          <h4 className="font-poppins font-medium text-[20px] leading-[27px] text-white">
            Our Partners
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
              <img src="/path/to/logo1.png" alt="Partner 1" className="w-[100px] h-auto object-contain" />
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              <img src="/path/to/logo2.png" alt="Partner 2" className="w-[100px] h-auto object-contain" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[white] mt-10">
      <p className="font-poppins font-normal text-center text-[#e9d790] text-[18px] leading-[27px] text-[#272727]">
        Copyright Ⓒ 2019 Azemora. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;

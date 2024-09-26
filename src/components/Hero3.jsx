import styles from "../style";
import { discount, robot, backdoback, wp_contato, rosto, logo } from "../assets";
import GetStarted from "./GetStarted";

const Hero3 = () => {
  return (
    <section id="home" 
    className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[50px] text-white ss:leading-[50.8px] leading-[50px]">
                Lorem ipsum dolor: {" "}
                <span className="text-gradient ss:text-[40px]">Consectetur adipiscing elit.</span>{" "}
              </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/*<GetStarted />*/}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[58px] text-[52px] text-white ss:leading-[70.8px] leading-[75px] w-full">
            
        </h1>
        <p className={`${styles.paragraph} ${styles.justified} max-w-[700px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra tempus sapien nec blandit. Vivamus in mauris vel dolor mollis tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sed vulputate nibh. Mauris felis ante, interdum non lobortis et, sodales ac felis. Quisque tempus enim at felis iaculis viverra. Maecenas eu semper nisi, sed iaculis eros. Quisque tincidunt tempor libero at ultrices. 
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={logo} alt="billing" className="relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero3;

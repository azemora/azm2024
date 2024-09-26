import styles from "../style";
import { robot, Backbusiness,card, logo } from "../assets";
import GetStarted from "./GetStarted";

const Hero2 = () => {
  return (
    <section id="home" 
        className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 text-left`}>
        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-[52px] text-white ss:leading-[70.8px] leading-[50px]">
               About us{" "} <br></br>
                <span className="text-gradient ss:text-[45px]">Our previous works</span>{" "}
              </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/*<GetStarted />*/}
          </div>
        </div>
        <p className={`${styles.paragraph} ${styles.justified} max-w-[470px] mt-5`}>
        A Consultoria Mão na Massa, formada por experts em segurança com formação em ciência da computação, vai além da consultoria tradicional. Nós analisamos e resolvemos problemas, identificando riscos e implementando soluções que asseguram segurança e tranquilidade aos clientes.
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

export default Hero2;

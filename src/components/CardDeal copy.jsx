import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal2 = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>  
      <h2 className={styles.heading2}>
        Segurança, metodologia e eficiência em um único lugar. <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[4s70px] mt-5`}>
        A Inteligência Artificial oferece uma vantagem competitiva única no mercado contemporâneo. Prepare seus colaboradores para utilizar essas ferramentas de forma segura e eficaz.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal2;
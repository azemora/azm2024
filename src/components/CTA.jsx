import styles from "../style";
import BTdownload from "./BTdownload";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[white] rounded-[10px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-black`}>Entre em contato conosco!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        Tenha equipes produtivas que dominem ferramentas de gestão do tempo e de tarefas, reduzindo a procrastinação e aumentando os resultados do dia a dia.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <BTdownload />
    </div>
  </section>
);

export default CTA;
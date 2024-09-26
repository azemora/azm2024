import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../style';
import { zapzap} from "../assets";

const Eemails = () => {
  const form = useRef();
  const phoneNumber = '45 999509766';
  const redirectUrl = 'https://wa.me/+554599509766'; // URL para a qual você deseja redirecionar o usuário

  const sendEmail = (e) => {
    e.preventDefault();

    if(window.confirm("Você tem certeza de que deseja enviar esta mensagem?")) {
      emailjs.sendForm('service_v4uxhvr', 'template_fvfa1yc', form.current, 'KpjSfIgMEhipCXX3X')
        .then((result) => {
            console.log(result.text);
            console.log("Mensagem Enviada!");
            form.current.reset();
            window.alert("Sua mensagem foi enviada com sucesso!");
        }, (error) => {
            console.log(error.text);
            window.alert("Ocorreu um erro ao enviar a sua mensagem. Por favor, tente novamente.");
        });
    }
  };

  return (
    <section className={`${styles.flexCenter} flex-col my-4`}>
      <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-center ">
        Entre em contato <br className="sm:block hidden" />{" "}
        <span className="text-gradient">Conosco</span>{" "}
      </h1>
      <h1 className="font-poppins ss:text-[30px] text-[30px] text-white ss:leading-[50.8px] leading-[75px] text-center ">
        Atendimento Whatsapp: <br></br>
        <div className="flex justify-center items-center">
        <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="text-gradient flex items-center">
          <img src={zapzap} alt="WhatsApp" className="w-6 h-6 mr-2" /> {phoneNumber}
        </a>
      </div>
      </h1>
      <h2 className="font-poppins ss:text-[19px] text-[10px] text-white ss:leading-[30.8px] leading-[75px] text-center ">
        Horário de atendimento: <br></br> 9:00 - 18:00 Segunda á Sexta
      </h2>
      <div className="flex justify-center items-center">
        <form ref={form} onSubmit={sendEmail} className="w-full sm:min-w-[400px] min-w-[200px] m-10 gap-6">
          <label className="text-white block mb-2">
            Nome
            <input type="text" name="from_name" className="block w-full h-[700%] rounded my-4 text-black" placeholder="Nome"/>
          </label>
          <label className="text-white block mb-2">
            Email
            <input type="email" name="from_email" className="block w-full h-[700%] rounded my-4 text-black" placeholder="Email"/>
          </label>
          <label className="text-white block mb-2">
            Nome da Empresa
            <input type="text" name="from_business" className="block w-full h-[700%] rounded my-4 text-black" placeholder="Nome da Empresa"/>
          </label>
          <label className="text-white block mb-2">
            Mensagem
            <textarea name="message" className="block w-full h-[700%] rounded my-4 text-black" placeholder="Mensagem"/>
          </label>
          <input type="submit" value="Enviar" className={`${styles.flexCenter} w-full sm:w-[240px] h-[225%] rounded my-4`}/>
        </form>
      </div>
      <div className="flex justify-center items-center mt-[-10px]">
        <button onClick={sendEmail} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none my-4`}>
          Enviar Mensagem
        </button>
      </div>
    </section>
  );
}

export default Eemails;

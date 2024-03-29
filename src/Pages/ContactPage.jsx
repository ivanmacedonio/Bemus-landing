import { motion } from "framer-motion";
import React from "react";
import { Header } from "../Components/Header";
import "../Styles/ContactPage.css";
import arrow from "../assets/arrowRight.svg";
import gif2 from '../assets/gif2.gif';


export const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="contactPageContainer">
        <div className="header">
          <Header></Header>
        </div>
        <div className="flexContainer">
          <div className="formContactoContainer">
            <h1>Aguardamos tu consulta</h1>
            <p>Te contestamos a la brevedad</p>
            <form>
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Apellido" />
              <input type="text" placeholder="Empresa" />
              <input type="text" placeholder="Asunto" />
              <input type="text" placeholder="Email" id="double" />
              <input type="text" placeholder="Mensaje" id="message" />
              <button type="submit">
                Enviar <img src={arrow} alt="" />{" "}
              </button>
            </form>
          </div>
          <div className="gifContactoContainer">
            <img src={gif2} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

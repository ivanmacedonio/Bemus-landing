import { motion } from "framer-motion";
import React from "react";
import "../Styles/Inicio.css";
import arrow from "../assets/arrowDown.svg";
export const Inicio = () => {
  function scrollToSection() {
    var section = document.getElementById("hrefnosotros");
    section.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="inicioContainer">
      <motion.div
        initial={{ y: 100, opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>Nosotros nos encargamos de la conexión</h3>
        <h1>
          Somos una consultora de servicios IT especializada en reclutamiento
        </h1>

        <button onClick={scrollToSection}>
          SABER MÁS <img src={arrow} alt="" />
        </button>
      </motion.div>
    </div>
  );
};

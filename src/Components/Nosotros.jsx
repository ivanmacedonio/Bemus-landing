import { motion } from "framer-motion";
import React from "react";
import "../Styles/Nosotros.css";

export const Nosotros = () => {
  function scrollToSection() {
    var section = document.getElementById("hrefcontacto");
    section.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="nosotrosContainer" id="hrefnosotros">
      <div className="nosotrosGif">
        <iframe
          src="https://giphy.com/embed/rKv7oh9GYONWWjrSBG"
          width="320"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <div className="nosotrosText">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          animate={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Nosotros</h2>
          <h1>¿Qué es Bemus-IT?</h1>
          <p>
            Somos una consultora de servicios IT especializada en reclutamiento.
            Estamos comprometidos en brindar soluciones de tecnología de alta
            calidad y un servicio excepcional a nuestros clientes. Nuestro
            equipo de profesionales altamente capacitados y con años de
            experiencia en el sector de la tecnología, tienen una verdadera
            pasión por lo que hacen y esto se refleja en el resultado de cada
            proyecto.
          </p>
        </motion.div>

        <button onClick={scrollToSection}>CONOCER MÁS</button>
      </div>
    </div>
  );
};

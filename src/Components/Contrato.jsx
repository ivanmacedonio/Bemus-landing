import { motion } from "framer-motion";
import React from "react";
import "../Styles/Contrato.css";
import item1 from "../assets/item1.svg";
import item2 from "../assets/item2.svg";
import item3 from "../assets/item3.svg";

export const Contrato = () => {
  return (
    <div className="contratoContainer" id="hrefcontrato">
      <h3>Contratación</h3>
      <h1>Nuestras modalidades</h1>
      <p>
        Buscamos y seleccionamos a los mejores profesionales del sector IT y los
        conectamos con las empresas que los necesitan. Cada modalidad de
        contratación puede ser adaptada a las necesidades y requerimientos
        específicos de cada cliente, lo que asegura un servicio personalizado y
        de calidad. Además, el equipo de reclutamiento se encarga de brindar un
        soporte y seguimiento continuo a cada cliente, lo que garantiza su
        satisfacción y éxito a largo plazo.
      </p>
      <motion.div
        className="contratoItems"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="itemContrato">
          <img src={item1} alt="" />
          <h2>Búsqueda y selección de personal IT</h2>
          <p>
            Esta modalidad de contratación permite a las empresas contratar
            talentos IT de manera permanente y a largo plazo.
          </p>
        </div>
        <div className="itemContrato">
          <img src={item2} alt="" />
          <h2>Contratación temporal</h2>
          <p>
            Con este servicio buscamos reforzar los equipos de trabajo en
            momentos de alta demanda y por un tiempo predeterminado.
          </p>
        </div>
        <div className="itemContrato">
          <img src={item3} alt="" />
          <h2>Contratación outsourcing</h2>
          <p>
            Nuestro servicio de outsourcing de IT es una solución integral para
            empresas que buscan externalizar sus procesos de IT.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

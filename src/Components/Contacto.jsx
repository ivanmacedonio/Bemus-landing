import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Contacto.css";
import rate from "../assets/rate.svg";
export const Contacto = () => {
  return (
    <div className="contactoContainer" id="hrefcontacto">
      <img src={rate} alt="" />
      <h1>Nosotros nos encargamos</h1>
      <p>
        Si buscas una empresa de servicios IT que trabaje incansablemente para
        cumplir tus expectativas y objetivos, no busques más allá de BEMUS-IT.
      </p>
      <Link to={"/contact"}>
        <button>Contacto</button>
      </Link>
    </div>
  );
};

import React from "react";
import { Header } from "../Components/Header";
import "../Styles/ContactPage.css";
import arrow from "../assets/arrowRight.svg";

export const ContactPage = () => {
  return (
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
          <iframe
            src="https://giphy.com/embed/BeYzLDJhmKGFvDhePG"
            width="270"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

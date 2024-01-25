import React from "react";
import { Contacto } from "../Components/Contacto";
import { Contrato } from "../Components/Contrato";
import { Header } from "../Components/Header";
import { Inicio } from "../Components/Inicio";
import { Nosotros } from "../Components/Nosotros";
import "../Styles/MainPage.css";
export const MainPage = () => {
  return (
    <div className="mainpageContainer">
      <div className="header">
        <Header></Header>
      </div>
      <div className="generalContainer">
        <Inicio></Inicio>
        <Nosotros></Nosotros>
        <Contrato></Contrato>
        <Contacto></Contacto>
      </div>
    </div>
  );
};

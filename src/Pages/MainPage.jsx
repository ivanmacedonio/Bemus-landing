import React, { useEffect, useState } from "react";
import { Contacto } from "../Components/Contacto";
import { Contrato } from "../Components/Contrato";
import { Header } from "../Components/Header";
import { Inicio } from "../Components/Inicio";
import { Loading } from "../Components/Loading.jsx";
import { Nosotros } from "../Components/Nosotros";
import "../Styles/MainPage.css";
export const MainPage = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <Loading></Loading>
      ) : (
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
      )}
    </React.Fragment>
  );
};

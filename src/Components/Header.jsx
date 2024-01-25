import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      {" "}
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={logo} alt="" />
        </div>
        <div className="linksContainer">
          <Link to={"/"}>Home</Link>
          <a href="#hrefnosotros">Nosotros</a>
          <a href="#hrefcontrato">Contrato</a>
          <Link to={"/contact"} id="contacto">
            Contacto
          </Link>
        </div>
        <div
          className="menuContainer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={menu} alt="" />
        </div>
      </div>
      <motion.div
        className="linksContainerMobile"
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      >
        <Link to={"/"}>Home</Link>
        <a href="#hrefnosotros">Nosotros</a>
        <a href="#hrefcontrato">Contrato</a>
        <Link to={"/contact"} id="contacto">
          Contacto
        </Link>
      </motion.div>
    </React.Fragment>
  );
};

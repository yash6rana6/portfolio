import React, { useState } from "react";
import NavCSS from "./../Nav/Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section>
        <header className={NavCSS.header}>
          <div className={NavCSS.logo}>
            <h2>
              Y<span>ash Deep Singh</span>
            </h2>
          </div>

          <div className={`${NavCSS.nav} ${isOpen ? NavCSS.open : ""}`}>
            <a href="#">Home</a>
            <a href="/about">About Me</a>
            <a href="/servies">Services</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>

          <div className={NavCSS.bars} onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
      </section>
    </>
  );
}

export default Nav;

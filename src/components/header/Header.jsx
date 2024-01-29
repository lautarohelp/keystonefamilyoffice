import React, { useState } from "react";
import { HeaderNav } from "./Header-nav";
import logo from "../../../img/white-logo-navbar.1c9c0bb65b54b3a52b1d.webp";
import "./Header.css";

export function Header({ img, text }) {

  return (<>
    <div className="Header-container" style={{ display: 'flex', backgroundImage: `url(${img})`, backgroundRepeat: `none`, backgroundPosition: `center`, backgroundSize: `cover` }} >
      <HeaderNav
        logo={logo}
        className={"Menu-ancla"}
        home={'Home'}
        aboutUs={'About Us'}
        services={'Services'}
        contactUs={'Contact Us'}
        benefits={'Benefits'}
      />

    </div>
    <h1 className="nav-text">{text}</h1>
  </>
  );
}

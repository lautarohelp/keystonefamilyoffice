import React, { useState } from "react";
import { Services } from "./Services";
import "./Header-nav.css";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
export function HeaderNav({ logo, home, aboutUs, services, contactUs, benefits }) {
  //funcion para que aparezca un modal de services

  //funcion para que se abra el menu
  let [menuOptions, setMenuOptions] = useState(false)
  let openMenu = () => {
    setMenuOptions(!menuOptions);
  }
  return (<>
    <div className="Header">
      <img className="Header-logoApp" src={logo} alt="logo" />
      <div className="Menu-icon" onClick={openMenu}><GiHamburgerMenu /></div>


      <ul className={`${menuOptions ? `Menu` : `inactive`} mediaOptions`}>
        <div className="Menu-icon Menu-iconX" onClick={openMenu}><IoMdClose /></div>

        <li className="Menu-li">
          <a className="Menu-ancla" href="">{home}</a>
        </li>
        <li className="Menu-li">
          <a className="Menu-ancla" href="">{aboutUs}</a>
        </li>
        <li className="Menu-li">
          <Services services={services} />

        </li>

        <li className="Menu-li" >
          <a className="Menu-ancla" href="">{contactUs}</a>
        </li>
        <li className="Menu-li">
          <a className="Menu-ancla" href="">{benefits}</a>
        </li>
      </ul>
    </div>
  </>
  );
}
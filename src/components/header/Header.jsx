import React, { useState } from "react";
import logo from "../../../img/white-logo-navbar.1c9c0bb65b54b3a52b1d.webp";

import "./Header.css";

export function Header({ img, text }) {
  //funcion para que aparezca un modal
  let [servicesOptions, setServicesOptions] = useState(false)
  let toggleServicesOptions = () => {
    setServicesOptions(servicesOptions = !servicesOptions);
  }

  console.log(img);
  return (<>
    <div className="Header-container" style={{ display: 'flex', backgroundImage: `url(${img})`, backgroundRepeat: `none`, backgroundPosition: `center`, backgroundSize: `cover` }} >
      <div className="Header">
        <img className="Header-logoApp" src={logo} alt="logo" />

        <ul className="Menu">
          <li className="Menu-li">
            <a className="Menu-ancla" href="">Home</a>
          </li>
          <li className="Menu-li">
            <a className="Menu-ancla" href="">About us</a>
          </li>
          <li className="Menu-li">
            <div className="Menu-div" onClick={toggleServicesOptions} href="" >Services
              <ul className={`${servicesOptions ? 'Services-option' : 'inactive'}`}>
                <li> <a className="Services-option-a" href="">Tax and Accounting</a></li>
                <li>
                  <a className="Services-option-a" href="">Corporate Service </a>
                </li>
                <li>
                  <a className="Services-option-a" href="">Real Estate Support</a>
                </li>
                <li>
                  <a className="Services-option-a" href="">Trust and Fiduciary Support</a>
                </li>
                <li>
                  <a className="Services-option-a" href="">Affiliated Wealth Management</a>
                </li>
              </ul>
            </div>

          </li>
          <li className="Menu-li" >
            <a className="Menu-ancla" href="">Contact us</a>
          </li>
          <li className="Menu-li">
            <a className="Menu-ancla" href="">Employee benefits</a>

          </li>
        </ul>
      </div>

    </div>
    <h1 className="nav-text">{text}</h1>
  </>
  );
}

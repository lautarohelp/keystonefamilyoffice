import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Services } from "./Services";
import "./Header-nav.css";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FadeIn } from "../Componenets-animation/FadeIn";
import gsap from "gsap";


export function HeaderNav({ logo, logoTwo, home, aboutUs, services, contactUs, benefits }) {

  //funcion para que se abra el menu
  let [menuOptions, setMenuOptions] = useState(false)

  let [scrolling, setScrolling] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 3) {
      setScrolling(true);
    } else {
      setScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOptions) {
      gsap.to('.mediaOptions', {
        duration: 1,
        x: 10,
        ease: 'power3.out',
      });
    } else if (setMenuOptions) {
      gsap.to('.mediaOptions', {
        duration: 1,
        y: -5,
        x: 1,
        ease: 'power3.out',
      });
    }
  }, [menuOptions]);

  let openMenu = () => {
    setMenuOptions(!menuOptions);
  }


  return (<>
    <div className="Header">
      <div className={`bg-nav ${scrolling ? 'scrolled' : ''}`}></div>
      {/* <img className="Header-logoApp" src={logo} alt="logo"  /> */}
      <img className={`Header-logoApp ${scrolling ? 'scrolled' : ''}`} src={logoTwo} alt=" logoTwo" />
      <div className={`Menu-icon ${scrolling ? 'scrolled' : ''}`} onClick={openMenu}><GiHamburgerMenu /></div>

      <ul className={`${menuOptions ? "Menu" : "inactive"} mediaOptions`}>
        <div className="Menu-icon Menu-iconX" onClick={openMenu}><IoMdClose /></div>

        <FadeIn
          directionStart="y"
          time="0.5"
          start="15"
        >
          <li className="Menu-li">
            <a className={`Menu-ancla  ${scrolling ? 'scrolled' : ''}`} href="">{home}</a>
          </li>
        </FadeIn>
        <FadeIn
          directionStart="y"
          time="1.2"
          start="15"
        >
          <li className="Menu-li">
            <a className={`Menu-ancla  ${scrolling ? 'scrolled' : ''}`} href="">{aboutUs}</a>
          </li>
        </FadeIn>

        <FadeIn
          directionStart="y"
          time="1.4"
          start="15"
        >
          <li className="Menu-li ">
            <Services services={services} scrolling={scrolling} />
          </li>
        </FadeIn>

        <FadeIn
          directionStart="y"
          start="15"
          time="1.6"
        >
          <li className="Menu-li" >
            <a className={`Menu-ancla  ${scrolling ? 'scrolled' : ''}`} href="">{contactUs}</a>
          </li>
        </FadeIn>

        <FadeIn
          directionStart="y"
          start="15"
          time="1.8"
        >
          <li className="Menu-li">
            <a className={`Menu-ancla  ${scrolling ? 'scrolled' : ''}`} href="">{benefits}</a>
          </li>
        </FadeIn>
      </ul>


    </div>
  </>
  );
}

HeaderNav.propTypes = {
  logo: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired,
  contactUs: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
}


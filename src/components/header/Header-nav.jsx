import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Services } from "./Services";
import "./Header-nav.css";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FadeIn } from "../Componenets-animation/FadeIn";
import gsap from "gsap";
import { NavLink } from "react-router-dom";


export function HeaderNav({ home, aboutUs, services, contactUs, benefits }) {

  //funcion para que se abra el menu
  const [menuOptions, setMenuOptions] = useState(false)

  const [scrolling, setScrolling] = useState(false)
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

      <div className={`Header-logoApp ${scrolling ? `scrolled` : ""}`}  ></div>

      <div className={`Menu-icon ${scrolling ? 'scrolled' : ''}`} onClick={openMenu}><GiHamburgerMenu /></div>

      <ul className={`${menuOptions ? "Menu" : "inactive"} mediaOptions`}>
        <div className="Menu-icon Menu-iconX" onClick={openMenu}><IoMdClose /></div>

        <FadeIn
          directionStart="y"
          time="0.5"
          start="15"
        >
          <li className="Menu-li">
            <NavLink className={`Menu-ancla  ${scrolling ? 'scrolled' : ''}`} >{home}</NavLink>
          </li>
        </FadeIn>
        <FadeIn
          directionStart="y"
          time="1.2"
          start="15"
        >
          <li className="Menu-li">
            <NavLink to={"/about_us"} className={`Menu-ancla  ${scrolling ? 'scrolled' : ''}`} >{aboutUs}</NavLink>
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
            <NavLink to={"/contacts"} className={`Menu-ancla  ${scrolling ? 'scrolled' : ''}`} >{contactUs}</NavLink>
          </li>

        </FadeIn>

        <FadeIn
          directionStart="y"
          start="15"
          time="1.8"
        >
          <li className="Menu-li">
            <NavLink to={"employee"} className={`Menu-ancla  ${scrolling ? 'scrolled' : ''}`} >{benefits}</NavLink>
          </li>

        </FadeIn>
      </ul>


    </div>
  </>
  );
}

const routes = [];
routes.push({
  to: '/',
  text: 'Home',
  private: false,
});
routes.push({
  to: '/blog',
  text: 'Blog',
  private: false,
});
routes.push({
  to: '/profile',
  text: 'profile',
  private: true,
});
routes.push({
  to: '/login',
  text: 'Login',
  private: false,
  publicOnly: true,
});
routes.push({
  to: '/logout',
  text: 'Logout',
  private: true,
});

HeaderNav.propTypes = {
  logo: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired,
  contactUs: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
}


import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./Services.css"
import gsap from "gsap";
import { NavLink } from 'react-router-dom';



export function Services({ services, scrolling }) {

  // funcion para llevar el escroll arriva
  function scrollTop() {
    window.scrollTo({top , behavior: "smooth"})
  }

  let [servicesOptions, setServicesOptions] = useState(false)


  useEffect(() => {
    if (servicesOptions) {
      gsap.to('.holaaaa', {
        duration: 1,
        opacity: 1,
        y: 10,
        ease: 'power3.out',
      });
    } else {
      gsap.to('.holaaaa', {
        duration: 1,
        opacity: 0,
        y: 1,
        ease: 'power3.out',
      });
    }
  }, [servicesOptions]);


  let toggleServicesOptions = () => {
    setServicesOptions(servicesOptions = !servicesOptions);
  }


  return (<>

    <div className={`Menu-div ${scrolling ? 'scrolled' : ''}`} onClick={toggleServicesOptions} href="" >{services}
      {servicesOptions ? <IoIosArrowUp className="arrowOption" /> : <IoIosArrowDown className="arrowOption" />}

      <div className="holaaaa" style={{ opacity: 0 }}>
        <ul className={`${servicesOptions ? "Services-option" : "inactive"} ${scrolling ? 'scrolled' : ''} `} >
          <li>
            <NavLink onClick={scrollTop} className="Services-option-a" to={"/tax_accounting"}>Tax and Accounting</NavLink>

          </li>
          <li>
            <NavLink onClick={scrollTop} className="Services-option-a" to={"/corporate"}>Corporate Service</NavLink>
          </li>
          <li>
            <NavLink onClick={scrollTop} className="Services-option-a" to={"/realEstate"}>Real Estate Support</NavLink>
          </li>
          <li>
            <NavLink onClick={scrollTop} className="Services-option-a" to={"/trust_support"}>Trust and Fiduciary Support</NavLink>
          </li>
          <li>
            <NavLink onClick={scrollTop} className="Services-option-a" to={"/wealth_management"}>Affiliated Wealth Management</NavLink>
          </li>
        </ul>
      </div>

    </div>

  </>)
}

Services.propTypes = {
  services: PropTypes.string.isRequired,
  scrolling: PropTypes.bool.isRequired
}
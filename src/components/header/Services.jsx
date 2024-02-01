import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./Services.css"
import gsap from "gsap";



export function Services({ services, scrolling }) {

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
        <ul className={`${servicesOptions ? "Services-option" : "inactive"} ${scrolling ? 'scrolled' : ''}`} >
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

    </div>

  </>)
}

Services.propTypes = {
  services: PropTypes.string.isRequired
}
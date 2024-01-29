import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./Services.css"
export function Services({ services }) {
  let [servicesOptions, setServicesOptions] = useState(false)
  let toggleServicesOptions = () => {
    setServicesOptions(servicesOptions = !servicesOptions);

  }
  return (<>
    <div className="Menu-div" onClick={toggleServicesOptions} href="" >{services}
      {servicesOptions ? <IoIosArrowUp className="arrowOption" /> : <IoIosArrowDown className="arrowOption" />}

      <div>
        <ul className={`${servicesOptions ? "Services-option" : "inactive"}`} >
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
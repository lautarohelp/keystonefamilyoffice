import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { NavLink } from "react-router-dom"

export const Layout = ({ text, items, imgTwo }) => {
  return (<>
    <section className="section-container">
      <div className="parraf">{text}
        <ul className="url-content">
          <li className="points">{items}</li>
        </ul>
      </div>
      <div>{imgTwo}</div>

    </section>

  </>)
}
import { HeaderNav } from "./Header-nav";
import PropTypes from 'prop-types';
import "./Header.css";

Header.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export function Header({ img, text, title }) {

  return (<>

    <div className="Header-container" style={{ display: 'flex', backgroundImage: `url(${img})`, backgroundRepeat: `none`, backgroundPosition: `center`, backgroundSize: `cover` }}  >
      <HeaderNav
        title={title}
        className={"Menu-ancla"}
        home={'Home'}
        aboutUs={'About Us'}
        services={'Services'}
        contactUs={'Contact Us'}
        benefits={'Employee benefits'}
      />

    </div>
    <h1 className="nav-text">{text}</h1>
  </>
  );
}

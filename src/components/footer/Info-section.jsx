import { FaLocationDot } from "react-icons/fa6";
import PropTypes from 'prop-types';
import './info-section.css'

function InfoSection({title, direction, children}) {
  return (
    <>
      <div className='content-info'>
        <h1 className='title-info'>{title}</h1>
        <div className='separator-info'></div>
        <p>
          <span><FaLocationDot /></span>
          {direction}
        </p>
        {children}
      </div>
    </>
  )
}
InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export { InfoSection }
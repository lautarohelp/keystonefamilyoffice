import PropTypes from 'prop-types';
import './contact-info.css'

function ContactInfo({img, info}) {
  return (
    <>
    <a className='info-contact-info' href="#">
      <span>{img}</span>
      {info}
    </a>
    </>
  )
}
ContactInfo.propTypes = {
  info: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export { ContactInfo }
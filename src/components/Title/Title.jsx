import PropTypes from 'prop-types';
import './Title.css'

function Title({title}) {
  return (
    <>
      <h1>{title}</h1>
      <div className='lineTitle'></div>
    </>
  )
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export { Title }
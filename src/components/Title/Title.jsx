import PropTypes from 'prop-types';
import './Title.css'

function Title({title}) {
  return (
    <>
      <h1 className='main_title'>{title}</h1>
      <div className='lineTitle'></div>
    </>
  )
}
Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export { Title }
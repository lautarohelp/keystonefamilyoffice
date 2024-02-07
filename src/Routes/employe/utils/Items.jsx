import PropTypes from 'prop-types';
import './Items.css'

export function Items({item, text}) {
  return (
    <>
      <li className='li-items'>
        <span className='li-spam-items'>{item}</span>
        {text}
      </li>
    </>
  )
}

Items.propTypes = {
  item: PropTypes.string,
  text: PropTypes.string,
}
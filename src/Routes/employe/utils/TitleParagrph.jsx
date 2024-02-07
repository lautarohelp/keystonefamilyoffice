import PropTypes from 'prop-types'; 
import './TitleParagraph.css'

export function TitleParagraph({img, title, text}) {
  return(
    <>
    <div className='container-TitleParagraph'>
      <div className='container-title-TitleParagraph'>
        <h1>{title}</h1>
        <span className='svg-TitleP'>{img}</span> 
      </div>
      <p>{text}</p>
    </div>
    </>
    )
}

TitleParagraph.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
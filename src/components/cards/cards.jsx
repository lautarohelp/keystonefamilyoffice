import { FadeIn } from '../Componenets-animation/FadeIn'
import PropTypes from 'prop-types';
import './cards.css'

function Card({ img, order, title, text }) {
    if (order === 1) {
        return (
            <>
            <FadeIn>
                <section className='card_Maincontainer'>
                    <section className='card_container'>
                        <div className={`cardTitle_container${order}`}><h1> {title}</h1></div>
                        <p>{text}</p>
                    </section>

                    <img src={img} />

                </section>
            </FadeIn>
            </>
        )
    }
    if (order === 2){
        return (
            <>
            <FadeIn>
                <section className='card_Maincontainer2'>
                    <img src={img} />
                    <section className={`card_container card_container${order}`}>
                        <div className={`cardTitle_container${order}`}><h1>{title}</h1></div>
                        <p>{text}</p>
                    </section>
                </section>
            </FadeIn>
            </>
        )
    }
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}


export default Card

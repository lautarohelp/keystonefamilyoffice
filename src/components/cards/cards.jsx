import { FadeIn } from '../Componenets-animation/FadeIn'
import PropTypes from 'prop-types';
import './cards.css'
import { FadeIn } from '../Componenets animation/animation.jsx'

function Card({ img, order, title, text }) {
    if (order === 1) {
        return (
            <>
<<<<<<< HEAD
            <FadeIn>
                <section className='card_Maincontainer opacity'>
=======
            <FadeIn 
                directionStart='x'
                start='20'
                directionEnd='x'
                end='-20'
                time='1.5'
                >
                <section className='card_Maincontainer'>
                
>>>>>>> 6e8979b77d6b615f9fe3792675bc56a4fb89a125
                    <section className='card_container'>
                        <div className={`cardTitle_container${order}`}><h1> {title}</h1></div>
                        <p>{text}</p>
                    </section>

                    <img src={img} />

                </section>
<<<<<<< HEAD
                </FadeIn>
=======
            </FadeIn>
>>>>>>> 6e8979b77d6b615f9fe3792675bc56a4fb89a125
            </>
        )
    }
    if (order === 2){
        return (
            <>
<<<<<<< HEAD
            <FadeIn>
                 <section className='card_Maincontainer2'>
=======
            <FadeIn
            directionStart='x'
            start='-20'
            directionEnd='x'
            end='20'
            time='1.5'
            >
                <section className='card_Maincontainer2'>
>>>>>>> 6e8979b77d6b615f9fe3792675bc56a4fb89a125
                    <img src={img} />
                    <section className={`card_container card_container${order}`}>
                        <div className={`cardTitle_container${order}`}><h1>{title}</h1></div>
                        <p>{text}</p>
                    </section>
                </section>
<<<<<<< HEAD
                </FadeIn>
=======
            </FadeIn>
>>>>>>> 6e8979b77d6b615f9fe3792675bc56a4fb89a125
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

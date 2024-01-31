import './cards.css'
import { FadeIn } from '../Componenets animation/animation.jsx'

function Card({ img, order, title, text }) {
    if (order === 1) {
        return (
            <>
            <FadeIn>
                <section className='card_Maincontainer opacity'>
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


export default Card

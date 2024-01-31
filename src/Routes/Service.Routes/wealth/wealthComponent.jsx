
import { FadeIn } from "../../../components/Componenets-animation/FadeIn";
import { Title } from "../../../components/Title/Title"
import './wealth-management.router.css'
import PropTypes from 'prop-types';

WealthCard.propTypes = {
    text: PropTypes.array.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

}

function WealthCard({ text = [], img, title }) {
    return <>
        <section className="wealth-items_container">

            <div>

                <FadeIn
                    directionStart='y'
                    start='10'
                    directionEnd='y'
                    end='-20'
                    time='2'
                >
                    <Title title={title}></Title>
                </FadeIn>
                {text.map(item =>
                    <p key={item} className="wealth-text">
                        {item}
                    </p>
                )}
            </div>
            <FadeIn
                directionStart='y'
                start='-20'
                directionEnd='y'
                end='20'
                time='2'
            >
                <img className="wealth_Img" src={img} alt="" />
            </FadeIn>
        </section>
    </>
}

export { WealthCard }
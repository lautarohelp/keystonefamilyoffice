import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import './FadeIn.css';

// Registra el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function FadeIn({ time ,start, end, directionStart, directionEnd, animation, children }) {
  let child = useRef(null);

  useEffect(() => {
    // Configura el trigger para el elemento
    ScrollTrigger.create({
      trigger: child,
      start: 'top 80%', 
      end: 'bottom 20%', 
      toggleClass: 'fade-in', 
      onEnter: () => {
        gsap.to(child, {
          duration: [time], // time pueden configurar el tiempo de la animacion "time"
          opacity: 1,
          [directionStart]: [start], // configuras la direccion en la que empieza "directionStart: "x" o "y"" , "start" la distancia que recorre la animacion
          ease: [animation] || 'power3.out' , // configuras el tipo de animacion que modes hacer "animation"
        });
      },
      onLeaveBack: () => {
        gsap.to(child, {
          duration: [time],
          opacity: 0,
          [directionEnd]: [end], // configuras la direccion en la que termina "directionStart: "x" o "y"" , "start" la distancia que recorre la animacion
          ease: [animation] || 'power3.out', 
        });
      },
    });
  }, []);

  return (
    <div className='opacity' ref={(el) => (child = el)}>
      {children}
    </div>
  );
}

FadeIn.propTypes = {
  children: PropTypes.object.isRequired,
  directionStart: PropTypes.string.isRequired,
  directionEnd: PropTypes.any,
  end: PropTypes.string,
  start: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
}

export { FadeIn };
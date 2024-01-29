import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import './FadeIn.css';

// Registra el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function FadeIn({ time ,start, end,directionStart, directionEnd, children }) {
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
          duration: [time],
          opacity: 1,
          [directionStart]: [start],
          ease: 'power3.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(child, {
          duration: [time],
          opacity: 0,
          [directionEnd]: [end],
          ease: 'power3.out', 
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
  children: PropTypes.string.isRequired,
  directionStart: PropTypes.string.isRequired,
  directionEnd: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export { FadeIn };
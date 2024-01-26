import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import './FadeIn.css';

// Registra el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function FadeIn({ children }) {
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
          duration: 1.5,
          opacity: 1,
          y: -50,
          ease: 'power3.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(child, {
          duration: 1.5,
          opacity: 0,
          y: 50,
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
}

export { FadeIn };
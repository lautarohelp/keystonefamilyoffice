import { gsap, Power3 } from 'gsap'
import { useRef, useEffect } from 'react'

function FadeIn({ children }) {
    let child = useRef(null)
    useEffect(() => {
        gsap.to(child,
            {
                duration: 2,
                opacity: 1,
                y: -40,
                ease: Power3.easeOut
            }
        )
    }, [])
    
    return (<>
        <div style={{opacity: 0}} ref={e => { child = e }}>{children}</div>
    </>)

}

export { FadeIn }
import './App.css'
import Card from './components/cards/cards.jsx'

function App() {
  return (
    <>
    <Card title={"WELCOME"} 
    text={'The measurement of a firms’ success has changed radically. Professionals in our industry know that they need to change how they interact with their clients, focusing on the value that they offer rather than just the service they provide. Thus, we value our clients like family.'} 
    img={"https://www.keystonefamilyoffice.com/static/media/home-1.fabca82e7ec442e17907.webp"} 
    order={1}
    />
    
    <Card title={"OUR STRATEGY"} 
    text={'However, a more radical shift needs to happen internally. Firms need to embrace and foster a new mindset, disrupting their existing definition of success to account for new technologies, capabilities, and service models. Then provide this level of commitment to our clients.'} 
    img={"https://www.keystonefamilyoffice.com/static/media/home-2.862c5ef7e0e291b62e02.webp"} 
    order={2}
    />
    
    <Card title={"COMMITMENT"} 
    text={'We want our clients to enjoy a clear understanding of why they need to disrupt their current mindset and measures for success and realize the impact on their businesses and their goals.'} 
    img={"https://www.keystonefamilyoffice.com/static/media/home-3.c7957d9ebf3cab2e8260.webp"} 
    order={1}
    />
    </>
  )
}

export default App

import { Header } from "../../components/header/Header"
import { Items } from "./Items"
import { TitleParagraph } from "./TitleParagrph"
import './EmployeeBenefits.css'
import { LuCross } from "react-icons/lu";

function EmployeeBenefits() {
    return <>
    <Header
    img="https://www.keystonefamilyoffice.com/static/media/employee-bg.78ad71a4f72407491bd6.webp"
    text="EMPLOYEE BENEFITS
    WE ARE COMMITTED TO CARING FOR OUR EMPLOYEES AND THEIR FAMILIES"
    />

    <div className="container-EmployeeBenefits">
        <p>
            At Keystone Family Office, we are committed to caring for our employees and their families in the workplace and in their lives away from work. <br />
            The employee diversified nature of our organization enables us to structure benefit offerings which are tailored to the needs of our diverse population of employees including:
        </p>
        
        <div className="container-Main-Employee">
            <TitleParagraph
            title="HEALTH INSURANCE"
            img={<LuCross/>}
            text="Keystone Family Office offers an array of health insurance options to all employees, and pays over 80% of medical costs for covered U.S. employees. We offer comprehensive coverage, giving employees choices in medical plans so they can tailor their healthcare to their needs (plan choices vary by location). Among our plan offerings, we provide matching contributions in our HSA plans, low deductibles on both primary and mental health care, a shared monthly cost medical plan for individual employee coverage, and concierge support for employees’ benefits-related questions."
            />
        </div>

        <h1>WHY WORK FOR KEYSTONE FAMILY OFFICE?</h1>

        <ul>
            <Items/>
        </ul>
    </div>
    
    </>
}

export { EmployeeBenefits }
import { Header } from "../../components/header/Header"
import './EmployeeBenefits.css'
import { ComponentItem } from "./components/ComponentItems"
import { UlItems } from "./components/UlItems"

function EmployeeBenefits() {
    return <>
            <Header
            img="https://www.keystonefamilyoffice.com/static/media/employee-bg.78ad71a4f72407491bd6.webp"
            text="EMPLOYEE BENEFITS
            WE ARE COMMITTED TO CARING FOR OUR EMPLOYEES AND THEIR FAMILIES"
            title="EMPLOYEE BENEFITS"
            />

        <main className="container-EmployeeBenefits">

            <p className="p-principal-EmployeeBenefits">
                At Keystone Family Office, we are committed to caring for our employees and their families in the workplace and in their lives away from work. <br />
                The employee diversified nature of our organization enables us to structure benefit offerings which are tailored to the needs of our diverse population of employees including:
            </p>

            <ComponentItem/>

            <h1 className="h1-secunda-employeeBenefits">WHY WORK FOR KEYSTONE FAMILY OFFICE?</h1>

            <UlItems/>
        </main>
    </>
}

export { EmployeeBenefits }
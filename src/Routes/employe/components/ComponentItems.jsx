import { LuCross } from "react-icons/lu";
import { TitleParagraph } from "../utils/TitleParagrph";
import { FaHotel, FaPaperPlane, FaRegClock } from "react-icons/fa6";
import { MdOutlineFamilyRestroom, MdOutlinePregnantWoman } from "react-icons/md";
import { GiPoliceBadge } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbPlant2, TbWorldSearch } from "react-icons/tb";
import { CiMedicalCase } from "react-icons/ci";
import './ComponentItems.css'

export function ComponentItem() {
  return (
    <>
      <div className="container-Main-Employee">
            <section className="section-main-Employee line">
                <TitleParagraph
                title="HEALTH INSURANCE"
                img={<LuCross/>}
                text="Keystone Family Office offers an array of health insurance options to all employees, and pays over 80% of medical costs for covered U.S. employees. We offer comprehensive coverage, giving employees choices in medical plans so they can tailor their healthcare to their needs (plan choices vary by location). Among our plan offerings, we provide matching contributions in our HSA plans, low deductibles on both primary and mental health care, a shared monthly cost medical plan for individual employee coverage, and concierge support for employees’ benefits-related questions."
                />
                <TitleParagraph
                title="PARENTAL LEAVE"
                img={<FaHotel/>}
                text="All full time Keystone Family Office employees enjoy generous parental leave policies, with 16 weeks of paid Parental Leave available to parents who give birth. All expecting parents (via birth, adoption or foster placement) receive 10 weeks of paid parental leave. Paid Family Leave Our U.S.-based full-time employees can take up to four weeks of Paid Family Leave to care for seriously ill immediate family members."
                />
            </section>

            <section className="section-main-Employee line">
                <TitleParagraph
                title="PAID FAMILY LEAVE"
                img={<MdOutlineFamilyRestroom />}
                text="Our full-time, US-based employees may take up to four weeks of paid family leave to care for seriously ill immediate family members."/>

                <TitleParagraph
                title="MILITARY LEAVE"
                img={<GiPoliceBadge/>}
                text="We are committed to supporting the service of our employees in the US military and to protect the rights of our employees absent on military leave. This policy provides pay for up to 4 weeks of leave annual due to military service at 100% of base salary during that time period."
                />
            </section>

            <section className="section-main-Employee line">
                <TitleParagraph
                title="FAMILY PLANNING SUPPORT"
                img={<MdOutlinePregnantWoman/>}
                text="For U.S. employees who are expecting or planning a family, Keystone Family Office has partnered with Maven to provide around-the-clock support at every stage of the family planning journey. Maven provides a personal guide through egg freezing, fertility, pregnancy, postpartum, early pediatrics, and returning to work. Additionally, when traveling for work, employees are able to send breast milk home to their baby or carry it with them easily and safely with free breast milk shipping through Maven Milk."
                />
                <TitleParagraph
                title="MEDICAL TRAVEL REIMBURSEMENT"
                img={<FaHandHoldingUsd/>}
                text="Employees and dependents enrolled in any of our U.S. health plans can receive an additional travel and lodging reimbursement benefit of up to $4,000 annually in the event they are unable to access covered health care services within 100 miles of their home address."
                />
            </section>

            <section className="section-main-Employee line">
                <TitleParagraph
                title="LOCATION FLEXIBILITY"
                img={<TbWorldSearch/>}
                text="Many of our positions offer the potential to work entirely remotely or using a hybrid schedule that includes some days working in an office location and some days working remotely."
                />
                <TitleParagraph
                title="FLEXIBLE TIME OFF"
                img={<FaRegClock/>}
                text="As part of offering paid vacation days, sick time, and personal days, we encourage our employees to take time off based on their individual needs. With our Flexible Time Off policy, employees are free to take time off without designating how their time will be used. Currently available to all eligible employees based in the U.S., Canada, Ireland and Switzerland."
                />
            </section>

            <section className="section-main-Employee line">
                <TitleParagraph
                title="TELEMEDICINE"
                img={<CiMedicalCase/>}
                text="We recognize the value of flexibility when it comes to seeking medical attention, which is why we offer 100% free telemedicine services–including mental health–for employees who participate in select medical plans."
                />
                <TitleParagraph
                title="WELLNESS YOUR WAY"
                img={<TbPlant2/>}
                text="Wellness is personal to each individual. Our Wellness Your Way program enables its U.S.-based employees to choose their own wellness path. The program offers team members many free wellness-related activities including memberships to Calm and LoseIt! Premium, monthly wellness webinars and challenges throughout the year. Additionally, our Fitness Membership Reimbursement program (offered in some segments of our business) provides up to a $300 reimbursement per calendar year to employees."
                />
            </section>

            <section className="section-main-Employee">
                <TitleParagraph
                title="COMPANY HOLIDAYS"
                img={<FaPaperPlane/>}
                text="Keystone Family Office is proud to offer a comprehensive calendar of company-paid holidays, including Juneteenth and Election Day (for U.S.-based employees). For more information about our employment opportunities please use the contact tab in our web site."
                />
            </section>
      </div>
    </>
  )
}

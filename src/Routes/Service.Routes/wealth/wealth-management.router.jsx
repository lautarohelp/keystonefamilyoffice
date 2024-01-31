

import { Header } from "../../../components/header/Header"

import './wealth-management.router.css'
import { WealthCard } from './wealthComponent';



function WealthManagement() {
    return <>
        <Header
            img={'../../../../img/WealthViewBackGround.webp'}
            text={'WE PROVIDE ADVICE AND PERSONALIZED INVESTMENT STRATEGIES'}
        />
        <WealthCard 
        img={"../../../../img/WealthBodyImg.webp"} 
        title={"WEALTH MANAGEMENT"} 
        text={[`Through our affiliated entity Keystone Wealth Management Services Inc, we seek to preserve and grow our clients’ wealth through risk averse sound investment management and best practices. We are committed to a long-term investment approach for our clients, whether individual or entity/institutional.
        We employ a diversified portfolio of holdings across a wide range of asset classes industry sectors, and geographic location, with a “Swiss-made” approach to portfolio management. In addition, we partner with outside investment advisors and researchers who are experts in their respective fields and geographic demographics.
       `, ` 
       Our team benefits greatly from their perspective, research and insight which, in turn, becomes an integral part of our investment decisions. This third-party perspective serves to validate, clarify and refine our investment approach and ensure a balanced viewpoint of. In addition, we do not offer proprietary investment vehicles and therefore we can maintain an unbiased approach free from conflicts of typical proprietary product based managers`, ` Switzerland has proven to be a model of the fact that there are certain advantages in maintaining a stable, politically neutral, and highly specialized economy.`, ` We take the same approach in evaluating and building our clients’ portfolios. We employ a long term, client oriented approach to defining the investment strategy most suitable to the goals, experience, and risk comfort level of our clientele.`, ` Over the years that we are privileged enough to work together with our clients, we constantly seek to build strong relationships with them and provide full disclosure and reporting of our discretionary based accounts.`, ` As an independent investment advisor, with a fiduciary responsibility to our clients, we are able to provide custom tailored investment advice and strategies, from the relatively simple capital preservation strategies to intricate solutions with more moving parts than a high end Swiss watch!`]}
        />
        
    </>
}

export { WealthManagement }
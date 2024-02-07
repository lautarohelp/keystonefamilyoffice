import { FadeIn } from "../../../components/Componenets-animation/FadeIn";
import { Items } from "../utils/Items";

import './UlItems.css'

export function UlItems() {
  return (
    <>
    <div className="container-ulItems-ulImg">
      <ul className="ul-ulItems-container">
            <Items
            item={"Focus on Clients:"}
            text={" We cater to businesses, individuals, and families, assisting them in a coaching role so they can better manage their business, wealth and financial affairs. Working in such an environment will give you exposure to the unique needs and complexities of everyday clients to affluent clients, providing an opportunity to work with interesting and challenging financial situations."}
            />
            <Items
            item={"Diverse Responsibilities:"}
            text={"We provide a wide range of services, including investment management, tax planning, estate planning, philanthropy, and lifestyle services. Working for our office can offer a diverse and dynamic work experience that goes beyond traditional finance roles."}
            />
            <Items
            item={"Long-Term Client Relationships:"}
            text={"We tend to maintain long-term relationships with our Clients, sometimes spanning multiple generations. Building lasting relationships with Clients can be personally rewarding and create a sense of stability in your career."}
            />
            <Items
            item={"Niche Expertise:"}
            text={" We seek professionals with specialized skills and expertise in areas like wealth management, tax, legal, or family governance. If you have a particular area of expertise, joining our office may allow you to apply and further develop your skills in that niche."}
            />
            <Items
            item={"Opportunities for Learning and Growth:"}
            text={"Working in our setting will expose you to a variety of financial situations and challenges, providing valuable learning opportunities and room for professional growth."}
            />
            <Items
            item={"Collaborative Environment:"}
            text={"We typically operate in a close-knit, collaborative environment, where team members work together closely to serve our clients' needs. This collaborative culture can foster a strong sense of teamwork and camaraderie."}
            />
            <Items
            item={"Impactful Work:"}
            text={"Many of our Client engage in philanthropy and impact investing, focusing on making a positive difference in their clients' lives and in the communities they serve. Contributing to meaningful initiatives can add purpose to your work."}
            />
            <Items
            item={"Competitive Compensation:"}
            text={"We often compete with other financial institutions to attract top talent. As a result, we offer competitive compensation packages to attract and retain skilled professionals."}
            />
      </ul>

      <FadeIn
      directionStart="x"
      start="-40"
      directionEnd="x"
      end="20"
      time="1.5"
      animation="elastic.out"
      >
        <div className="img-media-ulItems"/>
      </FadeIn>
    </div>
    </>
  )
}
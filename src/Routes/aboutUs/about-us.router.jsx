import { FadeIn } from "../../components/Componenets-animation/FadeIn"
import { Title } from "../../components/Title/Title"
import { Header } from "../../components/header/Header"
import './About-us.css'

function AboutUs() {
    return <>
        <Header
            img={'https://www.keystonefamilyoffice.com/static/media/about-bg.74ca8dee56f0360ced0e.webp'}
            text={'OUR GOAL IS TO BE A TRUSTED PARTNER OF OUR CLIENTS'}
        />
        
        <div className="container-AboutUs">
            <div className="container-sub1-AboutUs">
                <div>
                    <FadeIn
                        directionStart="y"
                        start="-20"
                        directionEnd="y"
                        end="20"
                        time="1.5"
                        animation="elastic.out"
                        >
                            <div className="title-AboutUp">
                                <Title
                                title="ABOUT KEYSTONE FAMILY OFFICE"
                                />
                            </div>
                    </FadeIn>

                    <FadeIn
                    directionStart="y"
                    start="-20"
                    directionEnd="y"
                    end="20"
                    time="0.7"
                    >
                        <p>
                            Keystone Family Office is an internationally focused multi-family office, which provides comprehensive advisory services to families and organizations.
                            <br />
                            <br />
                            We live in a time where changes in the ability to create and maintain wealth occur quickly and frequently. To adapt to the challenges of increased regulatory reforms, taxation regimes, uncertainty of economic conditions, and difficulties in maintaining one’s right to privacy, successful business owners and families need a source of trusted advisors more than ever.
                            <br />
                            <br />
                            Often, families with complex family structures own various forms of investments, business and real estate interests around the world. and value the centralized and independent counsel that a multi-family office organization can provide.
                            <br />
                            <br />
                            Keystone was founded by skilled  PhD´s , accountants, enrolled agents, portfolio managers, and multilingual business development advisors with years of experience in the professions of consulting, accounting, wealth management, real estate and finance. We can assist with all aspects of a family or individual’s asset management, particularly when the assets or investments are located within the United States or indirectly connected to the United States.
                            <br />
                            <br />
                            We employ specialists from all relevant disciplines, including portfolio managers (through our registered Investment Advisor affiliate, Keystone Wealth Management Services Inc.), to round out the inter-disciplinary service team we make available to our clients.
                            We have an extensive network of respected lawyers, accountants, portfolio managers, and consultants from around the world, covering multiple disciplines. Therefore, we work with our clients’ existing advisors in other jurisdictions as a team member.
                        </p>
                    </FadeIn>
                </div>
                <FadeIn
                directionStart="y"
                start="-40"
                directionEnd="y"
                end="40"
                time="1.5"
                >
                    <img src="https://www.keystonefamilyoffice.com/static/media/about-1.764aa2c99f21e782bc8d.webp" alt="" />
                </FadeIn>
            </div>

            <div className="container-sub1-AboutUs  container-sub1-AboutUs2">

            <FadeIn
                directionStart="y"
                start="-40"
                directionEnd="y"
                end="40"
                time="1.5"
                >
                <img src="https://www.keystonefamilyoffice.com/static/media/about-2.e8469ef599420262ec10.webp" alt="" />
            </FadeIn>
            <div>
                <FadeIn
                directionStart="y"
                start="-20"
                directionEnd="y"
                end="20"
                time="1.5"
                animation="elastic.out"
                >
                    <div className="title-AboutUp">
                    <Title
                    title="THE MULTI-FAMILY OFFICE CONCEPT"
                    />
                    </div>
                </FadeIn>
                <FadeIn
                directionStart="y"
                start="-20"
                directionEnd="y"
                end="20"
                time="0.7"
                >
                    <p>
                        Most sources point to the early origins of the concept of family offices as American industrialist and entrepreneur, John D. Rockefeller Sr. At his death in 1937, his fortune stood at the approximate equivalent of $255 billion today and is considered one of the wealthiest persons in history.
                        <br />
                        <br />
                        Rockefeller established a private office of professionals tasked with the significant duty of managing and growing his vast business empire and wealth. The professionals in this office managed his wealth under a consolidated trust structure known as The Standard Oil Trust.
                        <br />
                        <br />
                        This formalized structure is widely considered to be the first “single family office”. In the years that followed, many other wealthy U.S. families such as the Carnegies and Morgan’s employed similar structures to aide in succession planning, financial services, and philanthropy.
                        <br />
                        <br />
                        This same basic concept was then expanded by professionals seeking to manage multiple families or clients, but by providing the core level of attention and professionalism expected from a single-family office.
                        <br />
                        <br />
                        A multi-family office is a privately controlled and commercially operated organization that employs professionals and staff to support multiple-affluent families with the organization, management, and maintenance of parts of their assets, needs, and wishes.
                        <br />
                        <br />
                        Family office support has become a valuable tool to the our Clients due to unbiased advice, objectivity, comprehensive approach, and very importantly confidentiality with the families we represent.
                        <br />
                        <br />
                        A family office will often provide a broad range of professional services for several generations of the same family and therefore require support firms that have the same goals.
                        <br />
                        <br />
                        A family office support team offers valuable assistance when assets are located across multiple jurisdictions, classes and compositions, and when the need for a unified point of contact for complex structures and planning can provide value.
                    </p>
                </FadeIn>
                </div>
            </div>
        </div>
    </>
}

export { AboutUs }
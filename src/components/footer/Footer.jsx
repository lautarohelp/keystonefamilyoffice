import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { ContactInfo } from "./Contact-info";
import { InfoSection } from "./Info-section"
import { FadeIn } from "../Componenets-animation/FadeIn";
import './footer.css'

function Footer() {
  
  return (
    <>
      <footer className="content-footer">
        <img className="img-footer" src="../img/white-logo-navbar.1c9c0bb65b54b3a52b1d.webp" alt="" />
        <div className="info-footer">
          <FadeIn>
            <div className='infoSection'>
              <InfoSection
                title={'Keystone Family Office Inc'}
                direction={'535 Baltimore Pike, Suite 100, Glen Mills PA 19342'}
              >
                <ContactInfo
                  img={<FaPhone/>}
                  info={'+1-(610) 765-6008'}
                >
                </ContactInfo>

                <ContactInfo
                  img={<FaFax/>}
                  info={'+1-(610) 361-8398'}
                ></ContactInfo>

                <ContactInfo
                  img={<FaMailBulk/>}
                  info={'info@keystonefamilyoffice.com'}
                ></ContactInfo>

            </InfoSection>
            </div>
          </FadeIn>

          <FadeIn>
            <div className='infoSection'>
              <InfoSection
                className={'infoSection'}
                title={'Keystone Group Family Office Inc'}
                direction={'112 Capitol Trail Newark, DE 19711'}
              >
                <ContactInfo
                  img={<FaPhone/>}
                  info={'+1-(302) 994-2000'}
                >
                </ContactInfo>

                <ContactInfo
                  img={<FaFax/>}
                  info={'+1-(302) 369-1764'}
                ></ContactInfo>

              </InfoSection>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className='infoSection'>
              <InfoSection
                className={'infoSection'}
                title={'Affiliated Registered Investment Advisor'}
                direction={'535 Baltimore Pike, Suite 100, Glen Mills PA 19342'}
              >
                <ContactInfo
                  img={<FaPhone/>}
                  info={'+1-(610) 765-6008'}
                >
                </ContactInfo>

                <ContactInfo
                  img={<FaFax/>}
                  info={'+1-(610) 361-8398'}
                ></ContactInfo>

                <ContactInfo
                  img={<FaMailBulk/>}
                  info={'marklm@keystonewms.com'}
                ></ContactInfo>

              </InfoSection>
            </div>
          </FadeIn>
        </div>

        <p className="finpage-footer">
        Copyright ©​ Keystone Family Office Inc.  
        <a href="#">| Revalcode</a>
        </p>
      </footer>
    </>
  )
}


export {Footer}
import { Layout } from "../../components/layout/Layout";
import { Header } from "../../components/header/Header";
import { Title } from "../../components/Title/Title";

function CorporateService() {
  return (<>
    <Header
      img={"../../../img/corporate-bg.021047b2997528258af5.webp"}
      text={'WE PROVIDE ADVICE AND EXECUTION IN ALL STRUCTURAL CORPORATE MATTERS'}
      title={'CORPORATE SERVICES'} />
    <Title
      title={"CORPORATE SERVICES"}

    />
    <Layout
      text={"From our roots in accounting and corporate services; we can state with confidence that the suite of corporate administrative services we offer are unmatched by other family office organizations. Our group of experts provides advisory and execution in all structural corporate matters, from multinational to domestic companies operating at either a regional or international level. We take special interest in understanding our clients’ business model, industry and needs, aiming to generate pertinent solutions for specific matters including developing comprehensive and long-term strategies. We provide a client experience that other companies can only image.For example, below you will find a short list for your consideration: "}
      items={"Formation and management of U.S.A Resident Corporations, Partnerships, and LLC’s in all 50 States, the US Virgin Islands, and networks around the world.Statutory and registered agent services included with every entity."}
      imgTwo={""}

    />

  </>
  )

}

export { CorporateService }
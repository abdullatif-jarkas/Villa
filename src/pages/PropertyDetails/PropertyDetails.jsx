import Hero from "../../components/Hero/Hero"
import InfoTable from "../../components/InfoTable/InfoTable"
import BestDeal from "../../components/main/BestDeal/BestDeal"
import './PropertyDetails.css'
import MainImg from './../../assets/imgs/single-property.jpg'
import Accordion from "../../components/Accordion/Accordion"
import NavBar from "../../components/common/NavBar/NavBar"
import { links } from "../../data/linksData"
import { infodata } from "../../data/infoData"
import { data } from "../../data/accordionData"
import { useParams } from "react-router-dom"
import { detailsData } from "./../../data/detailsData"

const PropertyDetails = () => {
  const id = useParams();
  return (
    <div className="property-details">
      <NavBar links={links} />
      <Hero title="/  Single Property" text="Single Property" />
      <div className="container">
        <div className="row">
          <div className="col property-details-info">
            <div className="details-main-img">
              <img src={MainImg} alt="" />
            </div>
            <div className="main-content">
            <span className="category">Apparment</span>
            <h4>{id.id? detailsData[id.id]: detailsData[0]}</h4>
              <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven&apos;t heard of them ugh hella.</p>
              <p>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&amp;B DSA poutine neutra cardigan hoodie pop-up.</p>
            </div>
            <Accordion data={data} />
          </div>
          <div className="col property-details-info-table">
            <InfoTable info={infodata} img={true} />
          </div>
        </div>
      </div>
      <BestDeal />
    </div>
  )
}

export default PropertyDetails
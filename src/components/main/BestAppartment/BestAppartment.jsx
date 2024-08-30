import AppartmentImage from './../../AppartmentImage/AppartmentImage'
import MainImg from './../../../assets/imgs/featured.jpg'
import BadgeImg from './../../../assets/imgs/featured-icon.png'
import AppartmentFeatured from './../../AppartmentFeatured/AppartmentFeatured'
import InfoTable from './../../InfoTable/InfoTable'
import './BestAppartment.css'
import { infodata } from '../../../data/infoData'

const BestAppartment = () => {

  return (
    <div className='best-appartment'>
      <div className="container">
        <div className="row">
          <AppartmentImage mainImg={MainImg} badgeImg={BadgeImg} />
          <AppartmentFeatured />
          <div className="info-table-container col">
            <InfoTable info={infodata} img={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestAppartment
import PropertyCard from '../../PropertyCard/PropertyCard'
import SectionHeader from '../../SectionHeader/SectionHeader'
import './Properties.css'
import { data } from '../../../data/propertiesData'

const Properties = () => {

  return (
    <div className='properties'>
      <div className="container">
        <SectionHeader title="| Properties" text="We Provide The Best Property You Like" />
        <div className="properties-items">
          {
            data.map((item, index) => (
              <div className='property-card-container' key={index}>
                <PropertyCard data={item} id={index} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Properties
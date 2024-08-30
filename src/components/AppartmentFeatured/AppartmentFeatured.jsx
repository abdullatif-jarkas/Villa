import Accordion from '../Accordion/Accordion'
import SectionHeader from '../SectionHeader/SectionHeader'
import './AppartmentFeatured.css'
import { data } from '../../data/accordionData'

const AppartmentFeatured = () => { 

  return (
    <div className='appartment-featured col'>
      <SectionHeader title="| Featured" text="Best Appartment & Sea view"/>
      <Accordion data={data}/>
    </div>
  )
}

export default AppartmentFeatured
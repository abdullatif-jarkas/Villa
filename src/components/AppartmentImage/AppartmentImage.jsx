import './AppartmentImage.css'

const AppartmentImage = ({mainImg, badgeImg}) => {
  return (
    <div className="appartment-image col">
      <div className="appartment-image-container">
        <img className='appartment-main-image' src={mainImg} alt="Appartment" />
        <a className="appartment-badge-image" href="#">
          <img src={badgeImg} alt="contract" />
        </a>
      </div>
    </div>
  )
}

export default AppartmentImage
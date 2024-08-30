import './InfoTable.css'

const InfoTable = ({ info, img }) => {
  return (
    <div className='info-table'>
      <ul>
        {info.map((item, index) => (
          <li key={index}>
            {img? <img src={item.infoImg} alt="info-img" />: ''}
            {item.infoText}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InfoTable
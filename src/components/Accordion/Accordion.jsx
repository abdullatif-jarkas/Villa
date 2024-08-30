import { useState } from 'react'
import './Accordion.css'

const Accordion = ({ data }) => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  
  return (
    <div className='accordion'>
      {data.map((item, index) => 
        ( 
          <div className='item' key={index}>
            <div className="title" onClick={() => toggle(index)}>
              <h2 className={selected === index? "active": ""}>{item.question}</h2>
            </div>
            <div className={selected === index? "content show": "content"}>
              {item.answer}
            </div>
          </div>
          )
      )}
    </div>
  )
}

export default Accordion
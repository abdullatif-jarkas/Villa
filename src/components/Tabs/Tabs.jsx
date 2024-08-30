import Tab from '../Tab/Tab'
import './Tabs.css'

const Tabs = ({ data, filterItems, fun }) => {
  return (
    <ul className='tabs'>
      {
        data.map((item, index) => (
          <li key={index}>
            <Tab filterItems={filterItems} fun={fun} idx={index} text={item} />
          </li>
        ))
      }
    </ul>
  )
}

export default Tabs
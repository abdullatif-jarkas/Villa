import { useContext } from 'react';
import './Tab.css'
import { ToggleContext } from '../main/BestDeal/BestDeal';
import { ToggleContext2 } from '../../pages/Properties/Properties';
import { useLocation } from 'react-router-dom';
const Tab = ({ text, filterItems, fun, idx }) => {
  const toggle = useContext(ToggleContext);
  const toggle2 = useContext(ToggleContext2);
  let location = useLocation();

  const currentLocation = location.pathname;

  return (
      <button onClick={() => {filterItems? filterItems(text): ""; fun? fun(idx): ""}} className={(currentLocation == '/properties'? toggle2 : toggle) == idx? "tab active": "tab"}>
        {text}
      </button>
    )
}


export default Tab
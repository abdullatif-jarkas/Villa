import InfoTable from "../../InfoTable/InfoTable";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./BestDeal.css";
import DealImg0 from "./../../../assets/imgs/deal-01.jpg";
import DealImg1 from "./../../../assets/imgs/deal-02.jpg";
import DealImg2 from "./../../../assets/imgs/deal-03.jpg";
import NavButton from "../../NavButton/NavButton";
import Tabs from "../../Tabs/Tabs";
import { infoDealData } from "../../../data/infoData";
import { createContext, useEffect, useState } from "react";
import { extraDealData } from "../../../data/infoData";
export const ToggleContext = createContext(null);

const BestDeal = () => {
  const tabsData = ["Appartment", "Villa House", "Penthouse"];

  const imgs = [DealImg0, DealImg1, DealImg2];

  const [toggle, setToggle] = useState(0);


  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <div className="best-deal">
      <div className="container">
        <div className="deal-header">
          <SectionHeader
            title="| Best Deal"
            text="Find Your Best Deal Right Now!"
          />
          <ToggleContext.Provider value={toggle}>
            <Tabs fun={updateToggle} data={tabsData} toggle={toggle} />
          </ToggleContext.Provider>
        </div>
        <div className="deal-container">
          <InfoTable info={infoDealData[toggle]} />
          <div className="deal-img">
            <img src={imgs[toggle]} alt="deal-img" />
          </div>
          <div className="extra-info">
            <h4>{extraDealData[toggle].title}</h4>
            <p>{extraDealData[toggle].text1}</p>
            <p>{extraDealData[toggle].text2}</p>
            <div className="extra-btn">
              <NavButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;

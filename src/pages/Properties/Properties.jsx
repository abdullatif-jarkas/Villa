import Hero from "../../components/Hero/Hero";
import "./Properties.css";
import propertyImg1 from "./../../assets/imgs/property-01.jpg";
import propertyImg2 from "./../../assets/imgs/property-02.jpg";
import propertyImg3 from "./../../assets/imgs/property-03.jpg";
import propertyImg4 from "./../../assets/imgs/property-04.jpg";
import propertyImg5 from "./../../assets/imgs/property-05.jpg";
import propertyImg6 from "./../../assets/imgs/property-06.jpg";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import Tabs from "../../components/Tabs/Tabs";
import { createContext, useEffect, useState } from "react";
import NavBar from "../../components/common/NavBar/NavBar";
import { links } from "../../data/linksData";
export const ToggleContext2 = createContext(null);

const Properties = () => {
  const [toggle, setToggle] = useState(0);

  const data = [
    {
      img: propertyImg1,
      type: "Luxury Villa",
      price: "$2.264.000",
      location: "18 New Street Miami, OR 97219",
      bedrooms: "8",
      bathrooms: "8",
      area: "545m2",
      floor: "3",
      parking: "6 spots",
      cat: "Villa House",
    },
    {
      img: propertyImg2,
      type: "Luxury Villa",
      price: "$1.180.000",
      location: "54 Mid Street Florida, OR 27001",
      bedrooms: "6",
      bathrooms: "5",
      area: "450m2",
      floor: "3",
      parking: "8 spots",
      cat: "Villa House",
    },
    {
      img: propertyImg3,
      type: "Luxury Villa",
      price: "$1.460.000",
      location: "26 Old Street Miami, OR 38540",
      bedrooms: "5",
      bathrooms: "4",
      area: "255m2",
      floor: "3",
      parking: "10 spots",
      cat: "Villa House",
    },
    {
      img: propertyImg4,
      type: "Apartment",
      price: "$584.500",
      location: "12 New Street Miami, OR 12650",
      bedrooms: "4",
      bathrooms: "3",
      area: "125m2",
      floor: "25th",
      parking: "2 cars",
      cat: "Appartment",
    },
    {
      img: propertyImg5,
      type: "Penthouse",
      price: "$925.600",
      location: "34 Beach Street Miami, OR 42680",
      bedrooms: "4",
      bathrooms: "4",
      area: "180m2",
      floor: "38th",
      parking: "2 cars",
      cat: "Penthouse",
    },
    {
      img: propertyImg6,
      type: "Modern Condo",
      price: "$450.000",
      location: "22 New Street Portland, OR 16540",
      bedrooms: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
      cat: "Villa House",
    },
    {
      img: propertyImg6,
      type: "Modern Condo",
      price: "$450.000",
      location: "22 New Street Portland, OR 16540",
      bedrooms: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
      cat: "Villa House",
    },
    {
      img: propertyImg6,
      type: "Modern Condo",
      price: "$450.000",
      location: "22 New Street Portland, OR 16540",
      bedrooms: "3",
      bathrooms: "2",
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
      cat: "Villa House",
    },
    {
      img: propertyImg4,
      type: "Apartment",
      price: "$584.500",
      location: "12 New Street Miami, OR 12650",
      bedrooms: "4",
      bathrooms: "3",
      area: "125m2",
      floor: "25th",
      parking: "2 cars",
      cat: "Appartment",
    },
  ];

  const tabsData = ["Show All", "Appartment", "Villa House", "Penthouse"];

  const [items, setItems] = useState(data);

  const filterItems = (cat) => {
    if (cat === "Show All") {
      const newItems = data;
      setItems(newItems);
    } else {
      const newItems = data.filter((newVal) => newVal.cat === cat);
      setItems(newItems);
    }
  };

  const updateToggle = (id) => {
    setToggle(id);
  };


  return (
    <div className="properties-page">
      <NavBar links={links} />
      <Hero title="/ Properties" text="Properties" />
      <div className="container">
        <ToggleContext2.Provider value={toggle}> 
          <Tabs data={tabsData} fun={updateToggle} filterItems={filterItems} />
        </ToggleContext2.Provider>
        <div className="properties-cards">
          {items.map((item, index) => (
            <div className="property-card-container" key={index}>
              <PropertyCard data={item} />
            </div>
          ))}
        </div>
        <div className="prop-pagination">
          <ul>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#" className="active">
                2
              </a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">&gt;&gt;&gt;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Properties;

import { useState } from 'react'
import './ImageSlider.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import NextArrow from './NextArrow/NextArrow';
import PrevArrow from './PrevArrow/PrevArrow';

const ImageSlider = ({ imgUrls }) => {

  const [imageIndex, setImageIndex] = useState(0);

  var settings = {
    customPaging: function(i) {
      return (
        <button className='dot-btn'></button>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    nextArrow: <NextArrow className="Hello" />,
    prevArrow: <PrevArrow />
  };
  return (
    <Slider {...settings}>
      {imgUrls.map((item, index) => {
        return (
          <div key={index} className='slider-item-container' style={{translate: `${-100 * imageIndex}%`}}>
            <div className="slider-text-container">
              <span className="category">{item.city}, <em>{item.country}</em></span>
              <h2>{item.text}</h2>
            </div>
            <div className="slider-img-container">
              <img
                className='image-slider-img' 
                src={item.img} 
                alt="hero-image" 
              />
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

export default ImageSlider
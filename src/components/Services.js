import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { serviceData } from '../serviceData';

const Services = () => {

  const [defaultImage, setDefaultImage] = useState({});

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: './images/kobido.jpg',
    }));
  };

  function Arrow(props) {
    const { style } = props;
    return (
      <div
        style={{ ...style, display: "none" }}
      />
    );
  }

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    prevArrow: <Arrow/>,
    nextArrow: <Arrow/>,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='bg-[#343A56] pt-7 pb-14' id='services'>
      <h2 className="text-center text-3xl mt-2 mb-5 font-['Playfair_Display']">Usługi</h2>
      <Slider {...settings}>
        {serviceData.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
              className='w-[90%] mx-auto'
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.img
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h3 className='text-center font-bold text-xl mx-5 my-2 font-["Playfair_Display"]'>{item.title}</h3>
            </div>
            <div className="card-bottom">
              <p className='text-center text-sm mx-3 mb-2 leading-6'>{item.description}</p>

            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Services
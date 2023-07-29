import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceData } from "../serviceData";

const Services = () => {
  const [defaultImage, setDefaultImage] = useState({});

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };


  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    <section className="bg-[#343A56] pt-7 pb-14" id="services">
      <h2 className="text-center text-3xl mb-8 font-['Playfair_Display']">
        Usługi
      </h2>
      <Slider {...settings}>
        {serviceData.map((item) => (
          <div key={item.id} className="card">
            <div className="card-top">
              <img
                className="w-[90%] mx-auto"
                src={
                  defaultImage[item.title] === item.title && item.img
                  
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h3 className='text-center font-bold text-xl mx-5 my-2 font-["Playfair_Display"]'>
                {item.title}
              </h3>
            </div>
            <div className="card-bottom">
              <p className="text-center text-sm mx-3 mb-2 leading-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;

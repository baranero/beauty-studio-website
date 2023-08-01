import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceData } from "../serviceData";
import Kobido from "../images/1.jpg";

const Services = () => {
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

  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(
          "https://serwer2213418.home.pl/autoinstalator/wordpress/wp-json/wp/v2/posts"
        );
        const data = await response.json();

        const formattedData = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          description: removeHtmlTags(post.excerpt.rendered),
          img: getFeaturedImage(post.content.rendered),
        }));
        setServiceData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const removeHtmlTags = (htmlString) => {
      const doc = new DOMParser().parseFromString(htmlString, 'text/html');
      return doc.body.textContent || '';
    };

    const getFeaturedImage = (content) => {
      const imgRegExp = /<img.*?src="(.*?)"/;
      const match = content.match(imgRegExp);
      return match ? match[1] : "";
    };

    fetchServiceData();
  }, []);
  console.log(serviceData);
  const defaultImage = {
    linkDefault: Kobido,
  };

  const handleErrorImage = (event) => {
    event.target.src = defaultImage.linkDefault;
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
                src={item.img || defaultImage.linkDefault}
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

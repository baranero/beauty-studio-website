import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Kobido from "../images/1.jpg";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";

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
          "https://wrobelagnieszka.pl/autoinstalator/wordpress/wp-json/wp/v2/posts?per_page=100"
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
      const doc = new DOMParser().parseFromString(htmlString, "text/html");
      return doc.body.textContent || "";
    };

    const getFeaturedImage = (content) => {
      const imgRegExp = /<img.*?src="(.*?)"/;
      const match = content.match(imgRegExp);
      return match ? match[1] : "";
    };

    fetchServiceData();
  }, []);

  const handleErrorImage = (event) => {
    event.target.src = Kobido;
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      className="bg-[#343A56] pt-7 pb-14 min-h-[60vh]"
      id="services"
    >
      <motion.h2
        ref={ref}
        variants={fadeIn(0.3)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="text-center text-3xl mb-8 font-['Playfair_Display']"
      >
        Usługi
      </motion.h2>
      <Slider {...settings}>
        {serviceData.map((item) => (
          <motion.div
            key={item.id}
            className="card"
            variants={fadeIn(0.3)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            exit="hidden"
          >
            <div className="card-top">
              <img
                className="w-[90%] max-h-[160px] lg:max-h-[330px] object-cover mx-auto"
                src={item.img || Kobido}
                alt={item.title}
                onError={handleErrorImage}
              />
              <h3 className="text-center font-bold text-xl mx-5 my-2 font-['Playfair_Display']">
                {item.title}
              </h3>
            </div>
            <div className="card-bottom">
              <p className="text-center text-sm mx-3 mb-2 leading-6">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default Services;

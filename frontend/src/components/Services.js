import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Kobido from "../images/1.jpg";
import handsImg from "../images/2.jpg";
import eyeImg from "../images/3.jpg";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import ServiceCategoryCard from "./ServiceCategoryCard";

const Services = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
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
          description: removeHtmlTags(post.content.rendered),
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
        <ServiceCategoryCard
        ref={ref}
        inView={inView}
          img={handsImg}
          title="Pielęgnacja dłoni"
          description="Pielęgnacja dłoni to nie tylko kwestia estetyki, ale przede wszystkim zdrowia i komfortu. Nasze usługi pielęgnacji dłoni to kompleksowe rozwiązania, które obejmują nawilżanie, odżywianie oraz pielęgnację paznokci. Dzięki nim Twoje dłonie będą nie tylko pięknie wyglądać, ale także czuć się zdrowo i komfortowo. Pozwól nam zadbać o Twoje dłonie i ciesz się ich naturalną urodą każdego dnia."
          path="/uslugi/pielegnacja-dloni"
        />
        <ServiceCategoryCard
        ref={ref}
        inView={inView}
          img={eyeImg}
          title="Pielęgnacja oprawy oczu"
          description="Pielęgnacja oprawy oczu to kluczowy krok w dbaniu o zdrowie i urodę. Nasze usługi pielęgnacji oprawy oczu obejmują profesjonalne zabiegi, które pomagają wzmocnić rzęsy, podkreślić brwi i redukować zmęczenie oczu. Dzięki naszym specjalistycznym technikom i produktom, uzyskasz piękne i zdrowe oczy. Zadbaj o swoją oprawę oczu już dziś i ciesz się wyrazistym spojrzeniem."
          path="/uslugi/pielegnacja-oczu"
        />
        <ServiceCategoryCard
        ref={ref}
        inView={inView}
          img={Kobido}
          title="Pielęgnacja i masaże twarzy"
          description="Pielęgnacja i masaż twarzy to kluczowy element zachowania zdrowej i promiennej skóry. Poprzez delikatne oczyszczanie, nawilżanie i masaż, można redukować napięcie mięśni, stymulować krążenie krwi oraz zachować młodszy wygląd skóry. Nasze profesjonalne usługi pielęgnacji i masażu twarzy pomagają odprężyć się i odzyskać naturalną piękność."
          path="/uslugi/pielegnacja-twarzy"
        />
      </Slider>
    </motion.section>
  );
};

export default Services;

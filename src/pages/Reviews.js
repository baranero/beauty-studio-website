import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";

const Reviews = () => {
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const reviews = [
    {
      name: "Aleksandra Presiak",
      date: "8 miesięcy temu",
      rating: "5",
      description: "Gorąco polecam Agnieszkę Wróbel, od kilku lat dba o moją skórę, wspaniale dobiera zabiegi  kosmetyki,pełen profesjonalizm zaangażowanie kosmetologa. Bardzo przyjemne masaże głowy czy dekoltu przy okazji zabiegu na skore a to wszystko w  klimacie muzyki relaksujacej. Wspaniała, ciepła kobieta, która swoją ogromną wiedzę łączy z życzliwością i wsparciem dla klientki. Rewelacyjny zabieg BioReePeel mój nr jeden masaż kobido czy inne... Gorąco polecam",
      img: "../",
    },
  ];

  return (
    <>
      <div className="mt-[15vh] lg:mt-[20vh] min-h-[65vh]">
        <motion.section
          ref={ref}
          className="bg-[#343A56] pt-7 pb-14"
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
            Opinie
          </motion.h2>
          <Slider {...settings}>
            <div>
              <img src="" />
            </div>
          </Slider>
        </motion.section>
      </div>
    </>
  );
};

export default Reviews;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import { Rating } from "@mui/material";

const Reviews = () => {
  const settings = {
    dots: true,
    className: "center mx-auto lg:w-3/5 ",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const reviews = [
    {
      name: "Aleksandra Presiak",
      date: "8 miesięcy temu",
      rating: <Rating name="size-small" defaultValue={5} size="small" />,
      description:
        "Gorąco polecam Agnieszkę Wróbel, od kilku lat dba o moją skórę, wspaniale dobiera zabiegi  kosmetyki,pełen profesjonalizm zaangażowanie kosmetologa. Bardzo przyjemne masaże głowy czy dekoltu przy okazji zabiegu na skore a to wszystko w  klimacie muzyki relaksujacej. Wspaniała, ciepła kobieta, która swoją ogromną wiedzę łączy z życzliwością i wsparciem dla klientki. Rewelacyjny zabieg BioReePeel mój nr jeden masaż kobido czy inne... Gorąco polecam",
      img: "./images/review-1.png",
    },
    {
      name: "Monika",
      date: "8 miesięcy temu",
      rating: <Rating name="size-small" defaultValue={5} size="small" />,
      description:
        "Polecam wszystkim szukającym profesjonalizmu połączonego z głębokim relaksem. Pani Agnieszka tworzy SPA dla ciała i duszy. Od lat korzystam z zabiegów, które przynoszą wspaniałe efekty. Aż chce się wracać❤️",
      img: "../images/review-2.png",
    },
    {
      name: "Aleksandra Sobczyk",
      date: "8 miesięcy temu",
      rating: <Rating name="size-small" defaultValue={5} size="small" />,
      description:
        "Serdecznie polecam każdemu, komu zależy na wspaniałych efektach. Zabiegi u pani Agnieszka to sama przyjemność, a co najważniejsze już po pierwszej wizycie widać i czuć efekty.",
      img: "../images/review-3.png",
    },
    {
      name: "Emilia Obidzińska",
      date: "8 miesięcy temu",
      rating: <Rating name="size-small" defaultValue={5} size="small" />,
      description:
        "Polecam każdemu. Pełen profesjonalizm, zabiegi wykonywane z najwyższą starannością w super atmosferze.",
      img: "../images/review-4.png",
    },
    {
      name: "Honorata Idzikowska",
      date: "6 miesięcy temu",
      rating: <Rating name="size-small" defaultValue={5} size="small" />,
      description:
        "Polecam. Fachowość ,zaangażowanie i indywidualne podejście :)",
      img: "../images/review-5.png",
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
            {reviews.map((review) => {
              return (
                <div className="text-[#fbf0b0] relative min-h-max">
                  <img
                    className="absolute h-[60px] lg:left-0 left-2 top-[40%] "
                    src={review.img}
                    alt="Profile"
                  />
                  <div className="bg-[#d1a617] bg-opacity-70 py-4 mx-10 lg:mx-6">
                    <div className="px-16 flex flex-col justify-center h-full">
                      <h3 className="font-bold text-[15px]">{review.name}</h3>
                      <h4 className="text-[14px] mt-2">{review.date}</h4>
                      <h4 className="mt-2">{review.rating}</h4>
                      <p className="text-[14px]">{review.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </motion.section>
      </div>
    </>
  );
};

export default Reviews;

import AboutMeImage from "../images/profile.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section ref={ref} className="pb-10 bg-[#f2f0f2] text-[#10152b]" id="about-me">
              <h3 className="text-center text-3xl mb-6 font-['Playfair_Display']">
          O mnie
        </h3>
      <motion.img
        ref={ref}
        variants={fadeIn(0.3)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        src={AboutMeImage}
        alt="Kobido massage"
        className="lg:h-[70vh] lg:mx-auto"
      />
      <motion.div
        ref={ref}
        variants={fadeIn(0.3)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
      >
        <h3 className="text-center text-3xl my-6 font-['Playfair_Display']">
          O mnie
        </h3>
        <hr className="mb-3 mx-auto w-1/2" />
        <p className="text-center text-sm mx-4 md:text-base md:mx-16 lg:w-[50%] lg:mx-auto lg:leading-7">
          Nazywam się Agnieszka Wróbel, jestem magistrem kosmetologii.
          Ukończyłam Wyższą Szkołę Fizjoterapii we Wrocławiu, Uniwersytet
          Medyczny w Łodzi oraz studia podyplomowe z psychodietetyki na
          Uniwersytecie SWPS we Wrocławiu. Od 15 lat pracuję z klientami dbając
          o ich skórę.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;

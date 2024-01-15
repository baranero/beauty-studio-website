import AboutImage from "../images/99.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section className="flex bg-white relative flex-col text-[#10152b]" id="about">
      <img
        className="opacity-70 bg-white h-[100vh] object-cover object-top lg:h-[100vh]"
        src={AboutImage}
        alt="Massage"
      />
      <div className="text-center absolute pt-24 h-full w-full flex">
        <div className="my-auto translate-x-48 lg:w-[60%] lg:mx-auto">
          <motion.h1
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center  text-4xl lg:text-5xl my-5 font-['Playfair_Display']"
          >
            Piękno to moja pasja
          </motion.h1>
          <motion.p
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center text-sm mx-4 lg:text-lg lg:leading-7"
          >
            Na nasze piękno wpływa nie tylko wygląd zewnętrzny ale również
            samopoczucie, emocje, styl życia, zdrowa dieta. W myśl tego w swoim
            gabinecie zapewniam pielęgnację dobraną do potrzeb twojej skóry,
            dobrą atmosferę i kojący klimat co wpływa zarówno na ciało jak i
            ducha.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

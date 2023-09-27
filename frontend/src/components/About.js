import AboutImage from "../images/facial.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section className="flex relative flex-col text-[#FBF0B0]" id="about">
      <img
        className="opacity-90 h-[100vh] object-cover object-top lg:h-[100vh]"
        src={AboutImage}
        alt="Massage"
      />
      <div className="text-center absolute bg-gray-600/60 pt-24 h-full w-full flex">
        <div className="my-auto lg:w-[60%] lg:mx-auto">
          <motion.h1
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center text-4xl lg:text-5xl my-5 font-['Playfair_Display']"
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
          <a href="#services"><motion.button
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-[#96939B] text-[#080F29] mt-10 w-48 p-4 mx-auto hover:bg-[#727272] transition-all duration-300 ease-in"
          >
            Dowiedz się więcej
          </motion.button></a>
        </div>
      </div>
    </section>
  );
};

export default About;

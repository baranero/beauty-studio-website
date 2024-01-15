import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      variants={fadeIn(0.3)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      className="bg-[#f2f0f2] text-[#10152b] py-6 lg:pb-0"
      id="about-me"
    >
      <h3 className="text-center text-3xl my-5 font-['Playfair_Display']">
        Umów się na wizytę
      </h3>
      <div className="w-[75%] mx-auto mt-8 flex flex-col lg:flex-row justify-around">
        <div>
          <h4 className="">Numer telefonu</h4>
          <p className="my-4 text-lg font-bold">+48 605 332 652</p>
        </div>
        <div>
          <h4 className="">Adres</h4>
          <p className="mt-4 text-lg font-bold">ul. Owsiana 18A/41</p>
          <p className="mb-4 text-lg font-bold">62-800 Kalisz</p>
        </div>
      </div>
      <iframe
        title="map"
        className="hidden lg:block"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9876.559288569932!2d18.115021!3d51.767051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ac5f382ce548d%3A0x16f2b1fe00700c41!2sAgnieszka%20Wr%C3%B3bel%20Kosmetolog!5e0!3m2!1spl!2spl!4v1691408802509!5m2!1spl!2spl"
        width="100%"
        height="550"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.section>
  );
};

export default Contact;

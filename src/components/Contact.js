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
      className="bg-[#343A56] py-6 lg:pb-0"
      id="about-me"
    >
      <h3 className="text-center text-3xl my-5 font-['Playfair_Display']">
        Umów się na wizytę
      </h3>
      <div className="w-[75%] mx-auto mt-8 flex flex-col lg:flex-row justify-around">
        <div>
          <h4 className="text-[#FBF0B0]">Numer telefonu</h4>
          <p className="my-4 text-lg font-bold">+48 605 332 652</p>
        </div>
        <div>
          <h4 className="text-[#FBF0B0]">Email</h4>
          <p className="my-4 text-lg font-bold">agnieszkawrobel7@o2.pl</p>
        </div>
        <div>
          <h4 className="text-[#FBF0B0]">Adres</h4>
          <p className="mt-4 text-lg font-bold">ul. Owsiana 18A/41</p>
          <p className="mb-4 text-lg font-bold">62-800 Kalisz</p>
        </div>
      </div>
      <iframe
        title="map"
        className="hidden lg:block"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.1382308629354!2d18.1124331770328!3d51.76708009169923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ac5a80e16a8d7%3A0xbcb723c5e9eb9a41!2sOwsiana%2018a%2F41%2C%2062-800%20Kalisz!5e0!3m2!1spl!2spl!4v1689108825713!5m2!1spl!2spl"
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

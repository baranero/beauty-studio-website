import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const ServiceCategoryCard = (props) => {
  return (
    <motion.div
    ref={props.ref}
      variants={fadeIn(0.3)}
      initial="hidden"
      animate={props.inView ? "show" : "hidden"}
      exit="hidden"
      className=" p-8 rounded-xl mx-4"
    >
      <div className="bg-[#080f29] p-3 rounded-xl">
        <img src={props.img} alt="Kobido" />
        <h3 className="text-xl my-6 ">{props.title}</h3>
      </div>
      <p className="text-justify text-[#10152b] mt-6">{props.description}</p>
      <Link to={props.path}>
        <button className="bg-[#080f29] rounded-xl text-[#fbf0b0] mt-0 w-48 p-4 mx-auto hover:bg-[#727272] transition-all duration-300 ease-in">
          Sprawdź
        </button>
      </Link>
    </motion.div>
  );
};

export default ServiceCategoryCard;

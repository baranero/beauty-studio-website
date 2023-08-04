import { useCallback, useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import Logo from "../images/logo.png";
import MobileLogo from "../images/logo-logo.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible((prevVisible) => {
        const isScrollingUp = currentScrollPos < prevScrollPos;
        setPrevScrollPos(currentScrollPos);
        if (isScrollingUp) {
          return true;
        } else if (currentScrollPos <= 0) {
          return true;
        } else {
          return false;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <motion.section
      className={`flex lg:grid lg:grid-cols-3 lg:content-center z-10 w-full h-[15vh] bg-[#080F29] lg:h-[20vh] items-center justify-between px-6 py-4 ${
        visible
          ? "fixed top-0 transition-all duration-300 ease-in-out"
          : "fixed -top-full transition-all delay-75 ease-in-out"
      }`}
    >
      <motion.img
        variants={fadeIn(0.1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h-16 lg:hidden"
        src={MobileLogo}
        alt="Logo"
      />
      <motion.img
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h-28 mx-auto lg:col-start-2 lg:col-end-2 hidden lg:block"
        src={Logo}
        alt="Logo"
      />
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <HiMenu
          className={`transition-all lg:hidden hover:cursor-pointer hover:text-[#f7c31a] duration-300 ${
            showMobileMenu ? "rotate-180" : "rotate-0"
          }`}
          onClick={toggleMobileMenu}
          size={35}
        />
      </motion.div>
      <MobileMenu
        visible={showMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />
      <motion.ul
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" lg:col-start-3 row-start-1 text-2xl hidden lg:flex ml-auto lg:justify-between lg:mr-20 lg:w-64 lg:text-base"
      >
        <li>
          <a
            className="hover:text-[#ffffff] transition-all duration-300 cursor-pointer"
            href=""
          >
            Strona Główna
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#ffffff] transition-all duration-300 cursor-pointer"
            href=""
          >
            Usługi
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#ffffff] transition-all duration-300 cursor-pointer"
            href=""
          >
            Opinie
          </a>
        </li>
      </motion.ul>
    </motion.section>
  );
};

export default Header;

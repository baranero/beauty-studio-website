import { useCallback, useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import Logo from "../images/logo.png";
import MobileLogo from "../images/logo-logo.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { pathname } = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

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

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <motion.section
      className={`flex lg:grid lg:grid-cols-3 lg:content-center z-10 w-full h-[15vh] bg-[#080F29] lg:h-[20vh] items-center justify-between px-6 py-4 ${
        visible
          ? "fixed top-0 transition-all duration-300 ease-in-out"
          : "fixed -top-full transition-all delay-75 ease-in-out"
      }`}
    >
      <Link to="/">
        <motion.img
          variants={fadeIn(0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h-16 lg:hidden"
          src={MobileLogo}
          alt="Logo"
        />
      </Link>
      <Link to="/">
        <motion.img
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h-28 mx-auto lg:col-start-2 lg:col-end-2 hidden lg:block"
          src={Logo}
          alt="Logo"
        />
      </Link>
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
          <Link
            className="hover:text-[#ffffff] transition-all duration-300 cursor-pointer"
            to="/"
          >
            Strona Główna
          </Link>
        </li>
        <li className=""  onMouseLeave={handleMouseLeave}>
          <Link
          onMouseEnter={handleMouseEnter}
            className="hover:text-[#ffffff] transition-all duration-300 cursor-pointer group"
            to="/uslugi"
          >
            Usługi
          </Link>
          
            <div className={`${isDropdownVisible ? "opacity-100" : "opacity-0"} transition-all ease-in duration-300 absolute right-0 mr-10 bg-[#343A56]`}>
              <ul className="text-md leading-[3rem] cursor-default">
              <hr className=" border-[#FBF0B0]" />
                <Link className="cursor-auto" to="/uslugi/pielegnacja-dloni">
                  <li className={`hover:text-[#f7c31a] transition-all mx-6 duration-300 ${isDropdownVisible ? "cursor-pointer" : "cursor-default"}`} >Pielęgnacja dłoni</li>
                </Link>
                <hr className=" border-[#FBF0B0]" />
                <Link className="cursor-auto" to="/uslugi/pielegnacja-oczu">
                  <li className={`hover:text-[#f7c31a] transition-all mx-6 duration-300 ${isDropdownVisible ? "cursor-pointer" : "cursor-default"}`}>Pielęgnacja oprawy oczu</li>
                </Link>
                <hr className=" border-[#FBF0B0]" />
                <Link className="cursor-auto" to="/uslugi/pielegnacja-twarzy">
                  <li className={`hover:text-[#f7c31a] transition-all mx-6 duration-300 ${isDropdownVisible ? "cursor-pointer" : "cursor-default"}`}>Pielęgnacja i masaże twarzy</li>
                </Link>
                <hr className=" border-[#FBF0B0]" />
              </ul>
            </div>
          
        </li>
        <li>
          <Link
            className="hover:text-[#ffffff] transition-all duration-300 cursor-pointer"
            to="/opinie"
          >
            Opinie
          </Link>
        </li>
      </motion.ul>
    </motion.section>
  );
};

export default Header;

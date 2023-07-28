import { useCallback, useState, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import MobileMenu from './MobileMenu';

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <section
      className={`flex z-10 w-full h-[15vh] bg-[#080F29] lg:h-[20vh] items-center justify-between px-6 py-8 lg:py-14 ${
        visible ? 'fixed top-0 transition-all duration-300 ease-in-out' : 'fixed -top-full transition-all duration-300 ease-in-out'
      }`}
    >
      <img className="h-16 lg:hidden" src="./images/logo-logo.png" alt="Logo" />
      <img className="h-28 hidden lg:block lg:left-[50%] lg:right-[50%] -translate-x-[50%] lg:absolute" src="./images/logo.png" alt="Logo" />
      <HiMenu
        className={`transition-all lg:hidden hover:cursor-pointer hover:text-[#f7c31a] duration-300 ${
          showMobileMenu ? 'rotate-180' : 'rotate-0'
        }`}
        onClick={toggleMobileMenu}
        size={35}
      />
      <MobileMenu visible={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      <ul className="text-2xl hidden lg:flex ml-auto lg:justify-between lg:mr-20 lg:w-64 lg:text-base">
        <li><a className='hover:text-[#f7c31a] transition-all duration-300 cursor-pointer' href="">Strona Główna</a></li>
        <li><a className='hover:text-[#f7c31a] transition-all duration-300 cursor-pointer' href="">Usługi</a></li>
        <li><a className='hover:text-[#f7c31a] transition-all duration-300 cursor-pointer' href="">Opinie</a></li>
      </ul>
    </section>
  );
};

export default Header;

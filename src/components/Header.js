import { useCallback, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
    console.log("OK");
  }, [])

  return (
    <section className="flex items-center justify-between mx-6 my-8 lg:my-14">
      <img className="h-16 lg:hidden" src="./images/logo-logo.png" alt="Logo"/>
      <img className="h-24 hidden lg:block lg:absolute" src="./images/logo.png" alt="Logo"/>
      <HiMenu className={`transition lg:hidden hover:cursor-pointer hover:color-[#D1A617] ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`} onClick={toggleMobileMenu} size={35}/>
      <MobileMenu visible={showMobileMenu} toggleMobileMenu={toggleMobileMenu}/>
      <ul className="text-2xl hidden lg:flex lg:mx-auto lg:justify-between lg:w-64 lg:text-base">
        <li>
          Strona Główna
        </li>
        <li>
          Usługi
        </li>
        <li>
          Opinie
        </li>
      </ul>
    </section>
  )
}

export default Header
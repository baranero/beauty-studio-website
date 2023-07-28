import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className=" text-center p-5">
    <div className="flex justify-center mb-5">
        <a className="px-2" href="https://www.facebook.com/profile.php?id=100072379668074">
            <BsFacebook size={35}/>
        </a>
        <a className="px-2" href="https://www.instagram.com/agnieszka.wrobel_kosmetolog/">
            <BsInstagram size={35}/>
        </a>
    </div>
    <p>&copy;2023 | Wszystkie prawa zastrzeżone</p>
    <p className='text-sm mt-2 '>Projekt i wykonanie: <a className='hover:text-[#f7c31a] transition-all duration-300' href='https://jakubbaran.dev'>jakubbaran.dev</a></p>
</section>
  );
};

export default Footer;

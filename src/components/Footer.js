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
    <p>&copy;2023 | All rights reserved</p>
</section>
  );
};

export default Footer;

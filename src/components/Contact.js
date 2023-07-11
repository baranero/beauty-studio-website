const Contact = () => {
  return (
    <section className="bg-[#343A56] py-6 lg:pb-0" id="about-me">
      <h3 className="text-center text-3xl my-5 font-['Playfair_Display']">Umów się na wizytę</h3>
      <div className="ml-5 mt-8 flex justify-around ite">
        <div>
          <h4 className="text-[#FBF0B0]">Numer telefonu</h4>
          <p className="my-4 text-lg font-bold">+48 605 332 652</p>
        </div>
        <div>
          <h4 className="text-[#FBF0B0]">Adres</h4>
          <p className="mt-4 text-lg font-bold">ul. Owsiana 18A/41</p>
          <p className="mb-4 text-lg font-bold">62-800 Kalisz</p>
        </div>
      </div>
      <iframe className="hidden lg:block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.1382308629354!2d18.1124331770328!3d51.76708009169923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ac5a80e16a8d7%3A0xbcb723c5e9eb9a41!2sOwsiana%2018a%2F41%2C%2062-800%20Kalisz!5e0!3m2!1spl!2spl!4v1689108825713!5m2!1spl!2spl" width="100%" height="550"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
};

export default Contact;

import AboutImage from '../images/facial.jpg'

const About = () => {
  return (
    <section className="flex relative mt-[10vh] flex-col text-[#FBF0B0]" id="about">
      <img
        className="opacity-90 h-[50vh] object-cover object-top lg:h-[90vh]"
        src={AboutImage}
        alt="Massage"
      />
      <div className="text-center absolute bg-gray-600/60 h-full w-full flex">
        <div className="my-auto lg:w-[50%] lg:mx-auto">
          <h1 className="text-center text-4xl my-5 font-['Playfair_Display']">
            Piękno to moja pasja
          </h1>
          <p className="text-center text-sm mx-4 lg:text-base">
            Na nasze piękno wpływa nie tylko wygląd zewnętrzny ale również
            samopoczucie, emocje, styl życia, zdrowa dieta. W myśl tego w swoim
            gabinecie zapewniam pielęgnację dobraną do potrzeb twojej skóry,
            dobrą atmosferę i kojący klimat co wpływa zarówno na ciało jak i
            ducha.
          </p>
          <button className="bg-[#96939B] text-[#080F29] mt-10 w-48 p-4 mx-auto hover:bg-[#727272] delay-100 ease-in">
            <a href="#services">Dowiedz się więcej</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

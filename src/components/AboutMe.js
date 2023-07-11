const AboutMe = () => {
  return (
    <section className="pb-10" id="about-me">
            <img src="./images/bg.jpg" alt="Kobido massage"/>
      <h3 className="text-center text-3xl my-2 font-['Playfair_Display']">O mnie</h3>
      <hr className="mb-3 mx-auto w-1/2"/>
      <p className="text-center text-sm mx-4 md:text-base md:mx-16">
        Nazywam się Agnieszka Wróbel, jestem magistrem kosmetologii. Ukończyłam
        Wyższą Szkołę Fizjoterapii we Wrocławiu, Uniwersytet Medyczny w Łodzi
        oraz studia podyplomowe z psychodietetyki na Uniwersytecie SWPS we
        Wrocławiu. Od 15 lat pracuję z klientami dbając o ich skórę. 
      </p>
    </section>
  );
};

export default AboutMe;

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  // ------  INITIALIZE AOS  -------

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // ------  INITIALIZE AOS  -------

  return (
    <React.Fragment>
      <div id="page">
        <section id="portfolioTop">
          <h1>PORTFOLIO</h1>
          <div className="text-Top">
            <p data-aos="fade-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              debitis quo distinctio voluptatibus sint, corrupti, reiciendis
              quae ab, placeat atque dolorum consequatur! Voluptatem in qui
              porro voluptas sunt tenetur dicta consequatur perferendis! Nisi at
              ex ad ullam cumque praesentium maxime, quod sapiente, quaerat
              distinctio, vero itaque illo dolorem autem possimus?
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AboutContent;

import React, { useEffect } from "react";
import TextSvgImg from "../img/pol.webp";
import someImg from "../img/adam-peter-johnson_metalmagazine-1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeContent = () => {
  // ------  INITIALIZE AOS  -------

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // ------  INITIALIZE AOS  -------

  return (
    <React.Fragment>
      <div id="page">
        <section id="banner">
          <img data-aos="fade-down" src={TextSvgImg} alt="text img svg" />
        </section>
        <section id="HomeTop">
          <img
            data-aos="fade-down-right"
            src={someImg}
            className="box-img"
            alt="text img svg"
          />
          <h1 data-aos="slide-left">THIS_PAGE_IS*A*TEST</h1>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;

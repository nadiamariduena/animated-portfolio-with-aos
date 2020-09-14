import React, { Component } from "react";
import GalleryImg from "./GalleryImg";

export default class Portfolio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="page">
          <section id="portfolioTop">
            <h1>PORTFOLIO</h1>
            <div className="text-Top">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                debitis quo distinctio voluptatibus sint, corrupti, reiciendis
                quae ab, placeat atque dolorum consequatur! Voluptatem in qui
                porro voluptas sunt tenetur dicta consequatur perferendis! Nisi
                at ex ad ullam cumque praesentium maxime, quod sapiente, quaerat
                distinctio, vero itaque illo dolorem autem possimus?
              </p>
            </div>

            <GalleryImg />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

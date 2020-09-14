import React, { useEffect } from "react";
import Data from "../data.json";
import Aos from "aos";
import "aos/dist/aos.css";

const GalleryImg = () => {
  /*
    Dont forget that for this effect works, you have to have 2 divs without
    the:  data-aos="fade-down" , before the divs with the effect.
    
    Problem with this way is that of course due to the json file,
    i  will have reduced possibilities to reach all the images 
    in the way i could with the INTERSECTION OBSERVER, maybe by adding 
    an individual key could make the effect? Perhaps individual images 
    could work better 
    
    

            USING THE SIDE EFFECT more known as "useEffect" 
            which by the way is a HOOK

                There are two common kinds of side effects in React 
                components: those that don’t require cleanup, 
                and those that do. Let’s look at this distinction 
                in more detail.
                
                https://reactjs.org/docs/hooks-effect.html
    
    */
  // ------  INITIALIZE AOS  -------

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // ------  INITIALIZE AOS  -------

  return (
    <React.Fragment>
      <div className="container-images">
        {Data.map((imgItem, index) => {
          return (
            <div className="quote" key={imgItem.id}>
              <h3 data-aos="fade-down">{imgItem.name}</h3>
              <p data-aos="fade-down">{imgItem.city}</p>
              <img
                data-aos="fade-down"
                src={imgItem.img}
                className="img-box"
                alt={imgItem.alt}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default GalleryImg;

/*


   <React.Fragment>
      <div className="container-images">
        {Data.map((imgItem, index) => {
          return (
            <div className="quote" key={imgItem.id}>
              <h3>{imgItem.name}</h3>
              <p>{imgItem.city}</p>
              <img src={imgItem.img} className="img-box" alt={imgItem.alt} />
            </div>
          );
        })}
      </div>
    </React.Fragment>




--------------------

    THE OTHER WAY

    ----------------


  import React, { Component } from "react";
import Data from "../data.json";




class PostList extends Component {


  render() {
    return (


      <React.Fragment>
        <div className="middle-section">
          <h1>IMG json version 2</h1>
          <div className="container-images">
         


            {Data.map((postDetail, index) => {
                return (
                  <div className="quote" key={postDetail.id}>
                    <h4>{postDetail.name}</h4>
                    <p>{postDetail.content}</p>
                    <img src={postDetail.img} className="img-box" alt="images" />
                  </div>
                );
              })}
           
            </div>
          </div>
        </React.Fragment>


      );
    }
  }
  
  export default PostList;  

*/

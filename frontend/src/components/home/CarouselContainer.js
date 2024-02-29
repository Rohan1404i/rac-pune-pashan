import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselContainer.css";
import Img1 from "../../assets/carousel1.jpg";

function CarouselContainer() {
  return (
    // <div>
    //   <Carousel>
    //     <Carousel.Item>
    //       <img className="d-flex w-100 banner" src={Img1} alt="First slide" style={{width:"100%", height:"auto"}} />
    //       <img className="d-flex w-100 banner" src={Img1} alt="First slide" style={{width:"100%", height:"auto"}} />
    //       <img className="d-flex w-100 banner" src={Img1} alt="First slide" style={{width:"100%", height:"auto"}} />
    //     </Carousel.Item>
        
    //   </Carousel>
    // </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img className="d-flex w-100 banner" src={Img1} alt="First slide" style={{width:"100%", height:"auto"}} />
        </div>
        <div class="carousel-item">
          <img className="d-flex w-100 banner" src={Img1} alt="First slide" style={{width:"100%", height:"auto"}} />
        </div>
        <div class="carousel-item">
          <img className="d-flex w-100 banner" src={Img1} alt="First slide" style={{width:"100%", height:"auto"}} />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

  );
}

export default CarouselContainer;

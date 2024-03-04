import React from "react";
import { Carousel } from "react-bootstrap";
function CarouselComponent(props) {
  return (
    <Carousel fade className="">
      <Carousel.Item>
        <img src={props.img1} alt="img-fluid" style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.img2} alt="..." style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.img3} alt="..." style={{ width: "100%" }} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;

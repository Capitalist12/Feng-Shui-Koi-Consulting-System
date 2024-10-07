import React from "react";
import { Carousel, Image } from "antd";
// import '../style/Carousel.scss'

const contentStyle = {
  margin: 0,
  width: "100%",
  height: "500px",
  lineHeight: "100%",
  textAlign: "center",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle = {
  width: "100%",
  height: "500px",
  objectFit: "contain",
};

const ImageCarousel = ({ images }) => (
  <Carousel
    arrows
    infinite={false}
    draggable
    style={{ width: "100%" }}
    arrowSize={36}
  >
    {images &&
      images.length > 0 &&
      images.map((item, index) => {
        return (
          <div style={contentStyle} key={item.koiImageId || index}>
            <Image preview={false} style={imageStyle} src={item.imageURL} />
          </div>
        );
      })}
  </Carousel>
);
export default ImageCarousel;

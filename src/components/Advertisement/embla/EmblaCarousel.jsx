import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../../../styles/EmblaCarousel.scss";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const EmblaCarousel = ({ ads }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [scrollNext, setScrollNext] = useState(() => () => {});
  const [scrollPrev, setScrollPrev] = useState(() => () => {});

  useEffect(() => {
    if (emblaApi) {
      setScrollNext(() => emblaApi.scrollNext);
      setScrollPrev(() => emblaApi.scrollPrev);

      const intervalId = setInterval(() => {
        if (ads.length > 0) {
          emblaApi.scrollNext();
        }
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [emblaApi, ads.length]);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <div className="embla-ad">
      <div className="embla-ad__viewport" ref={emblaRef}>
        <div className="embla-ad__container">
          {ads.map((ad, index) => (
            <div className="embla-ad__slide" key={index}>
              <div className="embla-ad__slide__content">
                <img
                  className="embla-ad__slide__img"
                  src={ad.imagesAd[0]?.imageURL || ""}
                  alt={ad.title}
                />
                <div className="embla-ad__slide__info">
                  <h2>{ad.title}</h2>
                  <p>{truncateDescription(ad.description, 50)}</p>{" "}
                  <h4>Giá: {ad.price.toLocaleString()} đồng</h4>
                  <p className="embla-ad__slide__created-date">
                    Ngày đăng:{" "}
                    {new Date(ad.createdDate).toLocaleDateString("vi-VN")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla-ad__buttons">
        <button className="embla-ad__button" onClick={scrollPrev}>
          <FaAngleLeft />
        </button>
        <button className="embla-ad__button" onClick={scrollNext}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;

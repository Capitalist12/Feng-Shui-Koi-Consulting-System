import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../../../styles/EmblaCarousel.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const EmblaCarousel = ({ ads }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [scrollNext, setScrollNext] = useState(() => () => {});
  const [scrollPrev, setScrollPrev] = useState(() => () => {});

  // sort theo createdDate
  const sortedAds = ads.sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
  );

  useEffect(() => {
    if (emblaApi) {
      setScrollNext(() => emblaApi.scrollNext);
      setScrollPrev(() => emblaApi.scrollPrev);

      const intervalId = setInterval(() => {
        if (sortedAds.length > 0) {
          emblaApi.scrollNext();
        }
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [emblaApi, sortedAds.length]);

  const truncate = (data, maxLength) => {
    if (data.length > maxLength) {
      return data.slice(0, maxLength) + "...";
    }
    return data;
  };

  return (
    <div className="embla-ad">
      <div className="embla-ad__viewport" ref={emblaRef}>
        <div className="embla-ad__container">
          {sortedAds.map((ad, index) => (
            <div className="embla-ad__slide" key={index}>
              <div className="embla-ad__slide__content">
                <img
                  className="embla-ad__slide__img"
                  src={ad.imagesAd[0]?.imageURL || ""}
                  alt={ad.title}
                />
                <div className="embla-ad__slide__info">
                  <h2>Mệnh: {ad.element}</h2>
                  <h2>{truncate(ad.title, 30)}</h2>
                  <p className="ad-description">
                    {truncate(ad.description, 40)}
                  </p>
                  <h4 style={{ color: "green" }}>
                    Giá: {ad.price.toLocaleString()} đồng
                  </h4>
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
    </div>
  );
};

export default EmblaCarousel;

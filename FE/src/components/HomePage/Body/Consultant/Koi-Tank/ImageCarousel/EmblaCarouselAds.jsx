import React, { useEffect } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaCarouselSelectedSnapDisplay";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarouselAds = (props) => {
  const { options, adList, setAdInfo } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  // Cập nhật thông tin quảng cáo khi thay đổi slide
  useEffect(() => {
    if (adList && adList.length > 0) {
      setAdInfo(adList[selectedSnap]);
    }
  }, [selectedSnap]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {adList.map((item, index) => (
            <div
              className={`embla__slide ${
                selectedSnap === index ? "active" : ""
              }`}
              key={item.imagesAd[0]?.adImageId || index}
            >
              <img
                className="embla__slide__img"
                src={
                  item.imagesAd[0]?.imageURL ||
                  `https://picsum.photos/600/350?v=${index}`
                }
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  );
};

export default EmblaCarouselAds;

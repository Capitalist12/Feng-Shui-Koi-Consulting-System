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

const EmblaCarousel = (props) => {
  const { options, koiList, setKoiInfo } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  useEffect(() => {
    if (koiList && koiList.length > 0) {
      setKoiInfo(koiList[selectedSnap]);
    }
  }, [selectedSnap]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {koiList.map((item, index) => (
            <div
              className={`embla__slide ${
                selectedSnap === index ? "active" : ""
              }`}
              key={item.imagesFish[0]?.koiImageId || index}
            >
              <img
                className="embla__slide__img"
                src={
                  item.imagesFish[0]?.imageURL ||
                  `https://picsum.photos/600/350?v=${index}`
                }
                alt="Koi image"
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

export default EmblaCarousel;

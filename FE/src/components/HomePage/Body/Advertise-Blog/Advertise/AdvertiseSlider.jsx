import React, { useEffect, useState } from "react";
import AdvertiseCardItem from "./AdvertiseCardItem.jsx";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './AdvertiseSliderArrowButtons.jsx'
import useEmblaCarousel from 'embla-carousel-react'

import { getVerifiedAdvertise } from "../../../../../services/advertiseAPIService.js";
import { Badge } from "antd";
import { compareWithCurrentTime } from "../../../../../utils/helper.js";

export default function AdvertiseSlider() {
  const [advertise, setAdvertise] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center' });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const fetchAPI = async () => {
    const response = await getVerifiedAdvertise();
    response.status === 200 && response.data.code === 1000 ? setAdvertise(response.data.result) : setAdvertise([]);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
            (advertise && advertise.length > 0) &&
            advertise.map((item, index) => (
              <div key={index} className="embla__slide">
                {
                  compareWithCurrentTime(item.createdDate) ?
                    <Badge.Ribbon text="Mới nhất" color="red">

                      <AdvertiseCardItem data={item} />
                    </Badge.Ribbon>
                    :
                    <AdvertiseCardItem data={item} />
                }
              </div>
            ))
          }
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>


    </section>
  )
}

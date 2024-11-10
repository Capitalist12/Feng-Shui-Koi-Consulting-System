import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Title from "antd/es/typography/Title";
import ConsultantKoiSlider from "./Koi-Tank/ConsultantKoiSlider";
import { consultingKoi } from "../../../../services/consultingAPIService";
import { store } from "../../../../redux/store";
import ConsultantTank from "./Koi-Tank/ConsultantTank";

import ConsultantAdsSlider from "./Koi-Tank/ConsultantAdsSlider";
import { handleScroll } from "../../../../utils/helper";
import { getElement } from "../../../../utils/consultantElementHelper";
import ConsultantInfo from "./Information/ConsultantInfo";

const Consultant = (props) => {
  const [consultantKoiData, setConsultantKoiData] = useState([]);
  const { userElement } = props;
  const { dob, element } = userElement;

  const [displayElement, setDisplayElement] = useState(null);

  const getConsultantKoi = async () => {
    const response = await consultingKoi({
      username: store.getState()?.user?.username,
      dob: dob,
    });

    if (response.status === 200 && response.data.code === 1000) {
      setConsultantKoiData(response.data.result);
    } else {
      setConsultantKoiData([]);
    }
  };

  useEffect(() => {
    getConsultantKoi();
    handleScroll('consultant-section');
  }, [dob]);

  useEffect(() => {
    setDisplayElement(getElement(element.elementName));
    handleScroll('consultant-section');
  }, [element]);

  return (
    <section id="consultant-section">
      <Row>
        <Row className="consultant-item-row1">
          <Col className="col" span={24}>
            {displayElement  && (
              <>
                <div
                  className="element-image-container"
                  style={displayElement.style}
                >
                  <img src={displayElement.image} alt={displayElement.title} />
                </div>
                <Title level={2} style={{ color: "white" }}>
                  MỆNH {displayElement.title?.toUpperCase()}
                </Title>
              </>
            )}
          </Col>
        </Row>

        <ConsultantInfo generation={element.generation} inhibition={element.inhibition} mainElementInfo={displayElement} mainElementData={element}/>

        <ConsultantKoiSlider data={consultantKoiData} />

        {consultantKoiData.tankList?.length > 0 && (
          <ConsultantTank data={consultantKoiData} />
        )}
        {consultantKoiData.adList?.length > 0 && (
          <ConsultantAdsSlider data={consultantKoiData} />
        )}
      </Row>
    </section>
  );
};

export default Consultant;

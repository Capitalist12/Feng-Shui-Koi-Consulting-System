import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Title from "antd/es/typography/Title";
import ConsultantKoiSlider from "./Koi-Tank/ConsultantKoiSlider";
import { consultingKoi } from "../../../../services/consultingAPIService";
import { store } from "../../../../redux/store";
import ConsultantTank from "./Koi-Tank/ConsultantTank";

// Images
import FireElementImage from "../../../../assets/images/elements-image/fire.png";
import MetalElementImage from "../../../../assets/images/elements-image/metal.png";
import WaterElementImage from "../../../../assets/images/elements-image/water.png";
import EarthElementImage from "../../../../assets/images/elements-image/earth.png";
import WoodElementImage from "../../../../assets/images/elements-image/wood.png";
import ConsultantAdsSlider from "./Koi-Tank/ConsultantAdsSlider";
import { handleScroll } from "../../../../utils/helper";

const Consultant = (props) => {
  const [consultantKoiData, setConsultantKoiData] = useState([]);
  const { userElement } = props;
  const { dob, element } = userElement;

  const [displayElementTitle, setDisplayElementTitle] = useState(null);
  const [displayElementImage, setDisplayElementImage] = useState(null);
  const [displayElementStyle, setDisplayElementStyle] = useState({});

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
    switch (element.elementName) {
      case "Hỏa":
        setDisplayElementTitle("Hỏa");
        setDisplayElementImage(FireElementImage);
        setDisplayElementStyle({ boxShadow: "0 0 25px tomato" });
        break;
      case "Mộc":
        setDisplayElementTitle("Mộc");
        setDisplayElementImage(WoodElementImage);
        setDisplayElementStyle({ boxShadow: "0 0 25px #69db58" });
        break;
      case "Thủy":
        setDisplayElementTitle("Thủy");
        setDisplayElementImage(WaterElementImage);
        setDisplayElementStyle({ boxShadow: "0 0 25px #699dd5" });
        break;
      case "Kim":
        setDisplayElementTitle("Kim");
        setDisplayElementImage(MetalElementImage);
        setDisplayElementStyle({ boxShadow: "0 0 25px gray" });
        break;
      case "Thổ":
        setDisplayElementTitle("Thổ");
        setDisplayElementImage(EarthElementImage);
        setDisplayElementStyle({ boxShadow: "0 0 25px #e8ca49" });
        break;
      default:
        break;
    }
    handleScroll('consultant-section');
  }, [element]);

  return (
    <section id="consultant-section">
      <Row>
        <Row className="consultant-item-row1">
          <Col className="col" span={24}>
            {displayElementImage && displayElementTitle && (
              <>
                <div
                  className="element-image-container"
                  style={displayElementStyle}
                >
                  <img src={displayElementImage} alt={displayElementTitle} />
                </div>
                <Title level={2} style={{ color: "white" }}>
                  MỆNH {displayElementTitle?.toUpperCase()}
                </Title>
              </>
            )}
          </Col>
        </Row>

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
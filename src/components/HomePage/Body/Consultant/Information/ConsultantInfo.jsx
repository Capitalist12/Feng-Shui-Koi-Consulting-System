import { Divider, Flex } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { getElement } from "../../../../../utils/consultantElementHelper";
import { MdDoubleArrow } from "react-icons/md";
import "../../../../../styles/homepage/body/consultant/ConsultantElementInfo.scss";

const ConsultantInfo = ({ generation, inhibition, mainElementInfo, mainElementData }) => {
    const [displayGenerationElement, setDisplayGenerationElement] = useState(null);
    const [displayInhibitionElement, setDisplayInhibitionElement] = useState(null);
    const [elementInfoLine, setElementInfoLine] = useState([]);

    useEffect(() => {
        if (mainElementInfo) {
            setElementInfoLine(mainElementInfo.fengshui.split("\n"));
            console.log(elementInfoLine)
        }
    }, [mainElementInfo])

    useEffect(() => {
        setDisplayInhibitionElement(getElement(inhibition));
        setDisplayGenerationElement(getElement(generation));
    }, [generation, inhibition])

    return (
        <Flex vertical className="consultant-element-info">
            <Divider style={{ backgroundColor: '#262626' }} />
            {(displayGenerationElement && displayInhibitionElement) && (
                <Flex justify="space-evenly">
                    <Flex vertical align="center">
                        <Title level={2} style={{ color: "white" , margin: 0}}>
                            Tương sinh
                        </Title>
                        <Flex vertical align="center" className="generation-element">

                            <div
                                className="element-image-container"
                                style={displayGenerationElement.style}
                            >
                                <img src={displayGenerationElement.image} alt={displayGenerationElement.title} />
                            </div>
                            <Title level={3} style={{ color: "#5cb85c" }}>
                                {displayGenerationElement.title?.toUpperCase()}
                            </Title>
                            <MdDoubleArrow className="generation-arrow" />
                        </Flex>
                    </Flex>
                    <Flex vertical align="center">
                        <Title level={2} style={{ color: "white", margin: 0 }}>
                            Tương khắc
                        </Title>
                        <Flex vertical align="center" className="inhibition-element">
                            <div
                                className="element-image-container"
                                style={displayInhibitionElement.style}
                            >
                                <img src={displayInhibitionElement.image} alt={displayInhibitionElement.title} />
                            </div>
                            <Title level={3} style={{ color: "tomato" }}>
                                {displayInhibitionElement.title?.toUpperCase()}
                            </Title>
                            <MdDoubleArrow className="inhibition-arrow" />
                        </Flex>
                    </Flex>
                </Flex>
            )}
            <Flex vertical className="info-container">
                <Title level={1} style={{margin: 0}}>
                    {mainElementData.elementName} - {mainElementData.description}
                </Title>
                <Flex vertical>
                    <Title level={2} >
                        I. Về cuộc sống
                    </Title>
                    <Flex vertical>
                        <Title level={3}>
                            Tính cách người mệnh {mainElementData.elementName}
                        </Title>
                        <p>
                           - {mainElementInfo?.life?.character}
                        </p>
                    </Flex>
                    <Flex vertical>
                        <Title level={3}>
                        Mối quan hệ và tương khắc của người mệnh {mainElementData.elementName}
                        </Title>
                        <p>
                           - {mainElementInfo?.life?.generationAndInhibition}
                        </p>
                    </Flex>
                </Flex>
                <Flex vertical>
                    <Title level={2} >
                        II. Về phong thủy
                    </Title>
                    {elementInfoLine.length > 0 && elementInfoLine.map((item, index) => (
                        <p key={index}>
                           - {item}
                        </p>
                    ))}
                    <p >
                       - Số lượng cá Koi phù hợp trong hồ {mainElementData.quantity}
                    </p>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ConsultantInfo;
import React from "react";
import { Card, Spin } from "antd";

const AdList = ({ ads, loading }) => {
  if (loading) return <Spin />;

  return (
    <div className="ad-list">
      {ads.map((ad) => (
        <Card key={ad.adID} title={ad.title} style={{ marginBottom: "16px" }}>
          <p>{ad.description}</p>
          <p>Giá: {ad.price} VND</p>
          <img
            src={ad.imagesAd[0]?.imageURL}
            alt={ad.title}
            style={{ width: "100%" }}
          />
        </Card>
      ))}
    </div>
  );
};

export default AdList;

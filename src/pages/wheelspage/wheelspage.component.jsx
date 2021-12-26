import React from "react";
import { useParams } from "react-router-dom";
import "./wheelspage.styles.scss";

const WheelsPage = () => {
  let { userId } = useParams();
  console.log({ userId });
  return (
    <div className="wheelspage">
      <h1>WHEELS PAGE</h1>
      <span>{String(userId)}</span>
    </div>
  );
};

export default WheelsPage;

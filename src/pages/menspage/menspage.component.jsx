import React from "react";
import { useParams } from "react-router-dom";
import "./menspage.styles.scss";

const MensPage = () => {
  let { userId } = useParams();
  console.log({ userId });
  return (
    <div className="menspage">
      <h1>MENS PAGE</h1>
      <span>{String(userId || 0)}</span>
    </div>
  );
};

export default MensPage;

import React from "react";
import { useParams } from "react-router-dom";
import "./womenspage.styles.scss";

const WomensPage = () => {
  let { userId } = useParams();
  console.log({ userId });
  return (
    <div className="womenspage">
      <h1>WOMENS PAGE</h1>
      <span>{String(userId)}</span>
    </div>
  );
};

export default WomensPage;

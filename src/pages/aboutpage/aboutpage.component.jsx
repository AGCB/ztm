import React from "react";
import { useParams } from "react-router-dom";
import "./aboutpage.styles.scss";

const AboutPage = () => {
  let { userId } = useParams();
  console.log({ userId });
  return (
    <div className="aboutpage">
      <h1>ABOUT PAGE</h1>
      <span>{String(userId)}</span>
    </div>
  );
};

export default AboutPage;

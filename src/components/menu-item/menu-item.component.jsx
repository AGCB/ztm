import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

function MenuItem({ title }) {
  let navigate = useNavigate();
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <h1 onClick={() => navigate(`/${title}`)} className="subtitle">
          SHOP
        </h1>
      </div>
    </div>
  );
}
export default MenuItem;

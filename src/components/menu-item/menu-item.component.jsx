import React from "react";
import "./menu-item.styles.scss";
function MenuItem({ title }) {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <h1 className="subtitle">SHOP</h1>
      </div>
    </div>
  );
}
export default MenuItem;

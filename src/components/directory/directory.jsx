import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component.jsx";
import "./directory.styles.scss";

const defaultItems = [
  { id: 0, title: "womens" },
  { id: 1, title: "mens" },
  { id: 2, title: "wheels" },
  { id: 3, title: "womens" },
];
function Directory() {
  let [menuItems, setMenuItems] = useState(defaultItems);
  return (
    <>
      {menuItems.map(({ title, id }) => {
        return <MenuItem key={id} title={title} />;
      })}
    </>
  );
}
export default Directory;

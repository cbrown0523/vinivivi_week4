import React, { useState } from "react";
import Attribute from "./Attribute";
import App from "./App";
import BanList from "./BanList";
function Cat({ img, onClick, name, attribute }) {
  return (
    <div className="cat">
      <h3 className="catName"> {name}</h3>
      <div>
        {attribute && attribute.length > 0 ? (
          <li key={index}></li>
        ) : (
          <div>
            <Attribute attribute={attribute} />
          </div>
        )}

        <img style={{ width: "420px", height: "325px" }} src={img}></img>
        <button type="submit" onClick={onClick}>
          Discover!
        </button>
      </div>
    </div>
  );
}

export default Cat;

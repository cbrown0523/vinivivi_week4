import React from "react";

function Attribute({ attribute, onClick }) {
  const btnClick = () => {
    return <BanList attribute={cat} />;
  };
  return (
    <div>
      <button onClick={btnClick}>{attribute.name}</button>
      <button>{attribute.origin}</button>
      <button>{attribute.life_span} years</button>
    </div>
  );
}

export default Attribute;

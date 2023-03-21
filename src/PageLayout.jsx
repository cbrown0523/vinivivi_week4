import React from "react";
import Cat from "./Cat";
import BanList from "./BanList";
import CatHistory from "./CatHistory";
function PageLayout({ images, breed, origin, name, attr }) {
  return (
    <div>
      <CatHistory images={images} breed={breed} origin={origin} />
      <Cat
        onClick={makeQuery}
        img={currentImg}
        name={name}
        attr={attributes} /*value={v}*/
      />
    </div>
  );
}

export default PageLayout;

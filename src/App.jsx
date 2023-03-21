import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cat from "./Cat";
import BanList from "./BanList";
import CatHistory from "./CatHistory";
import Attribute from "./Attribute";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [currentImg, setCurrentImg] = useState(
    "https://th.bing.com/th/id/OIP.T-WFm9nZlWBNhobiobyK_AHaEK?pid=ImgDet&rs=1"
  );
  const [prevImages, setPrevImages] = useState([]);

  // const [name, setName] = useState("");
  // const [catBreed, setCatBreed] = useState("");
  // const [catOrigin, setCatOrigin] = useState("");
  // const [attributes, setAttributes] = useState({
  //   energy_level: "",
  //   country_code: "",
  //   grooming: "",
  //   life_span: "",
  //   origin: "",
  //   shedding_level: "",
  // });
  const [cat, setCat] = useState({});
  const makeQuery = () => {
    const query = `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${ACCESS_KEY}`;
    callApi(query);
  };

  const callApi = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    const newCat = { ...json[0].breeds[0] };

    setCat(newCat);

    // const newAttributes = {
    //   energy_level: json[0].breeds[0].energy_level,
    //   country_code: json[0].breeds[0].country_code,
    //   grooming: json[0].breeds[0].grooming,
    //   life_span: json[0].breeds[0].life_span,
    //   origin: json[0].breeds[0].origin,
    //   shedding_level: json[0].breeds[0].shedding_level,
    // };
    // setAttributes(newAttributes);
    const img = json[0].url;
    // const catName = json[0].breeds[0].id;
    // catName[0].toUpperCase();
    // const catBreed = json[0].breeds[0].name;
    // catBreed[0].toUpperCase();
    // const origin = json[0].breeds[0].origin;
    // origin[0].toUpperCase();
    // setCatOrigin(origin);
    // setCatBreed(catBreed);
    // setName(catName);
    // setCurrentImg(img);
    // const attr = json[0];
    setCurrentImg(img);
    setPrevImages((prev) => [...prev, img]);
  };

  return (
    <div className="container">
      <h1>Veni Vici!</h1>
      <h3>Discover Cats from your Wildest Dreams!</h3>
      <div className="layout">
        <div className="his">
          <CatHistory
            images={prevImages}
            breed={cat.name}
            origin={cat.origin}
          />
        </div>
        <div className="main">
          <Cat
            onClick={makeQuery}
            img={currentImg}
            name={cat.name}
            attribute={cat}
          />
        </div>
        <div className="ban">
          <BanList attribute={cat} />
        </div>
      </div>
    </div>
  );
}

export default App;

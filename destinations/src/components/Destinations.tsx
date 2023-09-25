import React, { useEffect, useState } from "react";
import Place from "./Place";

const Destinations: React.FC = () => {
  const [jsonData, setJsonData] = useState<Place[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/places")
      .then((res) => res.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="DestionatonWrap">
      {jsonData.map((place: Place) => (
        <Place
          key={place.id}
          id={place.id}
          place={place.place}
          desc={place.desc}
          img={place.img}
        />
      ))}
    </div>
  );
};

export default Destinations;

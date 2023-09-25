import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";
import { RestaurantCardType } from "../interfaces/interfaces";

export default function SupriseRestourant() {
  const { data } = useContext(RestaurantContext);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantCardType | null>(null);
  const navigate = useNavigate();

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomRestaurant = data[randomIndex];
    setSelectedRestaurant(randomRestaurant);
    navigate(`/restoranDetail/${randomRestaurant.id}`);
  };

  return (
    <div className="text-center border-bottom py-5">
      <h1 className="text-uppercase">Don't know what to eat?</h1>
      {selectedRestaurant ? (
        <div>
          <h2>Surprise Restaurant:</h2>
          <p>{selectedRestaurant.businessname}</p>
        </div>
      ) : (
        <button
          className="btn btn-block btn-success w-100"
          onClick={handleSurprise}
        >
          Surprise me!
        </button>
      )}
    </div>
  );
}

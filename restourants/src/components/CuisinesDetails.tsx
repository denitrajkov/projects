import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";
import RestourantCard from "./RestourantCard";

export default function CuisinesDetails() {
  const { restaurant } = useParams();
  const restaurantType = decodeURIComponent(restaurant!);

  const { data, calculateAverageRatings } = useContext(RestaurantContext);
  const filtered = data.filter(
    (rest) => rest.restauranttype === restaurantType
  );
  const rating = calculateAverageRatings(data);

  return (
    <div className="py-5 border-bottom">
      <h2 className="text-uppercase text-center">{restaurantType}</h2>
      <div className="flex">
        {filtered.map((restourant) => (
          <RestourantCard
            img={restourant.image}
            rating={rating.find((r) => r.id === restourant.id)?.rating || 0}
            key={restourant.id}
            {...restourant}
          />
        ))}
      </div>
    </div>
  );
}

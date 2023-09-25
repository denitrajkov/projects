import { useRestaurantContext } from "../context/RestaurantContext";
import RestourantCard from "./RestourantCard";

export default function AllRestaurants() {
  const { data, calculateAverageRatings } = useRestaurantContext();

  const rating = calculateAverageRatings(data);

  return (
    <div className="py-5 border-bottom">
      <h2 className="text-uppercase text-center">all restaurants</h2>
      <div className="flex">
        {data.map((restourant) => (
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

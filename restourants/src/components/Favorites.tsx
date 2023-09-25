import { useRestaurantContext } from "../context/RestaurantContext";
import RestourantCard from "./RestourantCard";

export default function Favorites() {
  const { favoriteRestaurants, calculateAverageRatings, data } =
    useRestaurantContext();

  const rating = calculateAverageRatings(data);

  return (
    <div>
      {favoriteRestaurants.map((restaurant) => (
        <RestourantCard
          key={restaurant.id}
          id={restaurant.id}
          img={restaurant.image}
          slug={restaurant.slug}
          restauranttype={restaurant.restauranttype}
          rating={rating.find((r) => r.id === restaurant.id)?.rating || 0}
          reviews={restaurant.reviews}
        />
      ))}
    </div>
  );
}

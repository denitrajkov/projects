import { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { RestaurantCardType } from "../interfaces/interfaces";
import RestourantCard from "./RestourantCard";

export default function PopularRestourants() {
  const { data, getAverageRating } = useContext(RestaurantContext);
  const [topRatedRestaurants, setTopRatedRestaurants] = useState<
    RestaurantCardType[]
  >([]);

  useEffect(() => {
    const sortedRestaurants = [...data].sort((a, b) => {
      const ratingA: any = getAverageRating(a.reviewsList);
      const ratingB: any = getAverageRating(b.reviewsList);
      return ratingB - ratingA;
    });

    const topRated = sortedRestaurants.slice(0, 10);
    setTopRatedRestaurants(topRated);
  }, [data, getAverageRating]);

  return (
    <div className="border-bottom py-4">
      <h2 className="text-uppercase text-center">
        our most popular restaurants
      </h2>
      <div className="flex">
        {topRatedRestaurants.map((restaurant) => (
          <RestourantCard
            img={restaurant.image}
            rating={getAverageRating(restaurant.reviewsList)}
            reviews={restaurant.reviews}
            slug={restaurant.slug}
            restauranttype={restaurant.restauranttype}
            key={restaurant.id}
            id={restaurant.id}
          />
        ))}
      </div>
    </div>
  );
}

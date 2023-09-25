import { createContext, useContext } from "react";
import { RestaurantValueTyype } from "./RestaurantProvider";

export const RestaurantContext = createContext<RestaurantValueTyype>({
  data: [],
  favoriteRestaurants: [],
  handleTypeRestaurant: () => {},
  handleFavoriteRestaurant: () => {},
  getAverageRating: (reviewsList: any[]) => {
    if (reviewsList.length === 0) return 0;
    const totalStars = reviewsList.reduce(
      (sum, review) => sum + review.stars,
      0
    );
    return totalStars / reviewsList.length;
  },
  setData: () => {},
  calculateAverageRatings: () => [],
});

export const useRestaurantContext = () => useContext(RestaurantContext);

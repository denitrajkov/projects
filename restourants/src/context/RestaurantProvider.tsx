import { useEffect, useState } from "react";
import { RestaurantContext } from "./RestaurantContext";
import { RestaurantCardType } from "../interfaces/interfaces";

type RestaurantProviderType = {
  children: React.ReactNode;
};

export type RestaurantValueTyype = {
  data: RestaurantCardType[];
  favoriteRestaurants: RestaurantCardType[];
  handleTypeRestaurant: (q: string) => void;
  handleFavoriteRestaurant: (id: string) => void;
  getAverageRating: (reviewsList: any[]) => number;
  setData: React.Dispatch<React.SetStateAction<RestaurantCardType[]>>;
  calculateAverageRatings: (data: RestaurantCardType[]) => RestaurantCardType[];
};

export const RestaurantProvider = ({ children }: RestaurantProviderType) => {
  const [data, setData] = useState<RestaurantCardType[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    RestaurantCardType[]
  >([]);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState<
    RestaurantCardType[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:5001/restaurants")
      .then((response) => response.json())
      .then((findresponse) => {
        setData(findresponse);
      });
  }, []);

  useEffect(() => {
    setFilteredRestaurants(data);
  }, [data]);
  useEffect(() => {
    const savedFavoriteRestaurants = localStorage.getItem(
      "favoriteRestaurants"
    );
    if (savedFavoriteRestaurants) {
      setFavoriteRestaurants(JSON.parse(savedFavoriteRestaurants));
    }
  }, []);
  useEffect(() => {
    saveFavoriteRestaurantsToLocalStorage(favoriteRestaurants);
  }, [favoriteRestaurants]);

  const getAverageRating = (reviewsList: any[]) => {
    if (reviewsList.length === 0) return 0;
    const totalStars = reviewsList.reduce(
      (sum, review) => sum + review.stars,
      0
    );
    return totalStars / reviewsList.length;
  };

  function handleTypeRestaurant(e: string) {
    const filtered = data.filter((rest) => rest.restauranttype === e);
    setFilteredRestaurants(filtered);
  }

  function saveFavoriteRestaurantsToLocalStorage(
    restaurants: RestaurantCardType[]
  ) {
    localStorage.setItem("favoriteRestaurants", JSON.stringify(restaurants));
  }
  function calculateAverageRatings(data: RestaurantCardType[]) {
    return data.map((restaurant) => ({
      ...restaurant,
      rating: getAverageRating(restaurant.reviewsList),
    }));
  }

  function handleFavoriteRestaurant(id: string) {
    const restaurantToAdd = data.find((rest) => rest.id === id);
    if (restaurantToAdd) {
      const isAlreadyFavorite = favoriteRestaurants.some(
        (rest) => rest.id === id
      );

      if (isAlreadyFavorite) {
        setFavoriteRestaurants((prevFavoriteRestaurants) =>
          prevFavoriteRestaurants.filter((rest) => rest.id !== id)
        );
      } else {
        setFavoriteRestaurants((prevFavoriteRestaurants) => [
          ...prevFavoriteRestaurants,
          restaurantToAdd,
        ]);
      }

      saveFavoriteRestaurantsToLocalStorage([
        ...favoriteRestaurants,
        restaurantToAdd,
      ]);
    }
  }

  const restaurantValue: RestaurantValueTyype = {
    data,
    favoriteRestaurants,
    handleTypeRestaurant,
    getAverageRating,
    handleFavoriteRestaurant,
    setData,
    calculateAverageRatings,
  };

  return (
    <RestaurantContext.Provider value={restaurantValue}>
      {children}
    </RestaurantContext.Provider>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { useRestaurantContext } from "../context/RestaurantContext";

type Props = {
  id: string;
  img: string;
  slug: string;
  restauranttype: string;
  rating: number;
  reviews: number;
};

export default function RestourantCard({
  id,
  img,
  slug,
  restauranttype,
  rating,
  reviews,
}: Props) {
  const { handleFavoriteRestaurant, favoriteRestaurants, data } =
    useRestaurantContext();

  const isFavorite = favoriteRestaurants.some(
    (restaurant) => restaurant.id === id
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      handleFavoriteRestaurant(id);
    } else {
      handleFavoriteRestaurant(id);
    }
  };
  const restaurant = data.find((rest) => rest.id === id);
  const totalReviews = restaurant?.reviewsList.length || 0;

  return (
    <div className="res bg-color-card ">
      <Link to={`/restoranDetail/${id}`} className="text-decoration-none">
        <div className="picture image">
          <img src={img} alt={slug} className="img img-fluid" />
          <i
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
              event.preventDefault();

              handleToggleFavorite();
            }}
            className={`fa-heart fa-2x ${isFavorite ? "fas" : "far"}`}
          ></i>
        </div>
        <div className="p-3">
          <p className="text-bold m-0 f-20 black">{slug}</p>
          <p className="orange-color m-0">{restauranttype}</p>
          <p className="m-0 black">rating - {rating}</p>
          <p className="m-0 black">based on {totalReviews} reviews</p>
        </div>
      </Link>
    </div>
  );
}

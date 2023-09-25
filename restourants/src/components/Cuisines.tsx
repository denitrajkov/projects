import { Link } from "react-router-dom";
import { useRestaurantContext } from "../context/RestaurantContext";
import { RestaurantCardType } from "../interfaces/interfaces";

export default function Cuisines() {
  const { handleTypeRestaurant, data } = useRestaurantContext();

  const uniqueTypes: string[] = [];

  data.forEach((restaurant: RestaurantCardType) => {
    if (!uniqueTypes.includes(restaurant.restauranttype)) {
      uniqueTypes.push(restaurant.restauranttype);
    }
  });

  return (
    <div className="text-center py-5 border-bottom">
      <h2 className="text-uppercase">Cuisines</h2>
      {uniqueTypes.map((restaurantType) => (
        <Link
          key={restaurantType}
          to={`/cuisinesDetail/${encodeURIComponent(restaurantType)}`}
        >
          <button
            key={restaurantType}
            className="btn btn-cuisines   ml-3"
            onClick={() => handleTypeRestaurant(restaurantType)}
          >
            {restaurantType}
          </button>
        </Link>
      ))}
    </div>
  );
}

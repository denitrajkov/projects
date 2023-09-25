import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";
import { RestaurantCardType } from "../interfaces/interfaces";

export default function RestoranDetail() {
  const { data, getAverageRating, setData, calculateAverageRatings } =
    useContext(RestaurantContext);
  const { id } = useParams();
  const [review, setReview] = useState({
    author: "",
    comment: "",
    stars: 1,
  });

  const rating = calculateAverageRatings(data);

  let restaurant: RestaurantCardType | undefined;
  restaurant = data.find((rest) => rest.id === id!);

  const handleSubmitReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      author: review.author,
      comment: review.comment,
      stars: review.stars,
    };

    try {
      const updatedData = data.map((restaurant) => {
        if (restaurant.id === id && restaurant.reviewsList) {
          const updatedReviews = [...restaurant.reviewsList, newReview];
          const averageRating = getAverageRating(updatedReviews);

          return {
            ...restaurant,
            reviewsList: updatedReviews,
            rating: averageRating,
          };
        }
        return restaurant;
      });

      const updatedRestaurant = updatedData.find(
        (restaurant) => restaurant.id === id
      );

      if (updatedRestaurant) {
        await fetch(`http://localhost:5001/restaurants/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRestaurant),
        });
      }

      setData(updatedData);
      setReview({
        author: "",
        comment: "",
        stars: 1,
      });
    } catch (error) {
      console.error("Error updating restaurant:", error);
    }
  };

  return (
    <div>
      <div className="my-5">
        <h4 className="text-center text-uppercase">
          {restaurant?.businessname}
        </h4>
        <img
          src={restaurant?.image}
          alt={restaurant?.businessname}
          className="w-100"
        />
        <div className="bg-color-card p-3 rounded-bottom">
          <p>
            rating - {rating.find((r) => r.id === restaurant!.id)?.rating || 0}
          </p>
          <p>based on {restaurant?.reviewsList?.length || 0} reviews</p>
          <p>{restaurant?.phone}</p>
          <p>{restaurant?.email}</p>
          <p>{restaurant?.address}</p>
          <p>
            {restaurant?.parkinglot
              ? "We have a parking lot waiting for you"
              : "No parking"}
          </p>
        </div>
      </div>
      <div className="my-5">
        <h4 className="text-center text-uppercase">Reviews</h4>
        {restaurant?.reviewsList.map((review) => (
          <div className="bg-color-card p-3 mb-3 rounded">
            <p>
              <strong>Author:</strong> {review.author}
            </p>
            <p>
              <strong>Message:</strong> {review.comment}
            </p>
            <p>
              <strong>Stars:</strong> {review.stars}
            </p>
          </div>
        ))}
      </div>

      <div className="my-5">
        <h4 className="text-center text-uppercase">Review Form</h4>
        <form onSubmit={handleSubmitReview}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={review.author}
              onChange={(e) => setReview({ ...review, author: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Comment</label>
            <input
              type="text"
              className="form-control"
              name="comment"
              value={review.comment}
              onChange={(e) =>
                setReview({ ...review, comment: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Stars</label>
            <input
              type="range"
              className="form-control-range"
              min={1}
              max={5}
              name="stars"
              value={review.stars}
              onChange={(e) =>
                setReview({ ...review, stars: Number(e.target.value) })
              }
            />
          </div>
          <button type="submit" className="btn btn-success btn-block w-100">
            Leave a review
          </button>
        </form>
      </div>
    </div>
  );
}

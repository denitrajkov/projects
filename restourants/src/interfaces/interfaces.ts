export interface RestaurantCardType {
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  rating?: number;
  reviewsList: ReviewsList[];
  isFavorite?: boolean;
}

export interface ReviewsList {
  id: number;
  author: string;
  comment: string;
  stars: number;
}

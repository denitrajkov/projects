export type BicycleType = {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
  [key: string]: any;
};

interface CardProps {
  bicycle: BicycleType;
}

export default function Card({ bicycle }: CardProps) {
  return (
    <div className="col-lg-4 col-6 mb-5">
      <a href="#" className="text-black">
        <div className="card  h-100">
          <div className="card-image-container">
            <img
              src={`/img/${bicycle.image}.png`}
              className="card-img-top img-fluid "
              alt={bicycle.name}
            />
          </div>
          <div className="card-body bg-active">
            <h5 className="card-title">{bicycle.name}</h5>
            <p className="card-text">{bicycle.price} $</p>
          </div>
        </div>
      </a>
    </div>
  );
}

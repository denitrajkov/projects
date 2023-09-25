import { Link } from "react-router-dom";

type Props = {
  img: string;
  name: string;
  id: number;
};

export default function ArtistItem({ img, name, id }: Props) {
  return (
    <Link to={`/artistDetails/${id}`} className="offset-lg-3 col-lg-6 py-2">
      <div className="d-flex  position-relative">
        <img src={img} alt={img} className="img-fluid" />
        <p className="m-0 p-1 position-absolute bg-color-span">{name}</p>
      </div>
    </Link>
  );
}

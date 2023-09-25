import { Link } from "react-router-dom";

type Props = { img: string; albumId?: string; artistId?: number };

export default function ArtistAlbumList({ img, albumId, artistId }: Props) {
  return (
    <Link
      to={`/artistDetails/${artistId}/${albumId}`}
      className="text-decoration-none col-lg-3 col-6 m-0 p-0"
    >
      <img src={img} className="img-fluid" />
    </Link>
  );
}

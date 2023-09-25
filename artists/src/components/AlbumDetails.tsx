import { useParams } from "react-router-dom";
import { ArtistType } from "../App";

type Props = {
  data: ArtistType[];
};

export default function AlbumDetails({ data }: Props) {
  const { id, albumId } = useParams();

  const foundArtist = data.find(
    (artist) => artist.id === (id ? parseInt(id) : undefined)
  );

  if (!foundArtist) {
    return <div>Artist not found...</div>;
  }

  const foundAlbum = foundArtist.albums.find(
    (album) => album.albumId === albumId
  );

  if (!foundAlbum) {
    return <div>Album not found...</div>;
  }

  return (
    <div className="text-center bg-color px-3 py-5">
      <img
        className="img-fluid w-50 mb-4"
        src={`/images/albums/${foundAlbum.cover}.jpg`}
        alt={foundAlbum.title}
      />
      <p>
        <b>Title:</b> {foundAlbum.title}
      </p>
      <p>
        <b>Year:</b> {foundAlbum.year}
      </p>
      <p>
        <b>Price:</b> {foundAlbum.price} $
      </p>
    </div>
  );
}

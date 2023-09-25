import { useParams } from "react-router-dom";
import { ArtistType } from "../App";
import ArtistAlbumList from "./ArtistAlbumList";

type Props = {
  data: ArtistType[];
};

export default function ArtistDetails({ data }: Props) {
  const { id } = useParams();

  let foundArtist: ArtistType | undefined;
  foundArtist = data?.find(
    (artist) => artist.id === (id ? parseInt(id) : undefined)
  );

  if (!foundArtist) {
    return <div>Artist not found...</div>;
  }

  return (
    <div className="bg-color py-5  col">
      <div className="text-center w-50 m-auto row">
        <img
          src={`/images/covers/${foundArtist.cover}.jpg`}
          alt={foundArtist.cover}
          className="img-fluid"
        />
        <h5>{foundArtist.name}</h5>
      </div>
      <div className="text-center row">
        <p>{foundArtist.bio}</p>
      </div>

      <div className="d-flex flex-wrap row px-4">
        {foundArtist &&
          foundArtist.albums.map((album) => (
            <ArtistAlbumList
              artistId={+(id ?? 1)}
              albumId={album.albumId}
              key={album.albumId}
              img={`/images/albums/${album.cover}.jpg`}
            ></ArtistAlbumList>
          ))}
      </div>
    </div>
  );
}

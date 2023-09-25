import { ArtistType } from "../App";
import ArtistItem from "./ArtistItem";

type Props = { data: ArtistType[] };

export default function ArtistList({ data }: Props) {
  return (
    <div className="row px-2 bg-color">
      {data.map((artist) => (
        <ArtistItem
          key={artist.id}
          img={`/images/covers/${artist.cover}.jpg `}
          name={artist.name}
          id={artist.id}
        />
      ))}
    </div>
  );
}

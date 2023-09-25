import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import artists from "../../db";
import "./App.css";
import ArtistDetails from "./components/ArtistDetails";
import ArtistList from "./components/ArtistList";
import NavBar from "./components/NavBar";
import AlbumDetails from "./components/AlbumDetails";

export type ArtistType = {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: {
    albumId: string;
    title: string;
    year: number;
    cover: string;
    price: number;
  }[];
};

function App() {
  const [data, setData] = useState<ArtistType[]>(artists);

  return (
    <>
      <NavBar
        title="music db"
        img="/images/raw/Girls-Listen-Music_0.jpg"
      ></NavBar>

      <div className="">
        <Routes>
          <Route path="/" element={<ArtistList data={data} />}></Route>
          <Route
            path="/artistDetails/:id"
            element={<ArtistDetails data={data} />}
          ></Route>
          <Route
            path="/artistDetails/:id/:albumId"
            element={<AlbumDetails data={data} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

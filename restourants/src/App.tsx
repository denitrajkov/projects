import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllRestaurants from "./components/AllRestaurants";
import Cuisines from "./components/Cuisines";
import CuisinesDetails from "./components/CuisinesDetails";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PopularRestourants from "./components/PopularRestourants";
import RestoranDetail from "./components/RestoranDetail";
import SupriseRestourant from "./components/SupriseRestourant";
import { RestaurantProvider } from "./context/RestaurantProvider";

const App = () => {
  return (
    <BrowserRouter>
      <RestaurantProvider>
        <div className="App container">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SupriseRestourant />
                  <PopularRestourants />
                  <Cuisines />
                  <AllRestaurants />
                </>
              }
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route
              path="/cuisinesDetail/:restaurant"
              element={<CuisinesDetails />}
            />

            <Route path="/restoranDetail/:id" element={<RestoranDetail />} />
          </Routes>
          <Footer />
        </div>
      </RestaurantProvider>
    </BrowserRouter>
  );
};

export default App;

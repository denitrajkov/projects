import Adventure from "./components/Adventure";
import Banner from "./components/Banner";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import "./css/main.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner/>
      <Adventure section="Latest"/>
      <Destinations/>
      <Adventure section="Related"/>
      <Footer/>
    </div>
  );
};

export default App;

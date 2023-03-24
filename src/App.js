import ImgCarusel from "./Components/Carusel/ImgCarusel";
import Destination from "./Components/Destination/Destination";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Select from "./Components/Selects/Select";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Select />
      <ImgCarusel />
      <Footer />
    </div>
  );
}

export default App;

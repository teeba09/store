import logo from "./logo.svg";
import "./App.css";
import Navbarr from "./components/Navbarr";
import Cover from "./components/Cover";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbarr />
        <Cover />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;

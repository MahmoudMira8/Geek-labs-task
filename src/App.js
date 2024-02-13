import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import CategoryList from "./components/categories/Categories.jsx";
import FilterSide from "./components/container/filterside/FilterSide.jsx";
import BodySide from "./components/container/body-side/BodySide.jsx";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#202020", height: "100vh" }}
    >
      <Navbar />
      <CategoryList />
      <div className="lower-part">
        <FilterSide />
        <BodySide />
      </div>
    </div>
  );
}

export default App;

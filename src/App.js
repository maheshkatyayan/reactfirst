import "./styles.css";
import Carousel from "./carousel";
import Textform from "./textform";
import Navbar from "./navbar";
import Dropdown from "./dropdown";

export default function App() {
  return (
    <>
      <Navbar />
      <Textform />
      <div className="container my-3" id="button1">
        <Carousel />
      </div>
      <div className="a ">
        <Dropdown className="b mx-4" />
        <button type="button" className="btn btn-dark mx-4">
          Dark
        </button>
      </div>
    </>
  );
}

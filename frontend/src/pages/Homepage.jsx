import Frontpage from "../assets/Frontpage.png";
import Homepage from "./Homepage.css";

function ImgDisplay() {
  return (
    <div className="img-container d-flex justify-content-center align-items-center">
      <img src={Frontpage} alt="Frontpage" className="frontpage-image" />
    </div>
  );
}

export default ImgDisplay;

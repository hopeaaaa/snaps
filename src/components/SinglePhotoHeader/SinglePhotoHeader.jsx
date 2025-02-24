import Arrow from "../../assets/icons/Arrow.svg";
import { Link } from "react-router-dom";
import "../SinglePhotoHeader/SinglePhotoHeader.scss";

function SinglePhotoHeader() {
  return (
    <header className="singlephotoheader">
      <nav className="singlephotoheader__container">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 className="singlephotoheader__title">Snaps</h1>
        </Link>
        <Link to="/" className="singlephotoheader__backcontainer">
          <img
            src={Arrow}
            alt="arrow icon"
            className="singlephotoheader__icon"
          />
          <h2 className="singlephotoheader__home">Home</h2>
        </Link>
      </nav>
    </header>
  );
}

export default SinglePhotoHeader;

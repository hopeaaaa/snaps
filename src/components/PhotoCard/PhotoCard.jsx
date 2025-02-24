import { Link } from "react-router-dom";
import "../PhotoCard/PhotoCard.scss";

const PhotoCard = ({ photo }) => {
  return (
    //<section className="photo__container">
    <div className="photo__card">
      <Link to={`photopage/${photo.id}`}>
        {" "}
        <img
          src={photo.photo}
          alt={photo.photoDescription}
          className="photo__img"
        />{" "}
      </Link>
      <div className="photo__info">
        <div className="photo__photographer">{photo.photographer}</div>
        <div className="photo__tag">
          {photo.tags.map((tag) => (
            <button key={tag} className="photo__btn">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
    //</section>
  );
};

export default PhotoCard;

import "../PhotoCard/PhotoCard.scss";

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo__container">
      <div className="photo__card">
        <img src={photo.photo} alt="photographs" className="photo__img" />
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
    </div>
  );
};

export default PhotoCard;

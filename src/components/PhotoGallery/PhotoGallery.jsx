import photosData from "../../data/photos.json";
import PhotoCard from "../PhotoCard/PhotoCard.jsx";
import "../PhotoGallery/PhotoGallery.jsx";

function PhotoGallery(props) {
  const filteredPhotos = props.activeFilter
    ? photosData.filter((photo) => photo.tags.includes(props.activeFilter))
    : photosData;

  return (
    <section className="gallery">
      {/* <h2 className="gallery__title">Photo Gallery</h2> */}
      {/* <p>{photosData[0].photo}</p> */}

      <div className="gallery__container">
        {filteredPhotos.map((photo) => {
          return (
            <PhotoCard key={photo.id} photo={photo} />
            /*             <div className="gallery__item">
              <img
                src={photo.photo}
                alt="photos"
                className="gallery__img"
                width="100px"
              />
            </div> */
          );
        })}
      </div>
    </section>
  );
}

export default PhotoGallery;

//import photosData from "../../data/photos.json";
import axios from "axios";
import PhotoCard from "../PhotoCard/PhotoCard.jsx";
import "../PhotoGallery/PhotoGallery.scss";
import { useEffect, useState } from "react";

function PhotoGallery(props) {
  const apiKey = "d1570477-4fa1-4479-83a7-a2a825650b15";
  const URL = "https://unit-3-project-c5faaab51857.herokuapp.com";

  //setting useState to [] bc its what we expect the data to return as
  const [photosData, setPhotosData] = useState([]);

  //async needs await
  //${} = string interpolation, how you put variable inside a string

  async function getAllPhotos() {
    try {
      const response = await axios.get(`${URL}/photos?api_key=${apiKey}`);
      setPhotosData(response.data);
    } catch (error) {}
  }

  //get request is 1 arguments, post is 2 arguments
  //axios.url(object, )

  //[] is where the dependencies would go, anytime the dependieces changes, the useeffect runs
  useEffect(() => {
    getAllPhotos();
  }, []);

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

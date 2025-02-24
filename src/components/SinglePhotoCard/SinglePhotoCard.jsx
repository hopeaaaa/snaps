import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../SinglePhotoCard/SinglePhotoCard.scss";
import like_Outline from "../../assets/icons/like_Outline.svg";

function SinglePhotoCard() {
  const [photo, setPhoto] = useState(null);
  const { photoId } = useParams();
  const apiKey = "d1570477-4fa1-4479-83a7-a2a825650b15";
  const URL = "https://unit-3-project-c5faaab51857.herokuapp.com";

  useEffect(() => {
    const loadPhoto = async () => {
      try {
        const response = await axios.get(
          `${URL}/photos/${photoId}?api_key=${apiKey}`
        );
        setPhoto(response.data);
      } catch (error) {
        console.log("Error fetching the photo:", error);
      }
    };

    if (photoId) {
      loadPhoto();
    }
  }, [photoId]);

  if (!photo) {
    return <p>Oh snap! Still loading...</p>;
  }

  const formattedDate = new Date(photo.timestamp).toLocaleDateString();

  return (
    <section className="singlephoto__section">
      <div className="singlephoto__card">
        <div className="singlephoto__photocontainer">
          <img
            src={photo.photo}
            alt={photo.photoDescription}
            className="singlephoto__img"
          />
        </div>
        <div className="singlephoto__info">
          <div className="singlephoto__tag">
            {photo.tags.map((tag) => (
              <button key={tag} className="singlephoto__tagbtn">
                {tag}
              </button>
            ))}{" "}
          </div>

          <div className="singlephoto__container">
            <div className="singlephoto__subcontainer">
              <div className="singlephoto__likescontainer">
                <img
                  src={like_Outline}
                  alt="heart icon"
                  className="singlephoto__icon"
                />
                <div className="singlephoto__likes">{photo.likes} likes </div>
              </div>
              <div className="singlephoto__photographer">
                Photo by {photo.photographer}
              </div>
            </div>
            <div className="singlephoto__timestamp">{formattedDate}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePhotoCard;

/* const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const { photoId } = useParams();
  const apiKey = "d1570477-4fa1-4479-83a7-a2a825650b15";
  const URL = "https://unit-3-project-c5faaab51857.herokuapp.com";

  useEffect(() => {
    //console.log("photoId:", photoId);
    const loadPhoto = async () => {
      try {
        const response = await axios.get(
          `${URL}/photos/${photoId}?api_key=${apiKey}`
        );
        setPhoto(response.data);

        const responseComments = await axios.get(
          `${URL}/photos/${photoId}/comments?api_key=${apiKey}`
        );
        setComments(responseComments.data);
      } catch (error) {
        console.log("Error fetching the photo:", error);
      }
    };

    if (photoId) {
      loadPhoto();
    }
  }, [photoId]);

  if (!photo) {
    return <p>Oh snap! Still loading...</p>;
  }

  const handleSubmit = () => {
    if (!author || !comment) return;

    axios
      .post(`${URL}/${photoId}/comments`, { author, comment })

      .then((response) => {
        setComments([]), setName("");
        setComment("");
      })
      .catch((error) => console.error("Error, try again", error));
  }; */

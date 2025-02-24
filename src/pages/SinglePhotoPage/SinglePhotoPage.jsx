import SinglePhotoHeader from "../../components/SinglePhotoHeader/SinglePhotoHeader";
import SinglePhotoCard from "../../components/SinglePhotoCard/SinglePhotoCard";
import Comments from "../../components/Comments/Comments";
import photoId from "../../components/PhotoCard/PhotoCard";
/* import { useEffect, useState } from "react"; */

function SinglePhotoPage() {
  /*   const apiKey = "d1570477-4fa1-4479-83a7-a2a825650b15";
  const URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const [photosData, setPhotosData] = useState([]);
  const [photoId, setPhotoId] = useState([]);

  async function getAllPhotos() {
    try {
      const response = await axios.get(`${URL}/photos?api_key=${apiKey}`);
      setPhotosData(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    getAllPhotos();
  }, [photoId]); */

  /*   async function getPhotoId() {
    try {
      const response = await axios.get(
        `${URL}/photos/${photoId}/comments?api_key=${apiKey}`
      );
      setPhotoId(response.data);
    } catch (error) {}
  } */

  return (
    <div>
      <SinglePhotoHeader />
      <SinglePhotoCard />
      <Comments photoId={photoId} />
    </div>
  );
}

export default SinglePhotoPage;

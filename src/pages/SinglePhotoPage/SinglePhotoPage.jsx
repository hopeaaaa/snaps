import SinglePhotoHeader from "../../components/SinglePhotoHeader/SinglePhotoHeader";
import SinglePhotoCard from "../../components/SinglePhotoCard/SinglePhotoCard";
import Comments from "../../components/Comments/Comments";
import { useParams } from "react-router-dom";

function SinglePhotoPage() {
  const { photoId } = useParams();

  return (
    <div>
      <SinglePhotoHeader />
      <SinglePhotoCard />
      <Comments photoId={photoId} />
    </div>
  );
}

export default SinglePhotoPage;

import { useState, useEffect } from "react";
import axios from "axios";
import "../Comments/Comments.scss";

function Comments({ photoId }) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState(""); //posting comments
  const [comments, setComments] = useState([]); //posted comments
  const apiKey = "d1570477-4fa1-4479-83a7-a2a825650b15";
  const URL = "https://unit-3-project-c5faaab51857.herokuapp.com";

  const handleAuthorName = (event) => {
    setAuthor(event.target.value);
  };
  const handleCommentText = (event) => {
    setComment(event.target.value);
  };

  const getComments = async () => {
    /* console.log("getComments"); */
    try {
      const responseComments = await axios.get(
        `${URL}/photos/${photoId}/comments?api_key=${apiKey}`
      );
      console.log(responseComments.data);
      setComments(responseComments.data);
    } catch (error) {}
  };

  useEffect(() => {
    getComments();
  }, [photoId]);

  async function postComment(newComment) {
    console.log("submitted comment:");
    try {
      await axios.post(
        `${URL}/photos/${photoId}/comments?api_key=${apiKey}`,
        newComment
      );
      getComments(); // Refresh comments after posting
    } catch (error) {
      console.log("Error posting comment:", error, error.stack);
    }
  }

  function handleCommentSubmit(event) {
    event.preventDefault();

    const isFormValid = author.length > 0 && comment.length > 0;
    if (!isFormValid) {
      alert("please fill out form");
      return;
    }
    const newComment = { name: author, comment: comment };
    postComment(newComment);
    setAuthor(""); // Clear form after submission
    setComment("");
    getComments();
  }

  /*   const filteredComments = photoId.Filter
    ? photoId.filter((photo) => photo.tags.includes(photoId.activeFilter))
    : photoId; */

  const filteredComments = comments.filter((comment) =>
    comment.tags.includes(props.activeFilter)
  );

  return (
    <section className="comments__section">
      <div className="comments__formcontainer">
        <form onSubmit={handleCommentSubmit} className="comments__form">
          <label className="comments__authorTitle" htmlFor="author">
            Name
          </label>
          <br />
          <input
            value={author}
            onChange={handleAuthorName}
            className="comments__authorInputField"
            type="text"
            id="author"
          />{" "}
          <br />
          <label className="comments__commentTitle" htmlFor="comment">
            Comment
          </label>{" "}
          <br />
          <textarea
            value={comment}
            onChange={handleCommentText}
            className="comments__commentInputField"
            type="text"
            id="comment"
          />{" "}
          <br />
          <button className="comments__btn">Submit</button>
        </form>
      </div>
      <div className="submittedComments__container">
        <div className="submittedComment__title">
          {comments.length} Comments
        </div>
        <div className="submittedComment__comments">
          {filteredComments.map((comment, index) => (
            <div key={index}>
              <strong>{comment.name}</strong>: {comment.comment}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comments;

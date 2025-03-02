import { useState, useEffect } from "react";
import axios from "axios";
import "../Comments/Comments.scss";

function Comments({ photoId }) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState(""); //posting comments
  const [comments, setComments] = useState([]); //posted comments
  const URL = "http://localhost:3000/photos";

  //buttons
  const handleAuthorName = (event) => {
    setAuthor(event.target.value);
  };
  const handleCommentText = (event) => {
    setComment(event.target.value);
  };

  //display intitial comments
  const getComments = async () => {
    console.log("getComments");
    try {
      const responseComments = await axios.get(`${URL}/${photoId}/comments`);
      console.log(responseComments.data);
      responseComments.data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      setComments(responseComments.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (!photoId) return;
    getComments();
  }, [photoId]);

  //submitted comments
  async function handleCommentSubmit(event) {
    event.preventDefault();

    const isFormValid = author.length > 0 && comment.length > 0;
    if (!isFormValid) {
      alert("please fill out form");
      return;
    }

    const newComment = { name: author, comment: comment };

    try {
      await axios.post(`${URL}/${photoId}/comments`, newComment);
      console.log("new comment");
      console.log(newComment);
      await getComments(); // Refresh comments after posting
      setAuthor(""); // Clear form after submission
      setComment("");
    } catch (error) {
      console.log("Error posting comment:", error, error.stack);
    }
  }

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
        <div className="submittedComments__title">
          {comments.length} Comments
        </div>
        <hr className="submittedComments__titleDivider" />
        <div className="submittedComments__comments">
          {comments.map((comment, index) => {
            const formattedDate = new Date(
              comment.timestamp
            ).toLocaleDateString();

            return (
              <div className="submittedComments__comment" key={index}>
                <div className="submittedComments__subcontainer">
                  <span className="submittedComments__comment-author">
                    {comment.name}
                  </span>
                  <span className="submittedComments__comment-date">
                    {formattedDate}
                  </span>
                </div>
                <span className="submittedComments__comment-text">
                  {comment.comment}
                </span>
                {index !== comments.length - 1 && (
                  <hr className="submittedComments__divider" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Comments;

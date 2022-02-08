import { useState, useEffect } from "react";
const SingleComment = ({ data }) => {
  const { text, id } = data;

  const [commentText, setCommentText] = useState("");
  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.taret.value);
  };

  return (
    <form className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <SocialPost />
      <SocialPost />
    </div>
  );
}

function SocialPost() {
  const [commentList, setCommentList] = useState([]);

  const [inputComment, setInputComment] = useState("");
  const updateInputComment = (e) => {
    setInputComment(e.target.value);
  };

  const addNewComment = () => {
    const newCommentList = [...commentList, inputComment];
    setCommentList(newCommentList);

    // Clear the input
    setInputComment("");
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-5 text-center mb-2">DELHI</h1>

      {commentList.map((item, index) => (
        <div key={index} className="bg-light p-1 mb-1">
          {item}
        </div>
      ))}

      <input
        type="text"
        value={inputComment}
        onChange={updateInputComment}
        className="form-control form-control-sm mb-1"
        placeholder="Add your comment..."
      />
      <input
        type="button"
        value="Submit"
        onClick={addNewComment}
        className="btn btn-sm alert-secondary w-100 mb-3"
      />
    </div>
  );
}

export default App;

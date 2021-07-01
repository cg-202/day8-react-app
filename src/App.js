import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <SocialPost />
      <SocialPost />
      <SocialPost />
      <SocialPost />
    </div>
  );
}

function SocialPost() {
  const [commentList, setCommentList] = useState([]);

  const addNewComment = () => {
    const newCommentList = ["This is new Comment", ...commentList];
    setCommentList(newCommentList);
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-5 text-center mb-2">DELHI</h1>

      {commentList.map((item, index) => (
        <div key={index} className="alert-secondary p-1 mb-1">
          {item}
        </div>
      ))}

      <input
        type="text"
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

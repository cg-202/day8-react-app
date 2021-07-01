import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [postList, setPostList] = useState([]);

  const [inputPost, setInputPost] = useState("");
  const updateInputPost = (e) => {
    setInputPost(e.target.value);
  };

  const addPostOnWall = () => {
    const newPostList = [inputPost, ...postList];
    setPostList(newPostList);
    setInputPost("");
  };

  return (
    <div>
      <div className="bg-dark p-5 mb-2">
        <input
          type="text"
          style={{ height: "75px" }}
          value={inputPost}
          onChange={updateInputPost}
          className="form-control form-control-lg mb-1"
          placeholder="Add new Post"
        />
        <input
          type="button"
          className="btn btn-secondary w-100"
          onClick={addPostOnWall}
          value="POST ON WALL"
        />
      </div>

      {postList.map((item, index) => (
        <SocialPost key={index} post={item} />
      ))}
    </div>
  );
}

function SocialPost({ post }) {
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
      <h1 className="bg-secondary text-light p-5 text-center mb-2">{post}</h1>

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

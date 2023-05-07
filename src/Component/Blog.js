import React from 'react';
import "./BlogPost.css";
import { useNavigate } from "react-router-dom";

function Blog(props) {
  const {id, imageUrl, date, time, title, description, author } = props;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/blogdetails/${id}`);
  }

  return (
<div className="blog-post" onClick={handleClick}>
      <div className="image-container">
        <img src={imageUrl} alt="Blog post" />
      </div>
      <div className="content-container">
        <div className="meta">
          <p className="date">{date} at {time}</p>
        </div>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <p className="author">Published by {author}</p>
      </div>
    </div>
  );
}

export default Blog;
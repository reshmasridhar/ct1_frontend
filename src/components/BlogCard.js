// BlogCard.js
import React from 'react';

const BlogCard = ({ imageUrl, title, description, date, author }) => {
  return (
    <div className="blog-card">
        <div className="card-image">
      <img src={imageUrl} alt={title} />
      </div>
      <div className="card-details">
      <p className="author">by {author}</p>
        <p className="date">{date}</p>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      
      <a href="/About">Learn More</a>
    </div>
  );
};

export default BlogCard;

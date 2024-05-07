import React from 'react';

const Post = ({ post }) => {
  const { id, title, body, imgSrc } = post;

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <img src={`https://picsum.photos/200?random=${id}`} alt={`Post ${id}`} />
    </div>
  );
};

export default Post;

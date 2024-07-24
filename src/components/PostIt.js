import React from 'react';
import '../Style/PostIt.css';

function PostIt({ titulo, descripcion, isImportant }) {
  return (
    <div className={`post-it ${isImportant ? 'important' : ''}`}>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

export default PostIt;
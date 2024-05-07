import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ItemDetail() {
  const { id } = useParams();
  const item = useSelector((state) => state.items.items.find((item) => item.id === parseInt(id)));

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default ItemDetail;

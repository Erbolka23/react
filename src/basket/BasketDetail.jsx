import React, { useContext } from 'react';
import { StoreContext } from '../context';
import { useParams } from 'react-router-dom';

function BasketDetail() {
  const { basket } = useContext(StoreContext);
  const { id } = useParams();

  const item = basket.find(b => b.id === Number(id));

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="container">
      <div className="page-wrapper">
        <h1>{item.title}</h1>
        <p><strong>Author:</strong> {item.author}</p>
      </div>
    </div>
  );
}

export default BasketDetail;

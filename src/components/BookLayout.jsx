import React from 'react';
import './BookLayout.css';

export const BookLayout = ({
  data: { title, description, author, oldPrice, price, img },
}) => {
  return (
    <div className='bookLayout'>
      <div className='bookCard'>
        <img src={img} alt='' width={300} />
        <h2>{title}</h2>
        <q>{author}</q>
        <div className='price'>
          <p className='price'>
            <i>{price}</i>
            <del>{oldPrice}</del>
          </p>
        </div>
        <p>{description}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

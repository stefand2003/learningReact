import React from 'react';
import { BookLayout } from './BookLayout';
import './BookLayout.css';

export const BookStore = () => {
  const books = [
    {
      title: 'Book 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam illo enim a culpa necessitatibus atque recusandae, temporibus cum excepturi askhdgkb lor sit amet consectetur adipisicing elit. Aliquam veniam illo enim a culpa necessitatibus atque recusandae, temporibus cum exceptur',
      author: 'John Doe III',
      oldPrice: '$40',
      price: '$20',
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198',
      id: 2,
    },
    {
      title: 'Book 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem molestias reprehenderit? Harum perspiciatis eum beatae cum quaerat possimus earum itaque cumque incidunt, dolorem exercitationem tempore dicta sint doloribus fugit ducimus officiis tempora facilis quis magni distinctio voluptatibus sunt vero?',
      author: 'John Doe',
      oldPrice: '$20',
      price: '$10',
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.jpg?ts=1698210220',
      id: 1,
    },
    {
      title: 'Book 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam illo enim a culpa necessitatibus atque recusandae, temporibus cum excepturi askhdgkb lor sit amet consectetur adipisicing elit. Aliquam veniam illo enim a culpa necessitatibus atque recusandae, temporibus cum exceptur',
      author: 'Maya Doe',
      oldPrice: '$50',
      price: '$30',
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/teal-and-orange-fantasy-book-cover-design-template-056106feb952bdfb7bfd16b4f9325c11.jpg?ts=1698543827',
      id: 3,
    },
    {
      title: 'Book 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem molestias reprehenderit? Harum perspiciatis eum beatae cum quaerat possimus earum itaque cumque incidunt, dolorem exercitationem tempore dicta sint doloribus fugit ducimus officiis tempora facilis quis magni distinctio voluptatibus sunt vero?',
      author: 'John Doe',
      oldPrice: '$20',
      price: '$10',
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.jpg?ts=1698210220',
      id: 4,
    },
    {
      title: 'Book 6',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam illo enim a culpa necessitatibus atque recusandae, temporibus cum excepturi askhdgkb lor sit amet consectetur adipisicing elit. Aliquam veniam illo enim a culpa necessitatibus atque recusandae, temporibus cum exceptur',
      author: 'Maya Doe',
      oldPrice: '$50',
      price: '$30',
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/teal-and-orange-fantasy-book-cover-design-template-056106feb952bdfb7bfd16b4f9325c11.jpg?ts=1698543827',
      id: 6,
    },
    {
      title: 'Book 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam illo enim a culpa necessitatibus atque recusandae, temporibus cum excepturi askhdgkb lor sit amet consectetur adipisicing elit. Aliquam veniam illo enim a culpa necessitatibus atque recusandae, temporibus cum exceptur',
      author: 'John Doe III',
      oldPrice: '$40',
      price: '$20',
      img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198',
      id: 5,
    },
  ];

  return (
    <div>
      <div className='bookStoreGrid'>
        {books.map((book) => {
          return <BookLayout key={book.id} data={book} />;
        })}
      </div>
    </div>
  );
};

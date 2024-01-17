import React from 'react';
import './Greeting.css';

const Greeting = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to the book store!</h1>

      <details>
        <summary style={{ cursor: 'pointer', userSelect: 'none' }}>
          About Us
        </summary>
        This bookstore is a great place to buy books. It was built in 1980. Ever
        since then it has been one of the best places to buy books. Both cheap
        and high quality.
      </details>
    </div>
  );
};

export default Greeting;

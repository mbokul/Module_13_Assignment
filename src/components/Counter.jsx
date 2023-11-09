import { useState, useEffect } from 'react';

const Counter = () => {
   const [count, setCount] = useState(0);

   const handleClick = () => {
      setCount(count + 1);
   };

   useEffect(() => alert('This alert is an effect of useState!'), []);

   return (
      <div>
         <h1>You Clicked {count} times</h1>
         <button onClick={handleClick}>Start Count</button>
      </div>
   );
};

export default Counter;

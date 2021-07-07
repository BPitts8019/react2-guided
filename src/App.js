import React, { useState } from "react";
import Heading from "./Heading";

function App() {
   const initialCount = 40;
   const [count, setCount] = useState(initialCount);

   return (
      <div>
         <Heading />
         <p>Current count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(initialCount)}>Reset</button>

         {count === 42 && (
            <p>
               You have found the answer to the ultimate question of life, the
               universe, and everything
            </p>
         )}
      </div>
   );
}

export default App;

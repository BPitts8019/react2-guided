import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";

function App() {
   const initialCount = 40;
   const [count, setCount] = useState(initialCount);

   return (
      <div>
         <Heading message="Hello World" />
         <Heading message="Hello Universe!" />

         <p>Current count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <Button label="Reset" cb={() => setCount(initialCount)} />

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

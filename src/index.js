import React, { useState } from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

function App() {
   const initialCount = 40;
   const [count, setCount] = useState(initialCount);

   // setTimeout(() => {
   //    setCount(20);
   //    console.log(`count: ${count}`);
   // }, 2000);

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
const container = document.getElementById("root");
// container.appendChild(Header());
ReactDOM.render(<App />, container);

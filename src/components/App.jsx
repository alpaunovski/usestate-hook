import React, { useState } from "react";


function App() {

//Destructuring the useState hook
const [count, setCount] = useState(0);

//Incrementing the count
function increase () {
  setCount(count + 1);
}

//Decrementing the count
function decrease () {
  setCount(count - 1);
}

return (

<div className="container">

<h1>{count}</h1>
<button onClick={decrease}>-</button>
<button onClick={increase}>+</button>

</div>
);

}
export default App;

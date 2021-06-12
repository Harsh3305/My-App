// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// function add() {
//   return (
//     <b1>
//       <h1>Hello $name</h1>
//     </b1>
//   );
// }

const Counter = () => {
  const [count, setCount] = useState(1);
  // const count = 1;
  console.log(count);
  console.log(setCount);
  const incrementCount = () => {
    setCount((count + 1) % 8);
  };

  return (
    <>
      <h1>Counter value is {count}</h1>
      <button onClick={incrementCount}> Increment</button>
    </>
  );
};

const Greeting = ({ name, age, ...rest }) => {
  console.log(rest);
  return (
    <>
      <h1>
        Welcome, {name} (your age is {age})
      </h1>
      <h3>by HRV</h3>
    </>
  );
};

function App() {
  return (
    <div>
      {/* <Greeting name="Alice" age={30} gender="f"></Greeting> */}
      <Counter></Counter>
    </div>
  );
}

export default App;

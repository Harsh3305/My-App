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
  // const [count, setCount] = useState(1);
  // const [count2, setCount2] = useState(1);
  // console.log("Count1 value", count);
  // // console.log(setCount);
  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // return (
  //   <>
  //     <h1>
  //       Counter1 value is {count} & Counter2 value is {count2}
  //     </h1>
  //     <button onClick={incrementCount}> Increment1</button>
  //     <button
  //       onClick={() => {
  //         setCount2(count2 + 1);
  //       }}
  //     >
  //       Increment2
  //     </button>
  //   </>
  // );

  const [count, setCount] = useState({ count1: 1, count2: 1 });

  console.log("Count1 value", count.count1);
  console.log("Count2 value", count.count2);
  // console.log(setCount);
  // const incrementCount1 = () => {
  //   setCount({ count1: count.count1 + 1, count2: count.count2 });
  // };
  // const incrementCount2 = () => {
  //   setCount({ count1: count.count1, count2: count.count2 + 1 });
  // };

  const incrementCount1 = () => {
    setCount({ ...count, count1: count.count1 + 1 });
  };
  const incrementCount2 = () => {
    setCount({ ...count, count2: count.count2 + 1 });
  };

  return (
    <>
      <h1>
        Counter1 value is {count.count1} & Counter2 value is {count.count2}
      </h1>
      <button onClick={incrementCount1}> Increment1</button>
      <p></p>
      <button onClick={incrementCount2}>Increment2</button>
    </>
  );
};

// const Greeting = ({ name, age, ...rest }) => {
//   console.log(rest);
//   return (
//     <>
//       <h1>
//         Welcome, {name} (your age is {age})
//       </h1>
//       <h3>by HRV</h3>
//     </>
//   );
// };

function App() {
  return (
    <div>
      {/* <Greeting name="Alice" age={30} gender="f"></Greeting> */}
      <Counter></Counter>
    </div>
  );
}

export default App;

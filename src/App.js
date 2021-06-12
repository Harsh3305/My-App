// import logo from "./logo.svg";
import "./App.css";

function add() {
  return (
    <b1>
      <h1>Hello $name</h1>
    </b1>
  );
}

const Greeting = (probs) => {
  console.log(probs);

  return (
    <h1>
      Welcome, {probs.name} (your age is {probs.age})
    </h1>
  );
};

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //     </header>
  //   </div>
  // );

  return (
    <div>
      <Greeting name="Alice" age={30}></Greeting>
    </div>
  );
}

export default App;

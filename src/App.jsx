import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="my-4">
        <Header/>
      </div>
      <Home></Home>
    </div>
  );
}

export default App;

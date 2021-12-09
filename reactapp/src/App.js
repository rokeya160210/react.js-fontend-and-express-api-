import logo from './logo.svg';
import './App.css';
import Quotes from "./Quotes";
import React, { useState } from 'react';
import Creation from "./create";
function App() {
  const [text, setText] = useState("settext");
  const [author, setAuthor] = useState("gettect");



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A simple React app.....
        </p>
        <Quotes />
        <Creation />

        {/* 
        <form action="../../post" method="post"
          className="form">
          <button type="submit">Connected?</button>
        </form> */}
      </header>
    </div>
  );
}

export default App;

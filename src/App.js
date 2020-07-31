import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <body className="body">
        <div className="main">
          <p>
            <strong> $ whoami </strong>
            <br></br>
            I'm a Seattle based software engineer building (and breaking) things at Amazon.
          </p>
          <p>
            In my free time I love getting outdoors, or kicking back with a book and a glass of scotch.
            Currently reading the Foundation Series by Isaac Asimov in preperation for the TV show next year.
          </p>
          <p>
            <strong>$ tree</strong>
            <ul>
              <li>
                Home
            </li>
              <li>
                Resume
            </li>
              <li>
                Github
            </li>
              <li>
                Keybase
            </li>
              <li>
                Contact
            </li>
            </ul>
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;

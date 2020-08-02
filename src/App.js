import React from 'react';
import './App.css';
import List from './List';


function App() {
  const items = [
    {
      text: "Github",
      link: "https://github.com/chriswr95"
    },
    {
      text: "Keybase",
      link: "https://keybase.io/chriswr"
    }
  ]
  return (
      <div className="App">
        <div className="main">
          <p>
            <strong> $ whoami </strong>
            <br></br>
            I'm a Seattle based software engineer building (and breaking) things at Amazon.
          </p>
          <p>
            In my free time I love getting outdoors. Mostly skiing in the winter, and hiking in the summer.
            I'm currently reading the Foundation Series by Isaac Asimov in preperation for the TV show next year.
          </p>
          <p>
            <strong>$ tree</strong>
          </p>
          <List items={items}/>
        </div>
      </div>
  );
}

export default App;

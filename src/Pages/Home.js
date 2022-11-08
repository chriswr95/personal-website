import React from 'react';
import '../App.css';
import Tree from '../Components/Tree';

function Home() {
  
  return (
      <div className="App">
        <div className="main">
          <p>
            <strong> $ whoami </strong>
            <br></br>
            I'm a Bay Area based software engineer building (and breaking) things at Twitter.
          </p>
          <p>
            In my free time I love getting outdoors. Mostly skiing, biking, and running.
            I'm currently reading the Foundation Series by Isaac Asimov in preperation for the AppleTV show.
            I also enjoying puttering around with crypto in my spare time.
          </p>
          <Tree />
        </div>
      </div>
  );
}

export default Home;

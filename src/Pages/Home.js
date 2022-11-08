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
            I'm a San Francisco based software engineer building (and breaking) things at Twitter.
          </p>
          <p>
            In my free time I love getting outdoors. Mostly skiing, biking, and running.
            I'm currently reading the Foundation Series by Isaac Asimov in preperation for the AppleTV show.
            I also enjoying puttering around with crypto in my spare time.
          </p>
          <p>
            I like to run and occasionally race official events. Here are the races I've run so far:
            <ul>
              <li> 2021 Portland Maraton - 4:06:36 </li>
              <li> 2022 New York Marathon - 5:07:08 (it was hot) </li>
            </ul>
          </p>
          <Tree />
        </div>
      </div>
  );
}

export default Home;

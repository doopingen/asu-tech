import React, { useState, useEffect } from 'react';
import Video from './components/VideoPlayback';
import Nav from './components/Nav'
import Data from './data.json';
import './App.css';

const navData = Data.nav

let currentScene;

const App = () => {
  const [scene, setScene] = useState(0);
  const [navOpts, setnavOptions] = useState({navData})

  const handleSceneChange = (e) => {
    switch (e.currentTarget.id) {
      case "start":
        setScene(1);
        break;
      case "health":
        setScene(2);
        break;
      case "planet":
        setScene(3);
        break;
      case "life":
        setScene(4);
        break;
    }
  }

  switch (scene) {
    case 0: //Home
      currentScene =
      <div className="container">
        <Video />
        <Nav navOpts={navOpts}/>
      </div>
      break;
  }
 
  return (
    <body>
      {currentScene}
    </body>
  )
}

export default App;

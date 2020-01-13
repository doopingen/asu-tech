import React, { useState } from 'react';
import Layout from './components/Layout'
import './App.css';

const App = () => {
  const [derp, derping] = useState("Handsome boy")
  
  return (
    <Layout derp={derp}/>
  )
}

export default App;

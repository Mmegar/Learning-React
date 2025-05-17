
import { Routes, Route, Link, useLocation } from 'react-router-dom'

import './App.css'

function Home() {
  const location = useLocation(); 

  return (
    <>

      <h1>Hello there, give likes and comments, im new to this video content stuff.</h1>

    </>
  );
}

export default Home;

import { Routes, Route, Link, useLocation } from 'react-router-dom'

import './App.css'

function Home() {
  const location = useLocation(); 

  return (
    <>

      <h1>Hello, this is the home page</h1>

    </>
  );
}

export default Home;

import { Routes, Route, Link, useLocation, NavLink } from 'react-router-dom'
import ProjectValentine from './projectvalentine'
import About from './about'
import './App.css'
import Home from './home'
import ExtendedNav from './extendednav.jsx'



function App() {
  const location = useLocation(); 
  let isValentine_page = location.pathname === "./valentine"

  return (
    <>
      <div>
        <nav className={`${isValentine_page ? 'nav-valentine' : ''}`}> 
          <ExtendedNav to="/" label="Home"> </ExtendedNav>
          <ExtendedNav to="/about" label="About"> </ExtendedNav>
          <ExtendedNav to="/valentine" label="Project Valentine"> </ExtendedNav>
        </nav>

        <Routes>
          <Route path= "/" element={<Home />}/> 
          <Route path="/valentine" element={<ProjectValentine />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
      </div>    
    </>
  );
}

export default App;
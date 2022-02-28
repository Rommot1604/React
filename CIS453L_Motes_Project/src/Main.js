import { Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './components/Home'
import { Stuff } from './components/Stuff'
import { Contact } from './components/Contact'
import { Social } from './components/Social'


function Main() {
  return (
    // To properly use the 'Router' component you must first
    // encompass each individual 'Route' with a 'Routes' component
    <div>
      <h1>Lowes</h1>
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/stuff">Tools</NavLink></li>
        <li><NavLink to="/contact">Links</NavLink></li>
        <li><NavLink to="/social">Social Media</NavLink></li>
      </ul>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/stuff' element={<Stuff />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/social' element={<Social />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Main;

import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { selectMenu } from "./features/menu/menuSlice";
import { useSelector } from "react-redux";

import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const toggle =()=>{
    const blur = document.getElementById("blur")
    blur.classList.toggle('active')
}

  const menus = useSelector(selectMenu)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleBtn =()=>{
    setMenuOpen(prevMenuOpen => !prevMenuOpen)
  }
  const value = menuOpen
  console.log(value)
  return (
    <div className="App" >
        <div id="blur">

          <Header 
          toggle = {toggle}
          menus = {menus}
          toggleBtn = {toggleBtn}
          menuOpen={menuOpen}
          />
          <Home />
        </div>
        <Sidebar
        toggle = {toggle}
        menus = {menus}
        toggleBtn = {toggleBtn}
        menuOpen={menuOpen} />

        
    </div>
  );
}

export default App;

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';

const App=()=> {

  const [pageSize] = useState(6);

  const [mode, setMode] = useState('light');


  const handleClick = () => {
    // console.log("Helo")
    if (mode === "light") {
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      setMode("dark");
    }
    else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#343a40";
      setMode("light");
    }
  }


    return (
      <div>

        <Router>
          <Navbar mode={mode} handleClick={handleClick} />
          <Routes>
            <Route exact path="/" element={<News key={'general'} pageSize={pageSize} category={'general'} mode={mode} />}></Route>
            <Route exact path="/business" element={<News key={'business'} pageSize={pageSize} category={'business'} mode={mode} />}></Route>
            <Route exact path="/entertainment" element={<News key={'entertainment'} pageSize={pageSize} category={'entertainment'} mode={mode} />}></Route>
            <Route exact path="/health" element={<News key={'health'} pageSize={pageSize} category={'health'} mode={mode} />}></Route>
            <Route exact path="/science" element={<News key={'science'} pageSize={pageSize} category={'science'} mode={mode} />}></Route>
            <Route exact path="/sports" element={<News key={'sports'} pageSize={pageSize} category={'sports'} mode={mode} />}></Route>
            <Route exact path="/technology" element={<News key={'technology'} pageSize={pageSize} category={'technology'} mode={mode} />}></Route>
          </Routes>
          <Footer mode={mode} />
        </Router>
      </div>
    )
  
}

export default App


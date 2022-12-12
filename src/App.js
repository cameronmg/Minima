import './App.css';
import {Navbar} from "./components/Navbar"
import {Banner} from "./components/Banner"
import {About} from "./components/About"
import {Product} from "./components/Product"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
          <Banner/>
          <About/>
          <Product/>  
    </Router>
  );
}

export default App;

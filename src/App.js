import './App.css';
import {Navbar} from "./components/Navbar"
import Banner from "./components/Banner"
import About from "./components/About"
import Mission from "./components/Mission"
import {Footer} from "./components/Footer"



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
          <Banner/>
          <About/>
          <Mission/>
          
      <Footer/>
    </Router>
  );
}

export default App;

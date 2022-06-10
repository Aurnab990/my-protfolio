
import './App.css';
import Header from './Components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './Components/Footer';

import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="bg-slate-800 App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;


import './App.css';
import Header from './Components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './Components/Footer';

import Home from './Components/Home';
import About from './Components/About';
import Books from './Components/Books';
import TeacherDetails from './Components/TeacherDetails';
import Contact from './Components/Contact';
import Rockpaper from './Components/Rockpaper';

function App() {
  return (
    <div className="bg-slate-800 App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/bookDetails' element={<Books></Books>}></Route>
        <Route path='/TeacherDetails' element={<TeacherDetails></TeacherDetails>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/rockpaper' element={<Rockpaper></Rockpaper>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

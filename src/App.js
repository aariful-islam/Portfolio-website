
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <Header/>
      <Routes>
    
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
       
      
    </Routes>
     
    </div>
  );
}

export default App;

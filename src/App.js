import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from "./components/Home"
import Nav from './components/Nav';


function App() {
  return (
    // <BrowserRouter>
    <>
      <div className="App">
        {/* <h1>wow</h1> */}
        <Nav/>
        {/* <Link to="/home">Go to home</Link> */}
      </div>
      <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path='/about' element={<About/>}/>
      </Routes>
      {/* </BrowserRouter> */}
    </>
    
    
  );
}

export default App;


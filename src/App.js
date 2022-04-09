import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/Home' element={<Home />} ></Route>
        <Route path='/About' element={<About />} ></Route>
        <Route path='/Cart' element={<Cart />} ></Route>
        <Route path='/Contacts' element={<Contacts />} ></Route>
        <Route path='/LogIn' element={<Login />} ></Route>
      </Routes>
    </div>
  );
}

export default App;

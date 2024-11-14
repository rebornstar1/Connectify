import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Test from './Pages/Test';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path = '/' element = {<Home/>}></Route>
            <Route path = '/test' element = {<Test/>}></Route>
            <Route path = '/flip' element = {<Home/>} ></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

import { Fragment } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Booking" />
      </Routes>
    </Fragment>
  );
}

export default App;

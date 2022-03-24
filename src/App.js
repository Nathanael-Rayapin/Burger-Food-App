import { Fragment } from 'react';
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';
import Register from './components/Register/register';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
}

export default App;

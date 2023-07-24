import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import MainPage from './Pages/MainPage/MainPage';
import Header from './Components/Header/Header';
import './App.scss';

/**
 * Settings for react-router-dom
 * @return {string}
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

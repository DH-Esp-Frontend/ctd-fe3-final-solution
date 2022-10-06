import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



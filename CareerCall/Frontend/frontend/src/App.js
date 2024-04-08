import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin, Signup, Home, NavBar, About, Contact } from './components';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import {Signin,Signup,Home} from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}>SignUp</Route>
        <Route path='/signin' element={<Signin />}>Login</Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

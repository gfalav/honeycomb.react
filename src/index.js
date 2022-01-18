import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './comps/auth/SignIn';
import SignUp from './comps/auth/SignUp';
import Home from './comps/Home';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={ <App /> }>
      <Route index element={<Home />} />
        <Route path="SignIn" element={ <SignIn /> } />
        <Route path="SignUp" element={ <SignUp /> } />
        <Route path="*" element={ <main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main> } />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import './App.css';
import Home from './home/Home';
import Header from './common/Header';
import Signup from './signup/Signup';
import Profile from './profile/Profile';
// import { Auth0Provider } from '@auth0/auth0-react';

import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    // <Auth0Provider 
    //   domain='http://localhost:3000'
    //   clientId={"1079690044277-den4kibmv1t7i58ohccqea1v0p3ehi6a.apps.googleusercontent.com"}
    //   redirectUri={window.location.origin}
    // >
      <BrowserRouter>
        <div className="App container mx-auto">
          <Header />

          <Routes>

            <Route path='/profile' element={<Profile/>} />

            <Route path='/signup' element={<Signup/>} />

            <Route path='/' element={<Home/>} />

          </Routes>

        </div>
      </BrowserRouter>
    /* </Auth0Provider> */
  );
}

export default App;

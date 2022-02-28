import React, { Component } from 'react'
import {useState, useEffect} from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./pages/home.jsx"
import Favorites from "./pages/favorites.jsx"

import Navbar from "./components/navbar.jsx"
import Footer from "./components/footer.jsx"

import {FavoriteContext} from './context/FavoriteContext.jsx'

function App() {
 
  const value = {
    city: city,
    setCity: setCity,
    favorites: favorites,
    setFavorites: setFavorites,
  };
    return (
      <FavoriteContext.Provider value={value}>
          <BrowserRouter>
          
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>

            <Switch>

              <Route exact path="/" component={Home}></Route>
              <Route exact path="/favorites" component={Favorites}></Route>

            </Switch>
          </BrowserRouter>
      </FavoriteContext.Provider>
    )
  }


export default App;

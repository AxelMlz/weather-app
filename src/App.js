import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Favorites from "./pages/favorites.jsx"
import Footer from "./components/footer.jsx"
import Navbar from "./components/navbar.jsx"
import Home from "./pages/home.jsx"
import {useState, useEffect} from "react";

function App() {
 
    return (
      <BrowserRouter>
      
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>

      <Switch>

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/favorites" component={Favorites}></Route>

      </Switch>
      </BrowserRouter>
    )
  }


export default App;

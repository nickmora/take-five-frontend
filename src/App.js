import React from 'react';
import './App.css';
import Welcome from "./_pages/Welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './_pages/Home';
import AboutMe from './_pages/AboutMe';
import Contact from './_pages/Contact';
import Services from './_pages/Services';
import Blog from './_pages/Blog';
import Recipes from './_pages/Recipes';
import Gallery from './_pages/Gallery';
import Menus from './_pages/Menus';
import { ThemeProvider } from "@material-ui/styles";
import mainTheme from "./styles/mainTheme";

function App() {
  return (
    <ThemeProvider theme = {mainTheme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about-me">
              <AboutMe />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/recipes">
              <Recipes />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/menus">
              <Menus />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

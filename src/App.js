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
import { Container } from "@material-ui/core";
import mainTheme from "./styles/mainTheme";
import mainStyle from "./styles/mainStyle";
import NavBar from './_components/NavBar';
import BlogPost from './_components/BlogPost';
import RecipePost from "./_components/RecipePost";
import TagList from './_pages/TagList';

function App() {
  const classes = mainStyle();
  return (
    <ThemeProvider theme={mainTheme}>
      <Container>
        <div className={classes.root + " App"}>
          <Router>
            <NavBar />
            <Switch>
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
              <Route path="/blog/:id" children={<BlogPost />} />
              <Route exact path="/recipes">
                <Recipes />
              </Route>
              <Route path="/recipes/:id" children={<RecipePost />} />
              <Route exact path="/gallery">
                <Gallery />
              </Route>
              <Route exact path="/menus">
                <Menus />
              </Route>
              <Route path = "/tagged/:tag" children = {<TagList />}></Route>
              <Route exact path="/">
                <Welcome />
              </Route>
            </Switch>
          </Router>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

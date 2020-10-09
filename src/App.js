import React from 'react';
import Index from './pages/index';
import About from './pages/about';
import Projects from './pages/projects';
import Blogs from './pages/blog';
import Contact from './pages/contact';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './css/Styles.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/projects/" component={Projects} />
          <Route exact path="/blog/" component={Blogs} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

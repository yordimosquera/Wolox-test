import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Login from './scenes/Login';
import TechList from './scenes/TechList';
import TechWrapper from './store/Technologies';

import './App.scss';

const App = () => (
  <React.Fragment>
    <TechWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/technologies" component={TechList} />
        <Route
          path="/twitter"
          render={() => (window.location = 'https://twitter.com/Wolox')}
        />
        <Route
          path="/wolox"
          render={() => (window.location = 'https://www.wolox.com.ar/')}
        />
      </Switch>
    </TechWrapper>
  </React.Fragment>
);

export default App;

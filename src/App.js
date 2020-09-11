import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Login from './scenes/Login';
import TechList from './scenes/TechList';
import TechWrapper from './store/Technologies';
import AuthWrapper from './store/Auth';
import PrivateRoute from './components/PrivateRoute';
import { ROUTES } from './constants';
import './App.scss';

const { LOGIN, TECHS } = ROUTES;

const App = () => (
  <React.Fragment>
    <AuthWrapper>
      <TechWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            path={LOGIN}
            component={TechList}
            defaultComponent={Login}
            redirectPath={TECHS}
          />
          <PrivateRoute
            path={TECHS}
            component={TechList}
            defaultComponent={Login}
          />
          <Route
            path="/twitter"
            render={() => (window.location = 'https://twitter.com/Wolox')}
          />
          <Route
            path="/wolox"
            render={() => (window.location = 'https://www.wolox.com.ar/')}
          />
          <Route component={Home} />
        </Switch>
      </TechWrapper>
    </AuthWrapper>
  </React.Fragment>
);

export default App;

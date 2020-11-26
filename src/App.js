import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import Home from './components/home/home';
class App extends React.Component {

  render() {
    const history = createBrowserHistory();
    return (
      <>
        <Router history={history}>
          <Switch>
            <Route path=''>
              <Home />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

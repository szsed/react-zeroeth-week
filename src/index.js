import React from 'react';
import ReactDOM from 'react-dom';
import AcornAppRedux from './AppRedux';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './Home';


ReactDOM.render(<Provider store={store} >
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/simple/states" component={AcornAppStates} /> */}
      <Route path="/simple/redux" component={AcornAppRedux} />
    </Switch>
  </BrowserRouter>
</Provider>,
  document.getElementById('root')
);

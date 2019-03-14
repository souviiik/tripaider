import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import ComingSoon from './components/coming-soon';
import App from './components/app';
import FindTrip from './components/find-trip';
import AddTrip from './components/add-trip';
import NoMatch from './components/no-match';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="hero is-fullheight">
        <Header />
        <Switch>
          <Route path="/add-trip" component={AddTrip} />
          <Route path="/find-trip" component={FindTrip} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
   <Route path="/coming-soon" component={ComingSoon} />
       <Route exact path="/" component={ComingSoon} />
          <Route path="*" component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'));

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
//you will need to import { BrowserRouter, Route, Switch } from react-router-dom
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//imports all components
import About from './components/About';
import Home from './components/Home';
import BaseLayout from './components/BaseLayout';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/About' component={About} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/' component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();

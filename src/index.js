import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';
//you will need to import { BrowserRouter, Route, Switch } from react-router-dom
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//imports all components
import Contact from './components/Contact';

import About from './components/About';
import References from './components/References';
import Portfolio from './components/Portfolio';
import Home from './components/Home';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/About' component={About} />
 <Route path="/Contact" component={Contact}/>
        <Route path="/References" component={References}/>
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/' component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();

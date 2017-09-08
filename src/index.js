import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
//you will need to import { BrowserRouter, Route, Switch } from react-router-dom
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//imports all components
import About from './components/About';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import References from './components/References';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/About' component={About} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/' component={Home} />
        <Route path="/Refrences" component={Refrences}/>
         <Route path="/Contact" component={Contact}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();

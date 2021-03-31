import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import MyGallery from '../src/pages/work/work';
import HomePage from './pages/home/home';


import Header from '../src/components/header/header.co';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route path='/work' component={MyGallery}/>
       </Switch>
      </div>
    </div>
  );
}

export default App;

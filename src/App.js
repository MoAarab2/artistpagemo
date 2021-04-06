import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Gallery from '../src/pages/work/work';
import HomePage from './pages/home/home';

import Footer from '../src/components/header/footer/footer';
import Header from '../src/components/header/header.co';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
       
      <Route exact path='/' component={HomePage}/>
      
       <Route exact path='/work' component={Gallery}/>
      
       </Switch>
      </div>
      <div>
         <Footer/>
      </div>     
    </div>
  );
}

export default App;

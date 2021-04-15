import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/nav/NavBar';
import Gallery from '../src/pages/work/work';
import HomePage from './pages/home/home';
import Draw from '../src/pages/draw/draw';
import Footer from '../src/components/footer/footer'
import SubscribePage from '../src/pages/contact/contact';
//import Header from '../src/components/header/header.co';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
       
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/work' component={Gallery}/>
      <Route exact path='/draw' component={Draw}/> 
      <Route exact path='/contact' component={SubscribePage}/> 
       </Switch>
      </div>
      <div>
         <Footer/>
      </div>     
    </div>
  );
}

export default App;

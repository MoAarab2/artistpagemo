import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/nav/NavBar';
import Gallery from '../src/pages/work/work';
import HomePage from './pages/home/home';
import Draw from '../src/pages/draw/draw';
import Footer from '../src/components/footer/footer'
import SubscribePage from '../src/pages/contact/contact';
import About from '../src/pages/about/about';
import Helmet from "react-helmet";

//import Header from '../src/components/header/header.co';



function App() {
  return (
    <div className="App">
    <Helmet>
    <meta
      name="description"
      content="Mo Arab artist page, for viewing my artworks"
    />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta itemprop="name" content="Mo Arab Art" />
    <meta
      itemprop="description"
      content="Mo Arab artist page, for viewing my artworks"
    />
    <meta
      itemprop="image"
      content="https://www.moarab.com/static/media/image1tum.63d31e08.jpg"
    />

    {/* <!-- Facebook Meta Tags --> */}
    <meta property="og:url" content="https://www.moarab.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Mo Arab Art" />
    <meta
      property="og:description"
      content="Mo Arab artist page, for viewing my artworks"
    />
    <meta
      property="og:image"
      content="https://www.moarab.com/static/media/image1tum.63d31e08.jpg"
    />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Mo Arab Art" />
    <meta
      name="twitter:description"
      content="Mo Arab artist page, for viewing my artworks"
    />
    <meta
      name="twitter:image"
      content="https://www.moarab.com/static/media/image1tum.63d31e08.jpg"
    />
    </Helmet>
      <Navbar />
     
      <div>
        <Switch>
       
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/work' component={Gallery}/>
      <Route exact path='/draw' component={Draw}/> 
      <Route exact path='/contact' component={SubscribePage}/> 
      <Route exact path='/About' component={About}/> 
     
       </Switch>
      </div>
      <div>
        <Footer/>
      </div>     
    </div>
  );
}

export default App;

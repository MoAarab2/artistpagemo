import React from 'react';

import {Link} from "react-router-dom";

//import Home from '../../pages/home/home';
import { ReactComponent as Logo } from '../../assets/logo-mo1.svg';

import './header.st.scss';

const Header = () => (
 
<div className='header'>
    <div className='logo-container'>
    <Link exact path to='/'>
      <Logo  />
    </Link>
    </div>
    <div className='options'>
      <div >
      <Link exact path to='/work' >
         PAINTINGS
      </Link> 
      </div>
      <div className='option' >
      <Link exact path to='/draw'>
        DRAWINGS
      </Link>
      </div>
      <div className='option'>
        ABOUT
      </div>
			<div className='option' >
        CV
      </div>
      <div className='option'>
        CONTACT
      </div>
    </div>
{/* <Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/work' component={Work}/>
</Switch> */}
  </div>

  
);

export default Header;
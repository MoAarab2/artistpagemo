import React from 'react';


import { ReactComponent as Logo } from '../../assets/logo-mo1.svg';

import './header.st.scss';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Logo  />
    </div>
    <div className='options'>
      <div className='option' >
        WORK
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
  </div>
);

export default Header;
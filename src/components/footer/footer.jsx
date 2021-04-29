import React from 'react';
import Facebook from '../icons/facebook';
import Instagram from '../icons/insta';

import './footer.scss';

const Footer = ()=>{
	return(
		<div className='footer-wrapper'>
		<footer className='footer-text'>
		© Copywrite {new Date().getFullYear()} <strong>Mo Arab</strong>, all rights reserved.	{"  "}
			<Facebook/>
			{"  "}
			<Instagram/>
			
		</footer>
		
		</div>
	)
}

export default Footer;
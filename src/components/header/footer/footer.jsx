import React from 'react';
//import { Route } from 'react-router-dom'

import Facebook from '../../icons/facebook';
import Instagram from '../../icons/insta';
import './footer.scss'


class Footer extends React.Component{
	render(props){
		return (

			<div className='content'>
					<footer className="footer">
      © Copywrite {new Date().getFullYear()} <strong>Mo Arab</strong>, all rights reserved.
			{"  "}
			<Facebook/>
			{"  "}
			<Instagram/>
			
    </footer>
			</div>		
		)
	}
}

export default Footer;
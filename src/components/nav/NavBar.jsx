
import React, { useState, useEffect } from "react";
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { CSSTransition } from "react-transition-group";

import {Link} from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/logo-mo1.svg';
import './NavBar.scss';



const NavBar = () => {
	const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };


	
		return ( 
			<div className='container'>
				<header className='Header'>

<div className='Logo-container'>
	<Link exact path to='/' className='Logo' >
		 <Logo   className='LogoInner'/>
	 </Link>
</div>
	 

	 <CSSTransition
				 in={!isSmallScreen || isNavVisible}
			 timeout={350}
			 classNames="NavAnimation"
			 unmountOnExit
	 >
		 
	 <nav className='Nav'>
				 <Link exact path to='/work' className='navLink'>
					 PAINTINGS
				 </Link>
				 
					 <Link exact path to='/draw' className='navLink'>
					 DRAWINGS
				 </Link>
				 
					 <Link exact path to='/' className='navLink'>
					 ABOUT
				 </Link>
				 
					 <Link exact path to='/contact' className='navLink'>
					 CONTACT
				 </Link>			
</nav>

	 </CSSTransition>
 

			 <button onClick={toggleNav} className='Burger'>
			 
				 <Menu/>
			 </button>

</header>
			</div>
			
		 );
	}

 
export default NavBar;
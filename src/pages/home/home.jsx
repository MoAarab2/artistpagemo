import React from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Anime from 'react-anime';

import './home.scss'

class HomePage extends React.Component{
	render(){
		return(
			<div className='home'>
				<Fade left delay={900}>
					<Pulse delay={1500}>
						<p className='title'>Mo<br/>Arab</p>
					</Pulse>
				</Fade>
		
				<Fade right>
					<div className='intro'>
					 <Anime opacity={[0, 1]} translateY={'1,5em'} delay={(e, i) => i * 1700}>
  <h1>Statement</h1><br/>
  <section>
    <p>My paintings are fragments of my imagination. Sometimes it is about the 
		reality and sometimes it is about fiction. </p>

    <p>	But whatever the subject is, the most important thing for me is that 
		the work can be recognized as one of mine.  </p>
		
    <p>At a time when we are being overwhelmed by images that are often a 
		reproduction of a reproduction, I will still try to be authentic as an artist.</p>
  </section>
</Anime>
   
				</div>
				</Fade>
				
			</div>
		)
	}
}

export default HomePage;
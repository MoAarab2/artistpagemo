import React from 'react';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import Anime from 'react-anime';

import './home.scss'

class HomePage extends React.Component{
	render(){
		return(
			<div className='home'>

			 <Fade left>
			 <HeadShake>
			 <div className='title-container'>
			 <h1 className='title'>
				MO<br />ARAB
				</h1>
				 </div>
				</HeadShake>
			 	</Fade>
				<Fade right>
					<div className='intro'>
					 <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
  <h1>Statement</h1>
  <section>
    <p>"Mijn schilderijen zijn fragmenten van mijn verbeeldingswereld. 
					Soms gaat het over het reële en anderzijds over fictie." </p>
    <p>"	Maar waar het ook over gaat het belangrijkste voor mij is dat het
					 werk te herkennen is als een werk van mij. In een tijd waarin we" </p>
    <p>"overspoeld worden door beelden die vaak een reproductie van een reproductie 
					 zijn probeer ik als kunstenaar toch authentiek te zijn."</p>
  </section>
</Anime>
   
				</div>
				</Fade>
				
			</div>
		)
	}
}

export default HomePage;
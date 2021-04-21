import React from 'react';
import Foto from '../../assets/pasfoto.png';

import './about.scss';

const About = () =>{
	return(
		<div className='about-container'>
<div className='col'>
	<img className='image-mo' alt='Foto of me' src={Foto}/>
</div>

<div className='col'>
	<h2 className='hoofd'>About</h2>
	<br/>
<p className='about-tekst'>My paintings are colorful and transparent, but also have a gloom. 
I find this contradiction interesting because the one does not exclude the other. 
A colorful painting does not have to be cheerful and vice versa. The story can be told in many ways, 
so I choose to leave the story to the viewer. I think that a painting should seek a personal
 bond with the person who looks at it. my paintings were initially about Moroccan youth hanging 
 in the street, but later I broadened this image by involving the entire multicultural society 
 in my work. The work is mainly dark or imaginative, but also portraits. I paint with thin layers
  of oil paint to create the atmosphere and to let the painting breathe. 
	I am not looking for a realistic looking appearance for my work. 
	For me it is more important that the work is recognized as one of mine.
</p>
</div>

<div className='col'> 
<ul className='ul-list'>
	<li><h2 className="hoofd">Mo Arab</h2></li>
<br/>
	<li><span className="bio">born 23 okt 1982 Lelystad</span></li>
	<li><span className="bio">lives and works in Lelystad</span></li>
	<br/>
	<li><span className="tussen">Education</span></li>

	<li><span className="bio">HKU (Hooge school voor de kunsten Utrecht) 2008/2012 Fine Art</span></li>
	<li><span className="bio">Media College Amsterdam 2003/2007 graphic-design</span></li>
	<br/>
	<li><span className="tussen">Exhibitions</span></li>

	<li><span className="jaar">2021</span></li>
	<li><span className="expo">Duo Expo, Galerie 23 Amsterdam</span></li>
	<li><span className="jaar">2021</span></li>
	<li><span className="expo">Henk, Logman</span></li>
	<li><span className="jaar">2020</span></li>
	<li><span className="expo">Different perspectives, Galerie 23 Amsterdam</span></li>
	<li><span className="jaar">2019</span></li>
	<li><span className="expo">Against the wall, Logman</span></li>
	<li><span className="jaar">2019</span></li>
	<li><span className="expo">Face off, Villa Mondiaan Winterswijk</span></li>
	<li><span className="jaar">2018</span></li>
	<li><span className="expo">Kunsten in huis, Lelystad</span></li>
	<li><span className="jaar">2017</span></li>
	<li><span className="expo">Koninklijke prijs voor de vrije schilderkunst, Paleis op de dam</span></li>
<li><span className="jaar">2017</span></li>
<li><span className="expo">De donkere wereld van Mo Arab, Galerie 23 Amsterdam</span></li>
<li><span className="jaar">2015</span></li>
<li><span className="expo">Eu parlement bibliotheek (Brussel)</span></li>
<li><span className="jaar">2015</span></li>
<li><span className="expo">The royals, Utrecht</span></li>
<li><span className="jaar">2015</span></li>
<li><span className="expo">Koninklijke prijs voor de vrije schilderkunst, Paleis op de dam</span></li>
<li><span className="jaar">2014</span></li>
<li><span className="expo">The Art of looking, Amsterdam</span></li>
<li><span className="jaar">2014</span></li>
<li><span className="expo">De kunst van ..., Arnhem</span></li>
<li><span className="jaar">2013</span></li>
<li><span className="expo">Jan Zumbrink, De vishal Haarlem</span></li>
<li><span className="jaar">2013</span></li>
<li><span className="expo">Re Rotterdam</span></li>
<li><span className="jaar">2012</span></li>
<li><span className="expo">Exposure (HKU graduation exhibition)</span></li>
<li><span className="jaar">2012</span></li>
<li><span className="expo">Conversation Pieces Academiegalerie, Utrecht (group exhibition)</span></li>
<li><span className="jaar">2011</span></li>
<li><span className="expo">Urban Spectator oud-postkantoor, Hilversum (group exhibition)</span></li>
<br/>
<li><span className="tussen">Awards</span></li>
<li><span classNAme="expo">Winner Jan Zumbrink Award</span></li>
<br/>
<li><span className="tussen">Publications</span></li>
<li><span className="expo">Africana.org</span></li>
<li><span className="expo">Kunst blijft een raadsel</span></li>
<br/>
<a className="a2" href="https://www.sbk.nl/index.php?r=site/page&view=expositie&id=248" >De donkere wereld van Mo Arab</a><br/>
<a className="a2" href="https://kunstblijfteenraadsel.nl/2019/10/30/mo-arab-galerie-logman" >Kunst blijft een raadsel</a>
<br/>
<br/>
<li><span className="tussen">Nominations</span></li>
<li><span className="expo">Koninklijke prijs voor de vrije schilderkunst 2015/2017</span></li>
</ul>
</div>
</div>


	)
}

export default About;
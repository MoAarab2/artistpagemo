import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 

function Instagram () {
 
    return (
      <a href="https://www.instagram.com/moarab.art/" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    );
  }

export default Instagram;
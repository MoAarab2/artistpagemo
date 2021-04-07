import React from 'react';
import Lightbox from 'react-lightbox-component';
import drawings from './draw.data';
import './draw.scss';
import 'react-lightbox-component/build/css/index.css';



function Draw() {
  return (
    <div className='Gallery'>
    <h1 className='title-paintings'>DRAWINGS</h1>
       <Lightbox
  images={drawings}
  thumbnailWidth='200px'
  thumbnailHeight='200px'/>
    </div>
  )
 

}

export default Draw;
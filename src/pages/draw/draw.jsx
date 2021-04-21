import React from 'react';
import Lightbox from 'react-lightbox-component';
import drawings from './draw.data';
import './draw.scss';
import 'react-lightbox-component/build/css/index.css';



function Draw() {
  return (
    <div className='Gallery'>
    <div className='title-wrap'>
       <h1 className='title-paintings'>DRAWINGS</h1>
    </div>
    <div className='image-container'>
          <Lightbox
  images={drawings}
  thumbnailWidth='200px'
  thumbnailHeight='200px'/>
    </div>
   </div>
  )
 

}

export default Draw;
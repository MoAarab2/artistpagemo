import React from 'react';
import Lightbox from 'react-lightbox-component';
import images from './images';
import './work.scss';
import 'react-lightbox-component/build/css/index.css';



function Gallery() {
  return (
    <div className='Gallery'>
    <h1 className='title-paintings'>PAINTINGS</h1>
       <Lightbox className='lightbox'
  images={images}
  thumbnailWidth='200px'
  thumbnailHeight='200px'/>
    </div>
  )
 

}

export default Gallery;




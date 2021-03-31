import React from 'react';

import './work.scss'

import images from './images'
import ImageGallery from 'react-image-gallery';



class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;
import React from 'react';

import './work.scss'

import img1 from '../../images/image1.jpg'

import img2 from '../../images/image2.jpg'
import img3 from '../../images/image3.jpg'
import img4 from '../../images/image4.jpg'
import img5 from '../../images/image5.jpg'
import img6 from '../../images/image6.jpg'
import img7 from '../../images/image7.jpg'
import img8 from '../../images/image8.jpg'
import img9 from '../../images/image9.jpg'
import img10 from '../../images/image10.jpg'
import img11 from '../../images/image11.jpg'
import img12 from '../../images/image12.jpg'
import img13 from '../../images/image13.jpg'
import img14 from '../../images/image14.jpg'
import img15 from '../../images/image15.jpg'
import img16 from '../../images/image16.jpg'
import img17 from '../../images/image17.jpg'
import img18 from '../../images/image18.jpg'
import img19 from '../../images/image19.jpg'
import img20 from '../../images/image20.jpg'
import img21 from '../../images/image21.jpg'
import img22 from '../../images/image22.gif'
import img23 from '../../images/image23.jpg'
import img25 from '../../images/image25.jpg'
import img26 from '../../images/image26.jpg'
import img27 from '../../images/image27.jpg'
import img29 from '../../images/image29.jpg'
import img30 from '../../images/image30.jpg'
import img31 from '../../images/image31.jpg'
import img32 from '../../images/image32.jpg'
import img33 from '../../images/image33.jpg'
import img34 from '../../images/image34.jpg'
import img35 from '../../images/image35.jpg'


import imgTum1 from '../../images/image1tum.jpg'
import imgTum2 from '../../images/image2tum.jpg'
import imgTum3 from '../../images/image3tum.jpg'
import imgTum4 from '../../images/image4tum.jpg'
import imgTum5 from '../../images/image5tum.jpg'
import imgTum6 from '../../images/image6tum.jpg'
import imgTum7 from '../../images/image7tum.jpg'
import imgTum8 from '../../images/image8tum.jpg'
import imgTum9 from '../../images/image9tum.jpg'
import imgTum10 from '../../images/image10tum.jpg'
import imgTum11 from '../../images/image11tum.jpg'
import imgTum12 from '../../images/image12tum.jpg'
import imgTum13 from '../../images/image13tum.jpg'
import imgTum14 from '../../images/image14tum.jpg'
import imgTum15 from '../../images/image15tum.jpg'
import imgTum16 from '../../images/image16tum.jpg'
import imgTum17 from '../../images/image17tum.jpg'
import imgTum18 from '../../images/image18tum.jpg'
import imgTum19 from '../../images/image19tum.jpg'
import imgTum20 from '../../images/image20tum.jpg'
import imgTum21 from '../../images/image21tum.jpg'
import imgTum22 from '../../images/image22tum.jpg'
import imgTum23 from '../../images/image23tum.jpg'
import imgTum25 from '../../images/image25tum.jpg'
import imgTum26 from '../../images/image26tum.jpg'
import imgTum27 from '../../images/image27tum.jpg'
import imgTum29 from '../../images/image29tum.jpg'
import imgTum30 from '../../images/image30tum.jpg'
import imgTum31 from '../../images/image31tum.jpg'
import imgTum32 from '../../images/image32tum.jpg'
import imgTum33 from '../../images/image33tum.jpg'
import imgTum34 from '../../images/image34tum.jpg'
import imgTum35 from '../../images/image35tum.jpg'



import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: img1,
    thumbnail: imgTum1,
  },
	{
    original: img2,
    thumbnail: imgTum2,
  },
	{
    original: img3,
    thumbnail: imgTum3,
  },
	{
    original: img4,
    thumbnail: imgTum4,
  },
	{
    original: img5,
    thumbnail: imgTum5,
  },
	{
    original: img6,
    thumbnail: imgTum6,
  },
	{
    original: img1,
    thumbnail: imgTum1,
  },
	{
    original: img7,
    thumbnail: imgTum7,
  },
	{
    original: img8,
    thumbnail: imgTum8,
  },
	{
    original: img9,
    thumbnail: imgTum9,
  },
	{
    original: img10,
    thumbnail: imgTum10,
  },
	{
    original: img11,
    thumbnail: imgTum11,
  },
	{
    original: img12,
    thumbnail: imgTum12,
  },
	{
    original: img13,
    thumbnail: imgTum13,
  },
	{
    original: img14,
    thumbnail: imgTum14,
  },
	{
    original: img15,
    thumbnail: imgTum15,
  },
	{
    original: img16,
    thumbnail: imgTum16,
  },
	{
    original: img17,
    thumbnail: imgTum17,
  },
	{
    original: img18,
    thumbnail: imgTum18,
  },
	{
    original: img19,
    thumbnail: imgTum19,
  },
	{
    original: img20,
    thumbnail: imgTum20,
  },
	{
    original: img21,
    thumbnail: imgTum21,
  },
	{
    original: img22,
    thumbnail: imgTum22,
  },
	{
    original: img23,
    thumbnail: imgTum23,
  },
	{
    original: img25,
    thumbnail: imgTum25,
  },
	{
    original: img26,
    thumbnail: imgTum26,
  },
	{
    original: img27,
    thumbnail: imgTum27,
  },
	{
    original: img29,
    thumbnail: imgTum29,
  },
	{
    original: img30,
    thumbnail: imgTum30,
  },
	{
    original: img31,
    thumbnail: imgTum31,
  },
	{
    original: img32,
    thumbnail: imgTum32,
  },
	{
    original: img33,
    thumbnail: imgTum33,
  },
	{
    original: img34,
    thumbnail: imgTum34,
  },
	{
    original: img35,
    thumbnail: imgTum35,
  },

];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery;
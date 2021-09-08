import React from 'react';
import ImageGallery from 'react-image-gallery';


const images = [
    {
        original: 'https://image.freepik.com/free-vector/hazelnut-chocolate-ad-with-milk-cocoa-flow-elements-brown-background-illustration_317442-43.jpg',
        thumbnail: 'https://image.freepik.com/free-vector/hazelnut-chocolate-ad-with-milk-cocoa-flow-elements-brown-background-illustration_317442-43.jpg',
      },
  {
    original: 'https://image.freepik.com/free-vector/hazelnut-chocolate-ad-with-milk-cocoa-flow-elements-brown-background-illustration_317442-44.jpg',
    thumbnail: 'https://image.freepik.com/free-vector/hazelnut-chocolate-ad-with-milk-cocoa-flow-elements-brown-background-illustration_317442-44.jpg',
  },
  
  {
    original: 'https://image.freepik.com/free-vector/chocolate-ice-bar-ad-with-chocolate-vortex-peanut-elements-orange-background-illustration_317442-75.jpg',
    thumbnail: 'https://image.freepik.com/free-vector/chocolate-ice-bar-ad-with-chocolate-vortex-peanut-elements-orange-background-illustration_317442-75.jpg',
  },
];

class Slider extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Slider;
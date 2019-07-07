import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
  render() {
    console.log(this.props.images);
    const images = this.props.images.map(image => {
      return <ImageCard image={image} key={image.id} />;
    });
    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;

import "./ImageList.css";
import React from "react";

class ImageList extends React.Component {
  render() {
    console.log(this.props.images);
    const images = this.props.images.map(({ description, id, urls }) => {
      return <img alt={description} key={id} src={urls.regular} />;
    });
    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;

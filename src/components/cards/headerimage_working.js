import React from 'react'

export function HeaderImage(props) {
  const images = require.context('../../assets/img', true);
  let imgsrc = images(`./${props.imageName}`);
  let newHeight = props.height;
  const cardImgStyle = {
    backgroundImage: `url(${imgsrc})`,
    height: newHeight
  };
  return (
    <div className="card-image" style={cardImgStyle}></div>
  )
}

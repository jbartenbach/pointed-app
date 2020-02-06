import React from 'react'

export function HeaderImage(props) {
  const images = require.context('../assets/img', true);
  let imgsrc = images(`./${props.imageName}`);
  const cardImgStyle = {
    backgroundImage: `url(${imgsrc})`
  };
  return (
    <div className="card-image" style={cardImgStyle}></div>
  )
}

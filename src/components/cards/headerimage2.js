import React from 'react'

export class HeaderImage2 extends React.Component {

  render() {
    if(this.props.imageName) {
      let newHeight = this.props.height;
      let corners = this.props.corners;
      let cardImgStyle = {backgroundImage: `url(http:${this.props.imageName.fields.file.url})`,
        height: newHeight,
        borderRadius: `${corners} ${corners} 0px 0px`
      };
      return (
        <div className="card-image" style={cardImgStyle}></div>
      )
    }
    else {
      return (
        <div className="card-no-image"></div>
      )
    }
  }
}

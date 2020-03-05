import React from 'react'

export class HeaderImage2 extends React.Component {

  render() {
    if(this.props.imageName) {
      let cardImgStyle = {backgroundImage: `url(http:${this.props.imageName.fields.file.url})`};
      return (
        <div className={`card-image ${this.props.isOpen && (' card-open')}`} style={cardImgStyle}></div>
      )
    }
    else {
      return (
        <div className="card-no-image"></div>
      )
    }
  }
}

import React from 'react'
import { HeaderImage2 } from './cards/headerimage2'
import RichTextToReact from 'rich-text-to-react';


export class StoryCard2 extends React.Component {

  constructor(props) {
    super(props)
    this.sectionRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  static defaultProps = {
    story: [
      {image: "none", label: "Short Story", title: "Story", author: "Anonymous", shortbody: "Click the card to read" }
    ]
  }

  state = {
    isOpen: false,
    imgHeight: '250px',
    mLeft: '0px',
    mRight: '0px',
    corners: '12px',
    topMargin: '32px',
    fullStory: false,
    header: 'none',
    onOff: 'block',
    scrollPos: 0,
    headerTitlePos: '-60px'
  }

  componentDidMount() {
    this.setState({scrollPos: this.sectionRef.current.offsetTop})
  }

  handleScroll = () => {
    let yPos = window.scrollY
    if(yPos < -30) {
      this.closeHandler()
    }
    else if (yPos > 500) {
        this.setState({ headerTitlePos: '0px'})
    } else {
      this.setState({ headerTitlePos: '-60px'})
    }
  }

  openHandler = () =>  {
    if(!this.state.isOpen) {
      this.setState({
        isOpen: true,
      })
      this.props.action(true)
      this.openCard()
    }
  }

  closeHandler = () =>  {
    if(this.state.isOpen) {
      this.setState({ isOpen: false })
      this.props.action(false)
      this.closeCard()
    }
  }

  openCard = () => {
    this.setState({
      imgHeight: '350px',
      mLeft: '-24px',
      mRight: '-24px',
      corners: '0px',
      topMargin: '0px',
      fullStory: true,
      header: 'inline'
    })
    window.scroll( {top: 0, left: 0})
    window.addEventListener('scroll', this.handleScroll);
  }

  closeCard = () => {
    this.setState({
      imgHeight: '250px',
      mLeft: '0px',
      mRight: '0px',
      corners: '12px',
      topMargin: '32px',
      fullStory: false,
      header: 'none'
    })
    window.scroll( {top: (this.state.scrollPos - 16), left: 0})
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { story } = this.props
    console.log('render storycard2 ' + story.author)
    let cardStyle = {
      marginLeft: this.state.mLeft,
      marginRight: this.state.mRight,
      borderRadius: this.state.corners,
      marginTop: this.state.topMargin,
    }
    if(this.props.parentHasOpen && !this.state.isOpen) {
      cardStyle = { display: 'none'}
    }
    return (
      <section className="card" style={cardStyle} onClick={this.openHandler} ref={this.sectionRef}>
        <HeaderImage2 imageName={story.image} height={this.state.imgHeight} corners={this.state.corners}/>
        <div className="card-text-container">
          <h6>{story.label}</h6>
          <h2>{story.title}</h2>
          <p className="card-author">By {story.author}</p>
          <div className="body-text">
            <RichTextToReact document={this.state.fullStory ? story.longbody : story.shortBody } />
          </div>
        </div>
        <div className="card-header" style={{display: this.state.header}}>
          <div className="title-bar" style={{top: this.state.headerTitlePos}}>{story.title}</div>
          <div className="close-btn" onClick={this.closeHandler}></div>
        </div>
      </section>
    )
  }

}

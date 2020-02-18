import React from 'react'
import { NoHeaderImage } from './cards/noheaderimage'
import { HeaderImage } from './cards/headerimage'
import ReactMarkdown from 'react-markdown'


export class StoryCard extends React.Component {

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
    bodyText: this.props.story.shortbody,
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
    console.log("hi " + yPos)
    if(yPos < -30) {
      console.log("close it")
      this.closeHandler()
    }
    else if (yPos > 500) {
        console.log("open title")
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
      window.scroll( {top: (this.state.scrollPos - 16), left: 0, behavior: 'smooth' })
    }
  }

  openCard = () => {
    this.setState({
      imgHeight: '350px',
      mLeft: '-24px',
      mRight: '-24px',
      corners: '0px',
      topMargin: '0px',
      bodyText: this.props.story.longbody,
      header: 'inline'
    })
    console.log(this.state.scrollPos, this.state.imgHeight)
    window.scroll( {top: 0, left: 0, behavior: 'smooth' })
    window.addEventListener('scroll', this.handleScroll);
  }

  closeCard = () => {
    this.setState({
      imgHeight: '250px',
      mLeft: '0px',
      mRight: '0px',
      corners: '12px',
      topMargin: '32px',
      bodyText: this.props.story.shortbody,
      header: 'none'
    })
    window.scrollTo({top: this.sectionRef.current.offsetTop, left: 0})
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    let cardStyle = {
      marginLeft: this.state.mLeft,
      marginRight: this.state.mRight,
      borderRadius: this.state.corners,
      marginTop: this.state.topMargin,
    }
    if(this.props.parentHasOpen && !this.state.isOpen) {
      cardStyle = { display: 'none'}
    }
    let headerStyle = {
      display: this.state.header
    }
    let headerTitleStyle = {
      top: this.state.headerTitlePos
    }
    const { story } = this.props
    return (
      <>
      <section className="card" style={cardStyle} onClick={this.openHandler} ref={this.sectionRef}>
        <HeaderImage imageName={story.image} height={this.state.imgHeight} corners={this.state.corners}/>
        <div className="card-text-container">
          <h6>{story.label}</h6>
          <h2>{story.title}</h2>
          <p className="card-author">By {story.author}</p>
          <div className="body-text"><ReactMarkdown source={this.state.bodyText}/></div>
        </div>
        <div className="card-header" style={headerStyle}>
          <div className="title-bar" style={headerTitleStyle}>{story.title}</div>
          <div className="close-btn" onClick={this.closeHandler}></div>
        </div>
      </section>
      </>
    )
  }

}

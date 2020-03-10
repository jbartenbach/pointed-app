import React from 'react'
import { HeaderImage } from './cards/headerimage'
import RichTextToReact from 'rich-text-to-react';


export class StoryCard extends React.Component {

  constructor(props) {
    super(props)
    this.sectionRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  state = {
    isOpen: false,
    isScrolled: false,
    scrollPos: 0
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
        this.setState({isScrolled: true})
    } else {
      this.setState({isScrolled: false})
    }
  }

  openHandler = () =>  {
    if(!this.state.isOpen) {
      this.setState({ isOpen: true })
      this.props.action(true)
      window.scroll( {top: 0, left: 0})
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  closeHandler = () =>  {
    if(this.state.isOpen) {
      this.setState({ isOpen: false })
      this.props.action(false)
      window.scroll( {top: (this.state.scrollPos - 16), left: 0})
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    const { story } = this.props
    console.log('render storycard2 ' + story.author)
    let cardStyles = ''
    if(this.state.isOpen) {
      cardStyles = 'card-open'
    }
    else if(this.props.parentHasOpen && !this.state.isOpen) {
      cardStyles = 'card-off'
    }
    return (
      <section className={`card ${cardStyles}`}  onClick={this.openHandler} ref={this.sectionRef}>
        <HeaderImage imageName={story.image} isOpen={this.state.isOpen}/>
        <div className="card-text-container">
          <h6>{story.label}</h6>
          <h2>{story.title}</h2>
          <p className="card-author">By {story.author}</p>
          <div className="body-text">
            <RichTextToReact document={this.state.isOpen ? story.longBody : story.shortBody } />
          </div>
        </div>
        <div className={`card-header ${cardStyles}`}>
          <div className={`title-bar ${this.state.isScrolled && (' scrolled')}`}>{story.title}</div>
          <div className="close-btn" onClick={this.closeHandler}></div>
        </div>
      </section>
    )
  }
}

import React from 'react'
import { StoryCard } from './StoryCard'


class StoryList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      hasOpen: false
    }
  }

  static defaultProps = {
    stories: [
      {image: "none", label: "Short Story", title: "Story", author: "Anonymous", shortbody: "Click the card to read" }
    ]
  }

  handleClick(isOpen) {
    this.setState({ hasOpen: isOpen })
  }

  render() {
    const { stories } = this.props
    return (
        <div id="main">
          { stories.map(
            (story, i) =>
              <StoryCard
                story= {story}
                key= {story.id}
                action= {this.handleClick}
                parentHasOpen= {this.state.hasOpen}
              />
          )}
        </div>

    );
  }
}

export default StoryList

import React from 'react'
import { StoryCard2 } from './StoryCard2'


class StoryList2 extends React.Component {

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
    console.log('render storylist2')
    const { stories } = this.props
    return (
      <div id="main">
        { stories.map(
          (story, i) =>
            <StoryCard2
              story= {story.fields}
              key= {story.sys.id}
              action= {this.handleClick}
              parentHasOpen= {this.state.hasOpen}
            />
        )}
      </div>
    );
  }
}

export default StoryList2

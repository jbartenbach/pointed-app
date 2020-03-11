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

  handleClick(isOpen) {
    this.setState({ hasOpen: isOpen })
    this.props.action(isOpen)
  }

  render() {
    return (
      <div id="main">
        { this.props.stories.map(
          (story, i) =>
            <StoryCard
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

export default StoryList

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

  handleClick(isOpen) {
    this.setState({ hasOpen: isOpen })
  }

  render() {
    return (
      <div id="main">
        { this.props.stories.map(
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

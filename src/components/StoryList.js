import React from 'react'
import { StoryCard } from './StoryCard'


class StoryList extends React.Component {

  static defaultProps = {
    stories: [
      {image: "none", label: "Short Story", title: "Story", author: "Anonymous", shortbody: "Click the card to read" }
    ]
  }

  render() {
    const { stories } = this.props
    return (
        <div id="main">
          { stories.map(
            (story, i) =>
              <StoryCard story = {story} key = {i} />
          )}
        </div>

    );
  }
}

export default StoryList

import React from 'react'
import { Story } from './Story'


class Storylist extends React.Component {

  static defaultProps = {
    stories: [
      {image: "none", label: "Short Story", title: "Story", author: "Anonymous", shortbody: "Click the card to read" }
    ]
  }

  render() {
    const { stories } = this.props

    return (
      <div id="main">
        <div className="logo2"></div>

        {stories.map(
          (story, i) =>
            <Story story = {story} key = {i} />
        )}
      </div>

    );
  }
}

export default Storylist

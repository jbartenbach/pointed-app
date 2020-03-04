import React from 'react'


export class StoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stories: {}
    }
  }

  componentDidMount() {

  }

  render() {
    console.log('here')
    return (
      <div id="story-page-main">Title of something</div>
    )
  }
}

export default StoryPage

import React from 'react'
import StoryList2 from './components/StoryList2'

const contentful = require('contentful')
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

class StoriesPage extends React.Component {

  constructor() {
    super();
    this.state = {
      stories: []
    }
  };

  componentDidMount() {
    client.getEntries().then(({ items }) => {
      this.setState({ stories: items });
    });
  }

  render() {
    return (
      <StoryList2 stories={this.state.stories} />
    )
  }
}

export default StoriesPage

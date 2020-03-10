import React from 'react'
import StoryList from './components/StoryList'

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
      <>
      <div id="logo"></div>
      <StoryList stories={this.state.stories} />
      </>
    )
  }
}

export default StoriesPage

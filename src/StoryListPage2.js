import React from 'react'
import StoryList2 from './components/StoryList2'

const contentful = require('contentful')
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

class StoryListPage2 extends React.Component {

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
    console.log('render storylistpage2')
    return (
      <StoryList2 stories={this.state.stories} />
    )
  }
}

export default StoryListPage2

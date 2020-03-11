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
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      stories: [],
      hasOpen: false
    }
  };

  componentDidMount() {
    client.getEntries().then(({ items }) => {
      this.setState({ stories: items });
    });
  }

  handleClick(isOpen) {
    this.setState({ hasOpen: isOpen })
  }

  render() {
    return (
      <>
      {!this.state.hasOpen && <div id="logo"></div>}
      <StoryList stories={this.state.stories} action={this.handleClick} />
      </>
    )
  }
}

export default StoriesPage

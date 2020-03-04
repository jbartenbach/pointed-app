import React from 'react'


export class StoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stories: {}
    }
  }

  componentDidMount() {
    console.log('mounted')
    const contentful = require("contentful");
    const client = contentful.createClient({
      space: "o263y6np6fvz",
      accessToken: "UeTem3T79BTpOFYAtYEBb9Ghfbk7bKBunmJut8Qju6I"
    })
    client.getEntries().then(({ items }) => {
      this.setState({ stories: items });
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    // client.getEntries()
    //   .then(function (entries) {
    //       this.setState({stories: 2})
    //       entries.items.forEach(function (entry) {
    //           if(entry.fields) {
    //               console.log(entry.fields)
    //           }
    //       })
    //   })
  }

  render() {
    console.log('here')
    return (
      <div id="story-page-main">Title of something</div>
    )
  }
}

export default StoryPage

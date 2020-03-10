import React from 'react'
import StoryList from './components/StoryList'

const contentful = require('contentful')
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

class Home extends React.Component {

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
      <div id="home-header">
        <div id="home-header-image"></div>
        <div id="home-header-content">
          <h2>A simple way to enjoy great short stories</h2>
          <div id="sign-up">
            <p>Sign up for our weekly email</p>
            <div id="mc_embed_signup">
              <form action="https://pointedstories.us19.list-manage.com/subscribe/post?u=bb35be9040f50a3c919d7eb92&amp;id=2a3eee4fbd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <input type="email" placeholder="Enter email" name="EMAIL" className="required email" id="mce-EMAIL"></input>
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                  </div>
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                    <input type="text" name="b_bb35be9040f50a3c919d7eb92_2a3eee4fbd" tabIndex="-1" defaultValue=""></input>
                  </div>
                  <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn"></input></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <StoryList stories={this.state.stories} />
      </>
    )
  }
}

export default Home

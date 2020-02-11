import React from 'react'
import ReactMarkdown from 'react-markdown'
import storyContent from './assets/data/top-stories.js'
import ScrollToTop from './components/ScrollToTop'
import { HeaderImage } from './components/cards/headerimage'

const StoryPage = ({ match }) => {
  const title = match.params.title;
  const story = storyContent.find(story => story.title === title)

  if (!story) return <h2>Story? What Story?</h2>
  const hasNoImage =
    <div className="story-page-no-image">
      <div className="logo2"></div>
    </div>

  return (
    <div id="story-page-main">
      <ScrollToTop />
      { !story.image ? hasNoImage : <HeaderImage imageName={story.image}/>}
      <div className="page-text-container">
        <h6>{story.label}</h6>
        <h2>{story.title}</h2>
        <p className="card-author">by {story.author}</p>
        {story.longbody.map((paragraph, key) => (
          <div className="body-text full-body" key={key}><ReactMarkdown source={paragraph} /></div>
        ))}
      </div>
    </div>
  )
}

export default StoryPage

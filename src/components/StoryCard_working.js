import React from 'react'
import { Link } from 'react-router-dom'
import { NoHeaderImage } from './cards/noheaderimage'
import { HeaderImage } from './cards/headerimage'
import ReactMarkdown from 'react-markdown'


export class StoryCard extends React.Component {

  static defaultProps = {
    story: [
      {image: "none", label: "Short Story", title: "Story", author: "Anonymous", shortbody: "Click the card to read" }
    ]
  }

  render() {
    const { story } = this.props
    return (
      <Link to={`/story/${story.title}`}>
      <section className="card">
        { story.image ? <HeaderImage imageName={story.image} /> : <NoHeaderImage /> }
        <div className="card-text-container">
          <h6>{story.label}</h6>
          <h2>{story.title}</h2>
          <p className="card-author">By {story.author}</p>
          <div className="body-text"><ReactMarkdown source={story.shortbody} /></div>
        </div>
      </section>
      </Link>
    )
  }

}

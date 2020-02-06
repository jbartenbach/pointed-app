import React from 'react'
import { NoHeaderImage } from './cards/noheaderimage'
import { HeaderImage } from './cards/headerimage'


export class Story extends React.Component {

  static defaultProps = {
    story: [
      {image: "none", label: "Short Story", title: "Story", author: "Anonymous", shortbody: "Click the card to read" }
    ]
  }

  render() {
    const { story } = this.props
    return (
      <section className="card">
        { story.image ? <HeaderImage imageName={story.image} /> : <NoHeaderImage /> }
        <div className="card-text-container">
          <h6>{story.label}</h6>
          <h2>{story.title}</h2>
          <p className="card-author">By {story.author}</p>
          <p className="card-short-body">{story.shortbody}</p>
        </div>
      </section>
    )
  }

}

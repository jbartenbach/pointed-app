import React from 'react'
import StoryList from './components/StoryList'
import data from './assets/data/top-stories.js';

const StoryListPage = () => {

  return (
    <StoryList stories={data} />
  )
}

export default StoryListPage

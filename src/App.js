import React from 'react';
import StoryListPage from './StoryListPage'
import StoryPage from './StoryPage'
import ScrollToTop from './components/ScrollToTop'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import data from './assets/data/top-stories.js';

function App() {
  return (

    <Router>
    <div>
      <ScrollToTop />
      <Route exact path="/"><StoryListPage /></Route>
      <Route path="/story/:title" component={StoryPage} />
    </div>
    </Router>
  );
}

export default App;

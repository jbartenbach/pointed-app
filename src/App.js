import React from 'react';
import StoryListPage from './StoryListPage'
import StoriesPage from './StoriesPage'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (

    <Router>
    <div>
      <Route exact path="/"><StoryListPage /></Route>
      <Route path="/stories" component={StoriesPage} />
    </div>
    </Router>
  );
}

export default App;

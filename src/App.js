import React from 'react';
import StoryListPage from './StoryListPage'
import StoryPage from './StoryPage'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (

    <Router>
    <div>
      <Route exact path="/"><StoryListPage /></Route>
      <Route path="/story/:title" component={StoryPage} />
    </div>
    </Router>
  );
}

export default App;

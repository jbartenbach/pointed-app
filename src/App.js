import React from 'react';
import StoryListPage from './StoryListPage'
import StoryListPage2 from './StoryListPage2'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (

    <Router>
    <div>
      <Route exact path="/"><StoryListPage /></Route>
      <Route path="/stories" component={StoryListPage2} />
    </div>
    </Router>
  );
}

export default App;

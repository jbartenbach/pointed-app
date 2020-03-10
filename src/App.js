import React from 'react';
import StoriesPage from './StoriesPage'
import Home from './Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (

    <Router>
    <div>
      <Route exact path="/"><Home /></Route>
      <Route path="/stories" component={StoriesPage} />
    </div>
    </Router>
  );
}

export default App;

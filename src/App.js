import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './containers/Dashboard';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
    <>
      <Dashboard>
        <Router>
          <Home path="exercises/:exerciseId" />
        </Router>
      </Dashboard>
    </>
    </div>
  );
}

export default App;

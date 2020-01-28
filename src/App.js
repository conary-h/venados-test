import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Dashboard from './containers/Dashboard';
import Home from './containers/Home';
import Players from './containers/Players';
import Statistics from './containers/Statistics';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
    <>
      <Header />
      <Dashboard>
        <Router>
          <Home path="/" />
          <Players path="/players"/>
          <Statistics path="/statistics" />
        </Router>
      </Dashboard>
    </>
    </div>
  );
}

export default App;

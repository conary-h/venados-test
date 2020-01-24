import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Dashboard from './containers/Dashboard';
import Home from './containers/Home';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
    <>
      <Header />
      <Dashboard>
        <Router>
          <Home path="/" />
        </Router>
      </Dashboard>
    </>
    </div>
  );
}

export default App;

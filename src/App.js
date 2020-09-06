import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaligoTest } from './paligo-test'
import { FlareTest } from './flare-test'
import { Route, HashRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>POC for integrating Context Sensitive Help (CSH)</div>
      <ul style={{listStyleType: 'none'}}>
          <li><NavLink to="/flare">MadCap Flare</NavLink></li>
          <li><NavLink to="/paligo">Paligo</NavLink></li>
      </ul>
    </>
  )
}

function App() {
  return (
    <div className="App" style={{margin: '50px'}}>
      {/* <PaligoTest /> */}
      <HashRouter basename="/">
        <Route exact path="/" component={Home} />
        <Route exact path="/flare" component={FlareTest} />
        <Route exact path="/paligo" component={PaligoTest} />
      </HashRouter>
    </div>
  );
}

export default App;

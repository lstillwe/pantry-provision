import React from "react";
import Inventory from './pages/Inventory.js';
import Details from './pages/Details.js';
import Main from './pages/Main.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';

function App() {
  return (
    <div>
      //add signup
      <Route exact path="/Main" component={Main} />
      <Route exact path="/Inventory" component={Inventory} />
      <Route exact path="/Details" component={Details} />
    </div> 
  );
}

export default App;

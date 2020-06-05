import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import Navbar from './Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        

        

        <Switch>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import {  } from 'semantic-ui-react'
import Navbar from './Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './landing/Landing'
 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>


        

        <Switch>
          <Route exact path="/" component={Landing} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

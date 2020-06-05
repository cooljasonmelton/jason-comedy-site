import React from 'react';
import {  } from 'semantic-ui-react'
import robeunicorn from '../pictures/robe-unicorn.jpg';
import './Landing.css'

class Landing extends React.Component{
  render(){
      return <div className="robe-unicorn-div">
          <img src={robeunicorn} className="robe-unicorn-img"/>
      </div>
  }
}

export default Landing;

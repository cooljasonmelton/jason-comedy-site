import React from 'react';
import { Segment } from 'semantic-ui-react'
import './Navbar.css';
import blackstar from './pictures/blackstar.png';
 

class Navbar extends React.Component{
  state = {}

  handleClick = e => {
    this.setState({
      activeItem: e.target.dataset.space
    })
  } 

  render(){
    const {activeItem} = this.state
    return (
      <>
      <div className='title-name'>
        <h1>JASON MELTON</h1>
      </div>
      <Segment className="navbar-container">

        <Segment className="navbar-item" >
          <h3 className={activeItem === "bio" ? "clicked" : ""} 
           onClick={e => this.handleClick(e)}
           data-space="bio" 
          >
            Bio
          </h3>
        </Segment>

        <img src={blackstar} className='navbar-star' alt='star'/>

        <Segment className="navbar-item" >
          <h3 className={activeItem === "shows" ? "clicked" : ""} 
           onClick={e => this.handleClick(e)}
           data-space="shows" 
          >
            Upcoming Shows
          </h3>
        </Segment>

        <img src={blackstar} className='navbar-star' alt='star'/>

        <Segment className="navbar-item" >
          <h3 className={activeItem === "cmj" ? "clicked" : ""} 
           onClick={this.handleClick}
           data-space="cmj" 
          >
            Cocaine Murder Jam (sketches)
          </h3>
        </Segment>

        <img src={blackstar} className='navbar-star' alt='star'/>

        <Segment className="navbar-item" >
          <h3 className={activeItem === "write" ? "clicked" : ""} 
           onClick={e => this.handleClick(e)}
           data-space="write" 
          >
            Misc
          </h3>
        </Segment>
      </Segment>
      </>
    );

  }
}

export default Navbar;

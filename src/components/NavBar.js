import React from 'react';
import './stylesheets/NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className='navBar'>
        <button
          className='profileButton'
          onClick={this.props.displayProfile}
        >
        Profile
        </button>
        <button
          className='projectsButton'
          onClick={this.props.displayProjects}
        >
          Projects
        </button>
        <button
          className='contactDetailsButton'
          onClick={this.props.displayContactDetails}
        >
          Contact
        </button>
      </div>
    )
  }
}

export default NavBar;

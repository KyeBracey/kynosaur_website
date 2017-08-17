import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <button onClick={this.props.displayProfile}>
        Profile
        </button>
        <button onClick={this.props.displayProjects}>
          Projects
        </button>
        <button onClick={this.props.displayContactDetails}>
          Contact
        </button>
      </div>
    )
  }
}

export default NavBar;

import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <div>NavBar - buttons and such will go here.</div>
        <button onClick={this.props.displayProfile}>
        Profile
        </button>
        <button onClick={this.props.displayProjects}>
          Projects
        </button>
      </div>
    )
  }
}

export default NavBar;

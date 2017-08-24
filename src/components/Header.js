import React from 'react';
import './stylesheets/Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <img
          className='profilePicture'
          src={require('../images/profilepicture.png')}
          />
      </div>
    )
  }
}

export default Header;

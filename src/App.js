import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Profile from './components/Profile';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='body'>
        <NavBar />
        <Profile />
      </div>
    );
  }
}

export default App;

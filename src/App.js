import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import ContactDetails from './components/ContactDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentPage: <Profile /> }
  }

  displayProjects() {
    this.setState({currentPage: <Projects />})
  }

  displayProfile() {
    this.setState({currentPage: <Profile />})
  }

  displayContactDetails() {
    this.setState({currentPage: <ContactDetails />})
  }

  // Passing parameters into handlers is not supported :(
  // Must be a cleaner, more DRY way to do this.

  render() {
    return (
      <div className='body'>
        <NavBar
          displayProjects = {this.displayProjects.bind(this)}
          displayProfile = {this.displayProfile.bind(this)}
          displayContactDetails = {this.displayContactDetails.bind(this)}
        />
        {this.state.currentPage}
      </div>
    );
  }
}

export default App;

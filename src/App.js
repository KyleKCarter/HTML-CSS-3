import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "menu-close",
      menuRef: React.createRef()
    }
  }

  handleClick = e => {
    const node = this.state.menuRef.current;
    if (node.className === "menu-close") {
      node.className = "menu-open";

    } else {
      node.className = "menu-close";
    }
  }

  render() {
    return (
      <body>
        <nav>
          <h1 className="navTitle">Start Bootstrap</h1>
          <img src="https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg"
            alt="navButton"
            onClick={this.handleClick}
          />
          <ul id="navMenu">
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <menu id="menu" className='menu-close' ref={this.state.menuRef}>
          <ul className="dropDownMenu">
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </menu>
        <div className='content'>
          <h3 className='welcome'>Welcome To Our Studio!</h3>
          <h1 className='meet'>IT'S NICE TO MEET YOU</h1>
          <button className='tellMeMore'>TELL ME MORE</button>
        </div>
      </body>
    );
  }
}

export default App;

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
        <menu id="menu" ref={this.state.menuRef}>
          <ul className="dropDownMenu">
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </menu>
      </body>
    );
  }
}

export default App;

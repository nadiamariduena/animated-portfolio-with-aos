import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // getBoundingClientRect , will get the size and the position of the div, you need it for when the user will scroll: getBoundingClientRect().top > this.state.scrollPos,
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    return (
      <header className={this.state.show ? "active" : "hidden"}>
        <Link className="logo" to="/Home">
          <h3>FLUXUS</h3>
        </Link>

        <nav>
          <Link className="nav-links" to="/About">
            <li>About</li>
          </Link>
          <Link className="nav-links" to="/Portfolio">
            <li>Portfolio</li>
          </Link>
        </nav>
      </header>
    );
  }
}

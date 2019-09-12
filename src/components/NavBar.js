import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className="Nav-Bar" color="faded" dark>
          <NavbarBrand href="/" className="mr-auto">
            <img
              className="logoNasa"
              src="https://i.ibb.co/NsFs5KQ/NASALogo.png"
              alt="Nasa Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem className="NavBarText">
                <NavLink className="navbar-text" href="https://www.nasa.gov/">
                  🚀 NASA Website 🚀
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navbar-text"
                  href="https://github.com/BrandyBecker"
                >
                  Like My Work? Check Out My GitHub !
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

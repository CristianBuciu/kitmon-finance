import React, { Component } from "react";
import "./navbar.styles.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar className="navbar-content" light expand="md">
          <Container>
            <img
              className="my-navbar-logo"
              alt="finance"
              src="http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/statistics-market-icon.png"
            />

            <Link className="brand" to="/">
              K<span className="logo-slide">it</span>M<span className="logo-slide">on</span>{" "}
              Finance
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                    className={
                      this.state.isOpen === true ? "link-open" : "nav-links"
                    }
                    to="/crypto"
                  >
                    P2P Platforms
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className={
                      this.state.isOpen === true ? "link-open" : "nav-links"
                    }
                    to="/crypto"
                  >
                    Crypto
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className={
                      this.state.isOpen === true ? "link-open" : "nav-links"
                    }
                    to="/tools"
                  >
                    Tools
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className={
                      this.state.isOpen === true ? "link-open" : "nav-links"
                    }
                    to="/about"
                  >
                    About
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

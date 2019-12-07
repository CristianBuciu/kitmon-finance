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
              src="http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/dollar-stats-icon.png"
            />
            <Link className="brand" to="/">
              Kitmon Finance
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                    className={
                      this.state.isOpen === true ? "link-open" : "nav-links"
                    }
                    to="/compound-calculator/"
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

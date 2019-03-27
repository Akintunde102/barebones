import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#notyet">About Us</a>
              </li>
              <li>
                <a href="#notyet">Copyrights</a>
              </li>
              <li>
                <a href="#notyet">Disclaimer</a>
              </li>
              <li>
                <a href="#notyet">Contact Us</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}, LAW REP 
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;

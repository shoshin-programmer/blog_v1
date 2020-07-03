import React from "react";
import { Content, Button, Grid } from "rsuite";
import "rsuite/dist/styles/rsuite-dark.css";
import "./content.css";
import About from "./about";
import Work from "./work";
import Footer from "./footer";

export default class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Content>
          <div className="main-content">
            <Grid fluid className="content-1">
              <div className="content-1-text">
                <p className="main-my-title">I am</p>
                <div className="main-my-name">
                  Mark Atienza.
                  <p className="main-my-title">I automate processes.</p>
                </div>
                <br />
                <p className="main-my-desc">
                  A fulltime web developer based on BGC ( Philippines ) with
                  specialized experience on internal systems. I convert manual
                  work into web-based systems that are{" "}
                  <span style={{ color: "#fff" }}>
                    efficient, well-designed, and scalable{" "}
                  </span>
                  to growing businesses.{" "}
                </p>
                <Button
                  size="lg"
                  style={{ marginTop: "80px" }}
                  appearance="ghost"
                >
                  CONTACT
                </Button>
              </div>
            </Grid>
          </div>
          <About />
          <Work />
          <Footer />
        </Content>
      </React.Fragment>
    );
  }
}

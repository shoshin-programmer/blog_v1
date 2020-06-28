import React from "react";
import { Content, Button, Grid } from "rsuite";
import "rsuite/dist/styles/rsuite-dark.css";
import "./content.css";

export default class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
    this.handleLoad = this.handleLoad.bind(this);
  }
  handleLoad() {
    setTimeout(
      function() {
        this.setState({ show: false });
      }.bind(this),
      1000
    );
  }
  render() {
    return (
      <React.Fragment>
        <Content>
          <div className="main-content">
            <Grid fluid className="content-1">
              <div className="content-1-text">
                <p className="main-my-title">I am</p>
                <p className="main-my-name">
                  Mark Atienza.
                  <p className="main-my-title">I automate processes.</p>
                </p>
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
        </Content>
      </React.Fragment>
    );
  }
}

/*

        <Content>
          <div style={{ height: "100vh", padding: "100px" }}>
            <Grid fluid style={{ height: "100%", paddingTop: "150px" }}>
              <Row>
                <Col md={3} />
                <Col md={10}>
                  <div
                    style={{
                      textAlign: "left",
                      fontFamily:
                        'Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif'
                    }}
                  >
                    <a>I am</a>
                    <p
                      style={{
                        fontSize: "4em",
                        fontWeight: "bold",
                        letterSpacing: "1px"
                      }}
                    >
                      Arvin Mark Atienza
                    </p>
                    <p
                      style={{
                        fontSize: "3em",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        color: "#8892b0"
                      }}
                    >
                      Fullstack Web Developer
                    </p>
                    <br />
                    <Row>
                      <Col md={18}>
                        <p style={{ color: "#8892B0", fontSize: "1.2em" }}>
                          A web developer specializing on internal automation,
                          HR systems, web scraping. Sprinkles of design and
                          process analysis added.{" "}
                        </p>
                      </Col>
                    </Row>
                    <Button
                      size="lg"
                      style={{ marginTop: "50px" }}
                      appearance="ghost"
                    >
                      CONTACT
                    </Button>
                  </div>
                </Col>
                <Col md={6} mdPull={1}>
                  <img
                    src={logo}
                    height="350px"
                    height="auto"
                    alt="shoshin - means beginners mindset"
                  />
                  <p
                    style={{
                      letterSpacing: "2px",
                      color: "#8892B0",
                      marginBottom: "10px"
                    }}
                  >
                    shoshin
                  </p>
                </Col>
                <Col md={5} />
              </Row>
            </Grid>
          </div>
        </Content>
*/

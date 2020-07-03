import React from "react";
import { Nav, Icon, IconButton } from "rsuite";
import "./footer.css";

export default function About() {
  return (
    <div id="footer-container">
      <FooterLinks />
      <div id="footer-section">
        <div className="footer-title">
          <a className="footer-link" href="#footer-container">
            what now?
          </a>
        </div>
        <br />
        <div className="footer-content-wrap">
          <h3>Connect and have a conversation!</h3>
          <br />
          <button className="ghost-btn-lg">Contact</button>
        </div>
      </div>
    </div>
  );
}

class FooterLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer-links-wrap">
        <Nav>
          {[
            { link: "https://github.com/shoshin-programmer", icon: "github" },
            {
              link: "https://www.linkedin.com/in/arvin-mark-atienza-687851143/",
              icon: "linkedin"
            },
            { link: "https://twitter.com/mark16940315", icon: "twitter" }
          ].map((item, index) => (
            <Nav.Item
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
            >
              <IconButton
                appearance="ghost"
                size="sm"
                icon={<Icon icon={item.icon} />}
              ></IconButton>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    );
  }
}

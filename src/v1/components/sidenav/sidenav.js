import React from "react";
import { Nav, Icon, IconButton } from "rsuite";

export default class SideNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ margin: "5px" }} className="sidebar-links">
        {" "}
        <div
          style={{
            height: "100vh",
            position: "fixed",
            left: "20px",
            top: "35%",
            zIndex: 999
          }}
        >
          <Nav vertical style={{ height: "100vh" }}>
            {[
              { link: "https://github.com/shoshin-programmer", icon: "github" },
              {
                link:
                  "https://www.linkedin.com/in/arvin-mark-atienza-687851143/",
                icon: "linkedin"
              },
              { link: "https://twitter.com/mark16940315", icon: "twitter" }
            ].map(item => (
              <Nav.Item>
                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                  <IconButton
                    appearance="ghost"
                    size="sm"
                    icon={<Icon icon={item.icon} />}
                  ></IconButton>
                </a>
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </div>
    );
  }
}

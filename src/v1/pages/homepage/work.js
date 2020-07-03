import React from "react";
import "./work.css";

export default class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      companies: [
        {
          company_name: "ZenRooms",
          job_title: "Python Developer",
          date_started: "March 2020",
          date_ended: "Today",
          description: [
            "Transform manual processes for financial invoicing, expense tracking, orders, and customer data for the finance team.",
            "Backend work using Python with Django, Docker, PostgreSQL.",
            "Frontend work using HTML5, CSS3, and JQuery with Javascript.",
            "Communicate with team on deciding what technologies to use for specific projects."
          ]
        },
        {
          company_name: "RingCentral",
          job_title: "Python Developer",
          date_started: "June 2019",
          date_ended: "March 2020",
          description: [
            "Handle designing, coding, and deployment of projects",
            "Transform Project Owner requirements to specifications.",
            "Work closely with the Project Owner on decision making and presentation of proposed solutions.",
            "Create internal tools and communication using Sharepoint Designer from scratch."
          ]
        },
        {
          company_name: "SiP",
          job_title: "Data Specialist",
          date_started: "September 2018",
          date_ended: "March 2019",
          description: [
            "Data mining using Python for lead generation and other uses.",
            "Helping in Facebook Ad Management.",
            "Automating manual heavy processes using TkInter with Python.",
            "Cleaning and creating data visualizationd based on different data."
          ]
        }
      ]
    };
    this.selectCompany = this.selectCompany.bind(this);
  }
  selectCompany(data) {
    this.setState({
      experience_details: data
    });
  }
  componentDidMount() {
    this.setState({
      experience_details: this.state.companies[0]
    });
  }
  render() {
    return (
      <React.Fragment>
        <div id="work-container">
          <div id="work-section">
            <div className="about-title">
              <a className="about-link" href="#work-container">
                work experience
              </a>
            </div>
            <br />
            <div className="work-exp-wrap">
              <ul className="work-exp-list">
                {" "}
                {this.state.companies.map((data, index) => (
                  <li key={index}>
                    <button onClick={() => this.selectCompany(data)}>
                      {data.company_name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <WorkDetails data={this.state.experience_details} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class WorkDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      ...this.props.data
    });
  }
  render() {
    if (this.props.data) {
      return (
        <div>
          <p>
            {this.props.data.job_title} @ {this.props.data.company_name}
          </p>
          <p>
            {this.props.data.date_started} - {this.props.data.date_ended}
          </p>
          <br />
          <ul>
            {this.props.data.description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

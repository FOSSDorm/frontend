import React, { Component } from "react";
import "./projects.scss";
import ProjectCard from "./project_card/project_card";
import DropdownSearch from "../../components/dropdown_search/dropdown_search";
import Logo from "../../assets/images/logo.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_name: "lorem1",
          project_id: 267248362,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Java", "Python"],
        },
        {
          project_name: "lorem1",
          project_id: 267248363,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Java", "Javascript"],
        },
        {
          project_name: "lorem1",
          project_id: 267248364,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Javascript", "Python"],
        },
        {
          project_name: "lorem1",
          project_id: 267248365,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Rust", "Golang"],
        },
        {
          project_name: "lorem1",
          project_id: 267248366,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Golang", "Python"],
        },
        {
          project_name: "lorem1",
          project_id: 267248367,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Java", "Rust"],
        },
        {
          project_name: "lorem1",
          project_id: 267248368,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Javascript", "Golang"],
        },
        {
          project_name: "lorem1",
          project_id: 267248369,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Rust", "Python", "Javascript", "Java", "Golang"],
        },
        {
          project_name: "lorem1",
          project_id: 267248370,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Rust", "Python", "Javascript", "Java", "Golang"],
        },
        {
          project_name: "lorem1",
          project_id: 267248398,
          project_avatar: Logo,
          project_star: "2",
          project_fork: "2",
          project_issues: "34",
          project_description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero quisquam accusamus sunt velit quae quibusdam libero corporis? Sequi, quaerat illum temporibus consequuntur iste eos sint repellendus porro nisi cum.",
          project_topics: ["Rust", "Python", "Javascript", "Java", "Golang"],
        },
      ],
      selected_languages: [],
    };
  }

  // componentWillMount() {

  // }

  // componentDidMount() {

  // }

  // componentWillReceiveProps(nextProps) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {

  // }
  handleChange = (e, data) => {
    // console.log(data.value);

    this.setState({
      selected_languages: data.value,
    });
  };

  render() {
    let ProjectCards;

    if (this.state.selected_languages.length === 0) {
      ProjectCards = this.state.projects.map((project) => (
        <ProjectCard
          key={project.project_id}
          avatar={project.project_avatar}
          name={project.project_name}
          star={project.project_star}
          fork={project.project_fork}
          issues={project.project_issues}
          description={project.project_description}
          topics={project.project_topics}
        />
      ));
    //   console.log(ProjectCards);
    } else {    
        let pc = [];
        let pc_id=[]; // ID's of projects pushed for Project Cards
      for (let i = 0; i < this.state.selected_languages.length; i++) {
        for (let j = 0; j < this.state.projects.length; j++) {
          if (
            this.state.projects[j].project_topics.includes(
              this.state.selected_languages[i]
            ) && !pc_id.includes(this.state.projects[j].project_id)
          ) {
            pc.push(
              <ProjectCard
                key={this.state.projects[j].project_id}
                avatar={this.state.projects[j].project_avatar}
                name={this.state.projects[j].project_name}
                star={this.state.projects[j].project_star}
                fork={this.state.projects[j].project_fork}
                issues={this.state.projects[j].project_issues}
                description={this.state.projects[j].project_description}
                topics={this.state.projects[j].project_topics}
              />
            );
            pc_id.push(this.state.projects[j].project_id)
            // console.log(this.state.projects[j].project_id.toString());
          }
        }
      }

      //  console.log(pc);
      if (pc.length === 0) {
        ProjectCards = <p>No results found.</p>;
      } else {
        ProjectCards = pc;
      }
      console.log(ProjectCards);

    }
    return (
      <div className="projects">
        <p
          className="highlight_text"
          style={{ textAlign: "center", fontSize: "1.4rem" }}
        >
          All open source projects listed at FOSSDorm are not a random projects.
          We've officially contacted the project owner and vice-versa and after
          mutually agreeing, we've listed the project here. All projects are
          verified to avoid any fraud for earning rewards.
        </p>
        <hr />
        <div className="projects_div">
          <div className="filters">
            <div className="language">
              <b>Select langauge: </b>
              <DropdownSearch
                option="language"
                handleChange={this.handleChange}
              />
            </div>
            {/* <div className="level">
                        <b>Select difficulty level: </b>
                        <DropdownSearch option="level"/>
                        </div> */}
          </div>
          <div className="project_list">{ProjectCards}</div>
        </div>
      </div>
    );
  }
}

export default Projects;

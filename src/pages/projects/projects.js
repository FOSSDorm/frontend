import React, { Component } from 'react';
import './projects.scss';
import ProjectCard from '../../components/project_card/project_card';
import DropdownSearch from '../../components/dropdown_search/dropdown_search';
import Logo from '../../assets/images/logo.png';

class Projects extends Component {
    // constructor(props) {
    //     super(props);

    // }

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

    render() {
        return (
            <div className="projects">
                <p className="highlight_text" style={{textAlign:'center',fontSize:'1.4rem'}}>All open source projects listed at FOSSDorm are not a random projects. We've officially contacted the project owner and vice-versa and after mutually agreeing, we've listed the project here.
                All projects are verified to avoid any fraud for earning rewards.</p>
                <hr/><div className="projects_div">
                    
                    <div className="filters">
                        <div className="language">
                            <b>Select langauge: </b>
                            <DropdownSearch option="language"/>
                        </div>
                        <div className="level">
                        <b>Select difficulty level: </b>
                        <DropdownSearch option="level"/>
                        </div>
                    </div>
                    <div className="project_list">
                        <ProjectCard logo={Logo} name="FOSSDorm"/>
                        <ProjectCard logo={Logo} name="FOSSDorm"/>
                        <ProjectCard logo={Logo} name="FOSSDorm"/>
                        <ProjectCard logo={Logo} name="FOSSDorm"/>
                        <ProjectCard logo={Logo} name="FOSSDorm"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
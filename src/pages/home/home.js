import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./home.scss";
// import Timeline from '../../components/timeline/timeline'
class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     window.scrollTo(0, 0);
  //   }
  // }
  render() {
    return (
      <>
      <div className="home">
        <div className="logo_div">
          <img src={logo} alt="FOSSDorm" className="logo" />
        </div>
          {/* <Timeline/> */}
        </div>
      </>
    );
  }
}

export default Home;

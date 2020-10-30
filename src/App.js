import React from 'react';
import Layout from "./hoc/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import LogIn from './pages/login/login';
import GuideToSubmitProject from './pages/guide_to_submit_project/guide_to_submit_project';
import LearnToContribute from './pages/learn_to_contribute/learn_to_contribute';
import RewardSystem from './pages/reward_system/reward_system'
import LoggedIn from './pages/loggedin/loggedin';
import PageNotFound from './pages/page_not_found/page_not_found';
import UserProfile from './pages/user_profile/user_profile'

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/guide-to-submit-project" exact component={GuideToSubmitProject} />
          <Route path="/learn-to-contribute" exact component={LearnToContribute} />
          <Route path="/reward-system" exact component={RewardSystem} />
          <Route path="/user/:username" exact component={UserProfile} />
          <Route path="/user/:username/:isLoggedIn" exact component={LoggedIn} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
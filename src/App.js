import React from 'react';
import Layout from "./hoc/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from './pages/home/home';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
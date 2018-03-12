import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './UI/LandingPage/LandingPage';
import Layout from './hoc/layout/Layout';
import NavBar from './component/NavBar/NavBar';
import Card from './component/Card/Card';

class App extends Component {
  render() {
    return (
      <Layout>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/cards" component={Card}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;

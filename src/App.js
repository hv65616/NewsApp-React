import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  pageSize = 8;
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={this.pageSize}
                category="general"
              ></News>
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pageSize={this.pageSize}
                category="general"
              ></News>
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={this.pageSize}
                category="business"
              ></News>
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={this.pageSize}
                category="entertainment"
              ></News>
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={this.pageSize}
                category="health"
              ></News>
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={this.pageSize}
                category="science"
              ></News>
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={this.pageSize}
                category="sports"
              ></News>
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={this.pageSize}
                category="technology"
              ></News>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  pageSize = 8;
  state = {
    progress: 10,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
            shadow={true}
          />

          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                category="general"
              ></News>
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                category="general"
              ></News>
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
                category="business"
              ></News>
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                category="entertainment"
              ></News>
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                category="health"
              ></News>
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                category="science"
              ></News>
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                category="sports"
              ></News>
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
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
